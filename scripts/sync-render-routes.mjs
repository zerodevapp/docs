/**
 * sync-render-routes — apply production redirect/rewrite routes to the Render
 * static site via the Render API.
 *
 * WHY NOT render.yaml / Blueprint?
 *   Render Blueprints MERGE routes and never delete them
 *   (https://render.com/docs/blueprint-spec), and a service is capped at
 *   200 routes total. A curated redirect set needs deletions and must stay under
 *   the cap, so routes are owned here instead: `redirects.config.js` is the
 *   single source of truth, this script consolidates it to <=200 routes, and
 *   PUTs the whole list (atomic replace) to
 *     PUT https://api.render.com/v1/services/{id}/routes
 *   which deletes anything not in the list and sets priority = list order.
 *
 * The raw map has 200+ entries (over the cap), so prefix-preserving groups are
 * collapsed into wildcard rules (`/old/* -> /new/*`, Render substitutes the
 * captured tail). Only groups that are a clean prefix swap for EVERY member are
 * collapsed; anything else stays an individual rule. See COLLAPSES below.
 *
 * Usage:
 *   node scripts/sync-render-routes.mjs           # dry run: build + validate + print summary
 *   node scripts/sync-render-routes.mjs --apply   # also PUT to Render
 *                                                 # requires RENDER_API_KEY + RENDER_SERVICE_ID
 *   node scripts/sync-render-routes.mjs --json    # print the resolved route list as JSON
 */

import { redirects } from "../redirects.config.js";

const RENDER_ROUTE_LIMIT = 200;

// Prefix-swap collapses: every legacy path under `from` maps to `to` + the same
// trailing segments, so the whole group becomes one wildcard rule. Each is
// verified against redirects.config.js at build time — if any member is NOT a
// clean swap, the collapse is skipped and its entries stay individual (and the
// build will warn). Keep these CONSERVATIVE; do not add a prefix whose leaves
// scatter to different destinations (it would mis-redirect via the wildcard).
const COLLAPSES = [
  ["/react", "/advanced/react-hooks"],
  ["/resources", "/api-and-toolings"],
  ["/sdk/permissions", "/smart-accounts/permissions"],
  ["/smart-accounts/authentication", "/onboarding"],
  ["/smart-wallet/permissions", "/smart-accounts/permissions"],
  ["/sdk/faqs", "/api-and-toolings/faqs"],
  ["/meta-infra", "/api-and-toolings/infrastructure"],
  ["/smart-accounts/account-recovery", "/advanced/account-recovery"],
  ["/cross-chain/chain-abstraction", "/smart-accounts/chain-abstraction"],
  ["/sdk/presets", "/api-and-toolings/presets"],
  ["/smart-accounts/use-plugins/passkeys", "/onboarding/passkeys"],
];

// Legacy Magic Account subpaths (no per-path entries in redirects.config.js).
const MAGIC_ACCOUNT_WILDCARD = {
  type: "redirect",
  source: "/magic-account/*",
  destination: "/smart-accounts/chain-abstraction/overview",
};

// SPA fallbacks: serve the app shell for unmapped legacy paths under these
// prefixes (so they get the in-app 404, not Render's raw 404). Emitted as both
// `/prefix/*` and `/prefix`. Any that collide with a redirect source above are
// dropped (the redirect wins) during de-duplication.
const SPA_PREFIXES = ["/sdk", "/meta-infra", "/recovery-flow", "/blog", "/react", "/smart-wallet"];

export function buildRoutes() {
  const warnings = [];
  const consumed = new Set();
  const wildcards = [];

  for (const [src, dst] of COLLAPSES) {
    const group = redirects.filter((r) => r.from === src || r.from.startsWith(src + "/"));
    if (!group.length) {
      warnings.push(`collapse ${src}: no matching entries`);
      continue;
    }
    const bad = group.filter((r) => r.to !== dst + r.from.slice(src.length));
    if (bad.length) {
      warnings.push(
        `collapse ${src} -> ${dst} SKIPPED: ${bad.length} non-clean member(s), e.g. ${bad[0].from} -> ${bad[0].to}`,
      );
      continue;
    }
    group.forEach((r) => consumed.add(r.from));
    wildcards.push({ type: "redirect", source: `${src}/*`, destination: `${dst}/*` });
  }

  const individuals = redirects
    .filter((r) => !consumed.has(r.from))
    .map((r) => ({ type: "redirect", source: r.from, destination: r.to }));

  const spaRewrites = SPA_PREFIXES.flatMap((p) => [
    { type: "rewrite", source: `${p}/*`, destination: "/index.html" },
    { type: "rewrite", source: p, destination: "/index.html" },
  ]);

  // Order matters (Render = first match by priority, top to bottom):
  // specific redirects, then collapse wildcards, then the magic-account
  // wildcard, then the broad SPA fallbacks last.
  const ordered = [...individuals, ...wildcards, MAGIC_ACCOUNT_WILDCARD, ...spaRewrites];

  // De-dup by source (first occurrence wins) so a broad SPA rewrite never
  // shadows or duplicates a redirect with the same source (e.g. /react/*).
  const seen = new Set();
  const routes = [];
  for (const r of ordered) {
    if (seen.has(r.source)) continue;
    seen.add(r.source);
    routes.push(r);
  }

  const stats = {
    sourceEntries: redirects.length,
    individuals: individuals.length,
    wildcards: wildcards.length,
    rewrites: routes.filter((r) => r.type === "rewrite").length,
    total: routes.length,
  };

  if (routes.length > RENDER_ROUTE_LIMIT) {
    throw new Error(
      `build produced ${routes.length} routes, over Render's ${RENDER_ROUTE_LIMIT} cap. ` +
        `Add a safe collapse to COLLAPSES or trim redirects.config.js.`,
    );
  }
  return { routes, stats, warnings };
}

async function putRoutes(routes) {
  const key = process.env.RENDER_API_KEY;
  const svc = process.env.RENDER_SERVICE_ID;
  if (!key || !svc) {
    throw new Error("--apply requires RENDER_API_KEY and RENDER_SERVICE_ID env vars.");
  }
  const res = await fetch(`https://api.render.com/v1/services/${svc}/routes`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(routes),
  });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(`Render API PUT failed (HTTP ${res.status}): ${body}`);
  }
  return JSON.parse(body);
}

// --- CLI ---
const { routes, stats, warnings } = buildRoutes();

if (process.argv.includes("--json")) {
  process.stdout.write(JSON.stringify(routes, null, 2) + "\n");
} else {
  console.log(
    `routes: ${stats.total}/${RENDER_ROUTE_LIMIT} ` +
      `(${stats.individuals} individual + ${stats.wildcards} wildcard redirects, ${stats.rewrites} rewrites) ` +
      `from ${stats.sourceEntries} source entries`,
  );
  for (const w of warnings) console.warn(`  warning: ${w}`);
}

if (process.argv.includes("--apply")) {
  const applied = await putRoutes(routes);
  console.log(`applied: PUT replaced routes — service now has ${applied.length} routes.`);
}
