// npm run check:redirects — fails on a dead target, a chain, a duplicate
// source, a rule that shadows a page that still exists, or a target no sidebar
// links to.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
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

// Routes the sidebar links to. A redirect that lands anywhere else drops the
// reader on a page with no navigation around it.
function sidebarLinks() {
  const cfg = readFileSync(join(ROOT, "vocs.config.tsx"), "utf8");
  const start = cfg.indexOf("  sidebar: {");
  if (start < 0) return null;
  let depth = 0, end = -1;
  for (let i = cfg.indexOf("{", start); i < cfg.length; i++) {
    if (cfg[i] === "{") depth++;
    else if (cfg[i] === "}" && --depth === 0) { end = i; break; }
  }
  if (end < 0) return null;
  return new Set([...cfg.slice(start, end).matchAll(/link:\s*["'](\/[^"']*)["']/g)]
    .map((m) => stripTrailingSlash(m[1])));
}

// Trees that are already orphaned and tracked elsewhere (DES-21 owns the React
// hooks tree). New orphan targets outside these must not be added.
const ORPHAN_OK = ["/advanced/react-hooks/", "/api-and-toolings/", "/smart-accounts/permissions/1-click-trading"];

const SIDEBAR = sidebarLinks();
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

  if (SIDEBAR && target !== "/" && !SIDEBAR.has(target) && !ORPHAN_OK.some((p) => target.startsWith(p))) {
    errors.push(`${from} -> ${to} (no sidebar links to this page)`);
  }
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
