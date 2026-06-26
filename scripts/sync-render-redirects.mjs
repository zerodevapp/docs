/**
 * sync-render-redirects — splice redirects.config.js into render.yaml.
 *
 * The list in redirects.config.js is the single source of truth. Vocs only
 * applies it in local dev (via the middleware in vocs.config.tsx), so this
 * script mirrors it into render.yaml so Render serves the redirects in
 * production. Render reads render.yaml at the start of a deployment (before the
 * build command runs), so the generated file is committed.
 *
 * render.yaml is hand-maintained: it holds the static-site service definition
 * (name/build/domains) and the broad SPA-fallback rewrites that must sit BELOW
 * the redirects. So rather than regenerating the whole file, we replace only the
 * lines between the BEGIN/END markers, leaving the rest untouched. This mirrors
 * the OffchainLabs/arbitrum-docs sentinel-splice approach.
 *
 * Run with `npm run sync-redirects` (also runs on `npm run build` via prebuild).
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { redirects } from "../redirects.config.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const renderPath = path.join(root, "render.yaml");

const BEGIN = "# >>> BEGIN GENERATED REDIRECTS";
const END = "# <<< END GENERATED REDIRECTS";

const yaml = await readFile(renderPath, "utf8");
const lines = yaml.split("\n");

const beginIdx = lines.findIndex((l) => l.includes(BEGIN));
const endIdx = lines.findIndex((l) => l.includes(END));
if (beginIdx === -1 || endIdx === -1 || endIdx < beginIdx) {
  throw new Error(
    `sync-render-redirects: could not find BEGIN/END markers in render.yaml`,
  );
}

// Indent the generated list items to match the BEGIN marker's column. Render
// redirects are always 301 (the type isn't configurable), so there's no
// permanent/temporary flag to emit. Values are double-quoted (JSON.stringify)
// so any future path with YAML-special characters stays safe.
//
// Format note: block style + double-quoted scalars is exactly Prettier's
// default YAML output, so the generated render.yaml stays prettier-clean (no
// .prettierignore needed, `npm run format` leaves it untouched). Verified
// against prettier 3.5.3–3.8.x. Don't switch this to flow style (`{ type: ...,
// source: ... }`) — Prettier would reformat it and fight the sync check.
const indent = lines[beginIdx].match(/^\s*/)[0];
const block = redirects.flatMap(({ from, to }) => [
  `${indent}- type: redirect`,
  `${indent}  source: ${JSON.stringify(from)}`,
  `${indent}  destination: ${JSON.stringify(to)}`,
]);

const next = [
  ...lines.slice(0, beginIdx + 1),
  ...block,
  ...lines.slice(endIdx),
];

await writeFile(renderPath, next.join("\n"));
console.log(
  `sync-render-redirects: wrote ${redirects.length} redirects into render.yaml.`,
);
