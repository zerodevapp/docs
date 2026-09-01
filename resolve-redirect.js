// Shared by server.mjs, the vocs dev middleware, and scripts/check-redirects.mjs.

import { redirects } from "./redirects.config.js";

const EXACT = new Map(redirects.map((r) => [r.from, r.to]));

// Catch-all for subpaths with no exact rule.
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
