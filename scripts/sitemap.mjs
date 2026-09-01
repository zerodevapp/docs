// Writes docs/dist/sitemap.xml after `vocs build`.
//
// Read from the built HTML, not the page sources, so the sitemap cannot
// contradict what a page declares. Listed only if the page asks to be indexed:
// no noindex, and a canonical pointing at itself.

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
    if (statSync(full).isDirectory())
      out.push(...pages(full, `${prefix}/${entry}`));
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
  const uncanonical = [];

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

    // No canonical means the head config stopped rendering, which vocs does
    // silently. Collect and fail rather than listing the page: a sitemap that
    // keeps working while the tags vanish hides the regression.
    const canonical = tag(
      html,
      /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
    );
    if (!canonical) {
      uncanonical.push(route);
      continue;
    }
    if (stripTrailingSlash(canonical) !== stripTrailingSlash(ORIGIN + route)) {
      skipped.duplicate++;
      continue;
    }

    if (textOf(html).length < MIN_TEXT) {
      skipped.empty++;
      continue;
    }

    urls.push(route === "/" ? `${ORIGIN}/` : ORIGIN + route);
  }

  return { urls: urls.sort(), skipped, uncanonical };
}

function main() {
  const { urls, skipped, uncanonical } = sitemapEntries();

  if (uncanonical.length) {
    console.error(`${uncanonical.length} built page(s) have no canonical tag:`);
    for (const r of uncanonical.slice(0, 10)) console.error(`  ${r}`);
    if (uncanonical.length > 10) {
      console.error(`  ...${uncanonical.length - 10} more`);
    }
    console.error("check the head() function in vocs.config.tsx");
    process.exit(1);
  }

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
  console.log(
    `sitemap.xml: ${urls.length} urls${dropped ? ` (skipped ${dropped})` : ""}`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
