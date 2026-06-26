// Docs web service: serves docs/dist via sirv and applies redirects.config.js
// redirects in middleware. Render sets PORT.

import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import sirv from "sirv";

import { redirects } from "./redirects.config.js";

const PORT = Number(process.env.PORT) || 10000;
const DIR = join(fileURLToPath(new URL(".", import.meta.url)), "docs", "dist");

const EXACT = new Map(redirects.map((r) => [r.from, r.to]));
const PREFIX = [["/magic-account", "/smart-accounts/chain-abstraction/overview"]];
const SPA_FALLBACK = ["/sdk", "/meta-infra", "/recovery-flow", "/blog", "/react", "/smart-wallet"];

const assets = sirv(DIR, {
  etag: true,
  gzip: true,
  brotli: true,
  setHeaders(res, pathname) {
    if (pathname.startsWith("/assets/")) {
      res.setHeader("cache-control", "public, max-age=31536000, immutable");
    }
  },
});
const shell = sirv(DIR, { etag: true, single: true }); // serves index.html on miss
const notFound = existsSync(join(DIR, "404.html")) ? readFileSync(join(DIR, "404.html")) : null;

function redirectTo(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return (
    EXACT.get(pathname) ??
    EXACT.get(clean) ??
    PREFIX.find(([p]) => clean === p || clean.startsWith(p + "/"))?.[1] ??
    null
  );
}

const isSpaFallback = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return SPA_FALLBACK.some((p) => clean === p || clean.startsWith(p + "/"));
};

createServer((req, res) => {
  const { pathname, search } = new URL(req.url, "http://localhost");

  const to = redirectTo(pathname);
  if (to) {
    res.writeHead(301, { location: to + search });
    return res.end();
  }

  assets(req, res, () => {
    if (isSpaFallback(pathname)) return shell(req, res, () => res.end());
    if (notFound) {
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      return res.end(notFound);
    }
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  });
}).listen(PORT, "0.0.0.0", () => console.log(`docs server listening on :${PORT}`));
