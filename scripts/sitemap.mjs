// Writes docs/dist/sitemap.xml after `vocs build`.
//
// The list is derived from the built HTML rather than from the page sources, so
// the sitemap can never disagree with what the pages themselves declare. A page
// is listed only when it asks to be indexed: no noindex, and a canonical tag
// pointing at itself. Everything else is a duplicate or a dead end, and Google
// treats a sitemap entry that contradicts the page as an error.

import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { resolveRedirect, stripTrailingSlash } from "../resolve-redirect.js";

export const ORIGIN = "https://docs.zerodev.app";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIST = join(ROOT, "docs", "dist");

// Under this many characters of visible text a page has nothing to rank for.
const MIN_TEXT = 50;

function pages(dir, prefix = "") {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...pages(full, `${prefix}/${entry}`));
    else if (entry === "index.html") out.push([prefix || "/", full]);
  }
  return out;
}

const textOf = (html) =>
  html
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tag = (html, re) => html.match(re)?.[1] ?? null;

export function sitemapEntries() {
  const skipped = { redirected: 0, noindex: 0, duplicate: 0, empty: 0 };
  const urls = [];

  for (const [route, file] of pages(DIST)) {
    // .vocs holds the search index, not pages.
    if (route.startsWith("/.")) continue;

    if (resolveRedirect(route)) {
      skipped.redirected++;
      continue;
    }

    const html = readFileSync(file, "utf8");

    if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) {
      skipped.noindex++;
      continue;
    }

    const canonical = tag(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    if (canonical && stripTrailingSlash(canonical) !== stripTrailingSlash(ORIGIN + route)) {
      skipped.duplicate++;
      continue;
    }

    if (textOf(html).length < MIN_TEXT) {
      skipped.empty++;
      continue;
    }

    urls.push(route === "/" ? `${ORIGIN}/` : ORIGIN + route);
  }

  return { urls: urls.sort(), skipped };
}

function main() {
  const { urls, skipped } = sitemapEntries();

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((u) => `  <url><loc>${u}</loc></url>`),
    "</urlset>",
    "",
  ].join("\n");

  writeFileSync(join(DIST, "sitemap.xml"), xml);

  const dropped = Object.entries(skipped)
    .filter(([, n]) => n)
    .map(([k, n]) => `${n} ${k}`)
    .join(", ");
  console.log(`sitemap.xml: ${urls.length} urls${dropped ? ` (skipped ${dropped})` : ""}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
