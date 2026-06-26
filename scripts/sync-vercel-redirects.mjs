/**
 * sync-vercel-redirects — mirror redirects.config.js into vercel.json.
 *
 * The list in redirects.config.js is the single source of truth. Vocs only
 * applies it in local dev (via the middleware in vocs.config.tsx), so this
 * script mirrors it into vercel.json so Vercel serves the redirects in
 * production. Vercel reads vercel.json at the start of a deployment (before the
 * build command runs), so the generated file is committed.
 *
 * Run with `npm run sync-redirects` (also runs on `npm run build` via prebuild).
 *
 * Patterned on OffchainLabs/arbitrum-docs (scripts/sync-vercel-redirects.ts).
 * That repo splices a sentinel-bounded block into a hand-maintained vercel.json
 * to coexist with manual entries; ZeroDev's vercel.json is fully generated, so
 * here we (re)write it wholesale. Written as `.mjs` because this repo has no
 * `tsx`; it imports the `.js` config natively.
 */

import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { redirects } from "../redirects.config.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const vercelPath = path.join(root, "vercel.json");

// permanent: false -> 307, matching the arbitrum-docs convention. Temporary
// redirects aren't cached aggressively by browsers/crawlers, which keeps future
// doc reorganizations easy to revert.
const json =
  JSON.stringify(
    {
      redirects: redirects.map(({ from, to }) => ({
        source: from,
        destination: to,
        permanent: false,
      })),
    },
    null,
    2,
  ) + "\n";

await writeFile(vercelPath, json);
console.log(`sync-redirects: wrote ${redirects.length} redirects into vercel.json.`);
