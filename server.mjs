// Docs web service: serves docs/dist and applies redirects.config.js redirects.
// Zero deps; Render sets PORT.

import { createServer } from "node:http";
import { stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { join, normalize, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

import { redirects } from "./redirects.config.js";

const PORT = Number(process.env.PORT) || 10000;
const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "docs", "dist");
const REDIRECT_STATUS = 301;

const EXACT = new Map(redirects.map((r) => [r.from, r.to]));
const PREFIX = [["/magic-account", "/smart-accounts/chain-abstraction/overview"]];
// Legacy prefixes that fall back to the app shell (mirrors prior Render rewrites).
const SPA_FALLBACK = ["/sdk", "/meta-infra", "/recovery-flow", "/blog", "/react", "/smart-wallet"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".map": "application/json; charset=utf-8",
};

function lookupRedirect(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (EXACT.has(pathname)) return EXACT.get(pathname);
  if (EXACT.has(clean)) return EXACT.get(clean);
  for (const [pfx, to] of PREFIX) {
    if (clean === pfx || clean.startsWith(pfx + "/")) return to;
  }
  return null;
}

async function resolveFile(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const abs = join(ROOT, normalize(decoded));
  if (abs !== ROOT && !abs.startsWith(ROOT + sep)) return null; // block traversal

  const candidates = extname(abs)
    ? [abs]
    : [join(abs, "index.html"), `${abs}.html`, abs];
  for (const c of candidates) {
    try {
      if ((await stat(c)).isFile()) return c;
    } catch {
      /* next */
    }
  }
  return null;
}

function serveFile(req, res, status, file) {
  const immutable =
    file.includes(`${sep}assets${sep}`) || /[.-][0-9a-f]{8,}\.[a-z0-9]+$/i.test(file);
  const headers = {
    "Content-Type": MIME[extname(file)] || "application/octet-stream",
    "Cache-Control": immutable
      ? "public, max-age=31536000, immutable"
      : "public, max-age=0, must-revalidate",
  };
  res.writeHead(status, headers);
  if (req.method === "HEAD") return res.end();
  createReadStream(file).pipe(res);
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  const to = lookupRedirect(url.pathname);
  if (to) {
    res.writeHead(REDIRECT_STATUS, { Location: to + url.search });
    return res.end();
  }

  const file = await resolveFile(url.pathname);
  if (file) return serveFile(req, res, 200, file);

  const clean = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
  if (SPA_FALLBACK.some((p) => clean === p || clean.startsWith(p + "/"))) {
    const index = await resolveFile("/");
    if (index) return serveFile(req, res, 200, index);
  }

  const notFound = await resolveFile("/404.html");
  if (notFound) return serveFile(req, res, 404, notFound);
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

server.listen(PORT, "0.0.0.0", () => console.log(`docs server listening on :${PORT}`));
