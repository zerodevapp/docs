// npm run check:redirects — fails on a dead target, a chain, a duplicate
// source, or a rule that shadows a page that still exists.

import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { redirects } from "../redirects.config.js";
import { PREFIX, resolveRedirect, stripTrailingSlash } from "../resolve-redirect.js";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PAGES = join(ROOT, "docs", "pages");

// Derived from page sources, so the check runs without a build.
function routes(dir = PAGES, prefix = "") {
  const out = new Set();
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      for (const r of routes(full, `${prefix}/${entry}`)) out.add(r);
    } else if (/\.mdx?$/.test(entry)) {
      const name = entry.replace(/\.mdx?$/, "");
      out.add(name === "index" ? prefix || "/" : `${prefix}/${name}`);
    }
  }
  return out;
}

if (!existsSync(PAGES)) {
  console.error(`docs/pages not found at ${PAGES}`);
  process.exit(1);
}

const ROUTES = routes();
const errors = [];
const seen = new Map();

for (const { from, to } of redirects) {
  if (seen.has(from)) errors.push(`duplicate source ${from} (${seen.get(from)} and ${to})`);
  seen.set(from, to);

  // Internal targets only: blog posts keep their source files on purpose while
  // pointing at the marketing site.
  if (!to.startsWith("http") && ROUTES.has(stripTrailingSlash(from))) {
    errors.push(`${from} is redirected but the page still exists`);
  }

  if (to.startsWith("http")) continue;

  const target = stripTrailingSlash(to.split(/[?#]/)[0]);
  if (!ROUTES.has(target)) errors.push(`${from} -> ${to} (no such page)`);
  if (resolveRedirect(target)) errors.push(`${from} -> ${to} -> ${resolveRedirect(target)} (chain)`);
}

for (const [prefix, target] of PREFIX) {
  if (!ROUTES.has(stripTrailingSlash(target))) {
    errors.push(`prefix ${prefix} -> ${target} (no such page)`);
  }
}

if (errors.length) {
  console.error(`${errors.length} redirect problem(s):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

console.log(`${redirects.length} redirects ok, ${ROUTES.size} routes`);
