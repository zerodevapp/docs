// Audits redirects.config.js. Run with `npm run check:redirects`.
//
// Catches the four ways a redirect table rots:
//   1. a rule whose target is a page that does not exist (readers land on a 404)
//   2. a rule whose target is itself redirected (two hops; Google discounts them)
//   3. two rules with the same source (one silently wins)
//   4. a rule whose source is a page that still exists (the redirect shadows it)

import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { redirects } from "../redirects.config.js";
import { PREFIX, resolveRedirect, stripTrailingSlash } from "../resolve-redirect.js";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PAGES = join(ROOT, "docs", "pages");

// Every route Vocs will build, derived from the page sources so the check runs
// without a build step.
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

  // Shadowing only counts against internal targets. The blog posts deliberately
  // keep their source files while pointing at the marketing site; once the last
  // two posts are published there (DES-19) those files can go.
  if (!to.startsWith("http") && ROUTES.has(stripTrailingSlash(from))) {
    errors.push(`${from} is redirected but the page still exists`);
  }

  if (to.startsWith("http")) continue;

  const target = stripTrailingSlash(to.split(/[?#]/)[0]);
  if (!ROUTES.has(target)) errors.push(`${from} -> ${to} (no such page)`);
  if (resolveRedirect(target)) errors.push(`${from} -> ${to} -> ${resolveRedirect(target)} (chain)`);
}

// The prefix rules in resolve-redirect.js must also land somewhere real.
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
