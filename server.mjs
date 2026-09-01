// Docs web service: serves docs/dist via sirv and applies redirects.config.js
// redirects in middleware. Render sets PORT.

import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import sirv from "sirv";

import { resolveRedirect } from "./resolve-redirect.js";

const PORT = Number(process.env.PORT) || 10000;
const DIR = join(fileURLToPath(new URL(".", import.meta.url)), "docs", "dist");

const assets = sirv(DIR, {
  etag: true,
  gzip: true,
  brotli: true,
  // Vocs writes its search index to docs/dist/.vocs/search-index-<hash>.json and
  // the client fetches it from /.vocs/...; sirv skips dot-directories unless this
  // is set, which 404'd the index and broke site search.
  dotfiles: true,
  setHeaders(res, pathname) {
    if (pathname.startsWith("/assets/")) {
      res.setHeader("cache-control", "public, max-age=31536000, immutable");
    }
  },
});
const notFound = existsSync(join(DIR, "404.html")) ? readFileSync(join(DIR, "404.html")) : null;

createServer((req, res) => {
  const { pathname, search } = new URL(req.url, "http://localhost");

  const to = resolveRedirect(pathname);
  if (to) {
    res.writeHead(301, { location: to + search });
    return res.end();
  }

  assets(req, res, () => {
    if (notFound) {
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      return res.end(notFound);
    }
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  });
}).listen(PORT, "0.0.0.0", () => console.log(`docs server listening on :${PORT}`));
