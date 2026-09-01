// Single source of truth for how a request path becomes a redirect target.
// server.mjs serves with it; scripts/check-redirects.mjs audits with it.

import { redirects } from "./redirects.config.js";

const EXACT = new Map(redirects.map((r) => [r.from, r.to]));

// Prefix rules are a last resort for whole trees whose subpaths were never
// enumerated. Anything we know about gets an exact rule in redirects.config.js.
export const PREFIX = [["/magic-account", "/smart-accounts/chain-abstraction/overview"]];

export const stripTrailingSlash = (pathname) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

export function resolveRedirect(pathname) {
  const clean = stripTrailingSlash(pathname);
  return (
    EXACT.get(pathname) ??
    EXACT.get(clean) ??
    PREFIX.find(([p]) => clean === p || clean.startsWith(p + "/"))?.[1] ??
    null
  );
}
