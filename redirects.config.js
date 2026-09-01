/**
 * Internal doc redirects: legacy URL -> new URL.
 *
 * Single source of truth for redirects. Consumed in two places:
 *   - the dev-server redirect middleware in vocs.config.tsx (local `vocs dev`)
 *   - server.mjs, which applies them on the Render web service in production.
 *
 * Both do a direct lookup against this list, so a redirect added here takes
 * effect in dev and prod with no extra build/sync steps.
 *
 * Follows the OffchainLabs/arbitrum-docs redirects.config.js pattern. Kept as a
 * `.js` module (types in redirects.config.d.ts) so it resolves natively in both
 * the Vocs config and the plain-Node sync script, without a TS runtime.
 */
export const redirects = [
  // Get Started
  { from: "/sdk/getting-started/quickstart", to: "/get-started/quickstart" },
  { from: "/sdk/getting-started/tutorial", to: "/get-started/quickstart" },
  { from: "/sdk/getting-started/tutorial-passkeys", to: "/onboarding/passkeys/tutorial" },
  { from: "/sdk/getting-started/quickstart-7702", to: "/get-started/eip-7702/quickstart" },
  { from: "/sdk/getting-started/quickstart-agentkit", to: "/smart-accounts/permissions/agentkit" },
  { from: "/sdk/getting-started/migration", to: "/advanced/migration" },

  // Core API → Onboarding + Smart Account + API & Tooling
  { from: "/sdk/core-api/create-account", to: "/onboarding/create-a-smart-account" },
  { from: "/sdk/core-api/using-plugins", to: "/smart-accounts/use-plugins/overview" },
  { from: "/sdk/core-api/send-transactions", to: "/smart-accounts/send-transactions" },
  { from: "/sdk/core-api/batch-transactions", to: "/smart-accounts/batch-transactions" },
  { from: "/sdk/core-api/sponsor-gas", to: "/smart-accounts/sponsor-gas/evm" },
  { from: "/sdk/core-api/pay-gas-with-erc20s", to: "/smart-accounts/pay-gas-with-erc20s" },
  { from: "/sdk/core-api/sign-and-verify", to: "/smart-accounts/sign-and-verify" },
  { from: "/sdk/core-api/deploy-contract", to: "/smart-accounts/deploy-contract" },
  { from: "/sdk/core-api/delegatecall", to: "/smart-accounts/delegatecall" },
  { from: "/sdk/core-api/status", to: "/api-and-toolings/tools/status" },
  { from: "/sdk/core-api/debugger", to: "/api-and-toolings/tools/debugger" },

  // Old SDK advanced section → split across the journey pillars
  { from: "/sdk/advanced/chain-abstraction", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/sdk/advanced/passkeys", to: "/onboarding/passkeys/overview" },
  { from: "/sdk/advanced/multisig", to: "/advanced/multisig" },
  { from: "/sdk/advanced/social-login", to: "/onboarding/social-login" },
  { from: "/sdk/advanced/session-keys", to: "/smart-accounts/permissions/session-keys" },
  { from: "/sdk/advanced/recovery", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/sdk/advanced/multi-chain-signing", to: "/smart-accounts/multi-chain-signing" },
  { from: "/sdk/advanced/key-storage", to: "/advanced/key-storage" },
  { from: "/sdk/advanced/defi", to: "/smart-accounts/defi" },
  { from: "/sdk/advanced/parallel-orders", to: "/smart-accounts/parallel-transactions" },
  { from: "/sdk/advanced/wallet-connect", to: "/advanced/wallet-connect" },
  { from: "/sdk/advanced/fallback-providers", to: "/advanced/fallback-providers" },
  { from: "/sdk/advanced/run-solidity-code-on-init", to: "/advanced/track-deployed-accounts" },
  { from: "/sdk/advanced/upgrade-kernel", to: "/advanced/upgrade-kernel" },
  { from: "/sdk/advanced/go-sdk", to: "/get-started/sdks/server-side/go" },
  { from: "/advanced/go-sdk", to: "/get-started/sdks/server-side/go" },
  { from: "/sdk/advanced/userop-builder-api", to: "/advanced/userop-builder-api" },
  { from: "/sdk/advanced/supported-base-tokens", to: "/smart-accounts/chain-abstraction/supported-base-tokens" },
  { from: "/sdk/advanced/supported-defi-tokens", to: "/smart-accounts/chain-abstraction/supported-defi-tokens" },

  // Permissions (preserved structure)
  { from: "/sdk/permissions/intro", to: "/smart-accounts/permissions/intro" },
  { from: "/sdk/permissions/transaction-automation", to: "/smart-accounts/permissions/transaction-automation" },
  { from: "/sdk/permissions/install-with-init-config", to: "/smart-accounts/permissions/install-with-init-config" },
  { from: "/sdk/permissions/1-click-trading", to: "/smart-accounts/permissions/1-click-trading" },
  { from: "/sdk/permissions/signers/ecdsa", to: "/smart-accounts/permissions/signers/ecdsa" },
  { from: "/sdk/permissions/signers/passkeys", to: "/smart-accounts/permissions/signers/passkeys" },
  { from: "/sdk/permissions/signers/multisig", to: "/smart-accounts/permissions/signers/multisig" },
  { from: "/sdk/permissions/signers/build-your-own", to: "/smart-accounts/permissions/signers/build-your-own" },
  { from: "/sdk/permissions/policies/sudo", to: "/smart-accounts/permissions/policies/sudo" },
  { from: "/sdk/permissions/policies/call", to: "/smart-accounts/permissions/policies/call" },
  { from: "/sdk/permissions/policies/gas", to: "/smart-accounts/permissions/policies/gas" },
  { from: "/sdk/permissions/policies/signature", to: "/smart-accounts/permissions/policies/signature" },
  { from: "/sdk/permissions/policies/rate-limit", to: "/smart-accounts/permissions/policies/rate-limit" },
  { from: "/sdk/permissions/policies/timestamp", to: "/smart-accounts/permissions/policies/timestamp" },
  { from: "/sdk/permissions/policies/build-your-own", to: "/smart-accounts/permissions/policies/build-your-own" },
  { from: "/sdk/permissions/actions/build-your-own", to: "/smart-accounts/permissions/actions/build-your-own" },

  // Signers (auth providers + intro)
  { from: "/sdk/signers/intro", to: "/onboarding/auth-providers" },
  { from: "/sdk/signers/dynamic", to: "/onboarding/dynamic" },
  { from: "/sdk/signers/privy", to: "/onboarding/privy" },
  { from: "/sdk/signers/magic", to: "/onboarding/magic" },
  { from: "/sdk/signers/web3auth", to: "/onboarding/web3auth" },
  { from: "/sdk/signers/smart-wallet", to: "/onboarding/smart-wallet" },
  { from: "/sdk/signers/portal", to: "/onboarding/portal" },
  { from: "/sdk/signers/turnkey", to: "/onboarding/turnkey" },
  { from: "/sdk/signers/fireblocks", to: "/onboarding/fireblocks" },
  { from: "/sdk/signers/capsule", to: "/onboarding/capsule" },
  { from: "/sdk/signers/lit-protocol", to: "/onboarding/lit-protocol" },
  { from: "/sdk/signers/particle", to: "/onboarding/particle" },
  { from: "/sdk/signers/dfns", to: "/onboarding/dfns" },
  { from: "/sdk/signers/arcana", to: "/onboarding/arcana" },
  { from: "/sdk/signers/eoa", to: "/onboarding/eoa" },
  { from: "/sdk/signers/custom-signer", to: "/onboarding/custom-signer" },

  // Solana
  { from: "/sdk/solana/sponsor-gas", to: "/smart-accounts/sponsor-gas/solana" },

  // Infra (formerly orphan in main sidebar)
  { from: "/sdk/infra/intro", to: "/api-and-toolings/infrastructure/choose-an-infra-provider" },
  { from: "/sdk/infra/zerodev", to: "/api-and-toolings/infrastructure/zerodev" },
  { from: "/sdk/infra/pimlico", to: "/api-and-toolings/infrastructure/pimlico" },
  { from: "/sdk/infra/coinbase", to: "/api-and-toolings/infrastructure/coinbase" },

  // Presets (formerly orphan)
  { from: "/sdk/presets/intro", to: "/api-and-toolings/presets/intro" },
  { from: "/sdk/presets/zerodev", to: "/api-and-toolings/presets/zerodev" },

  // FAQs
  { from: "/sdk/faqs/chains", to: "/api-and-toolings/faqs/chains" },
  { from: "/sdk/faqs/audits", to: "/api-and-toolings/faqs/audits" },
  { from: "/sdk/faqs/debug-userop", to: "/api-and-toolings/faqs/debug-userop" },
  { from: "/sdk/faqs/use-with-ethers", to: "/api-and-toolings/faqs/use-with-ethers" },
  { from: "/sdk/faqs/use-with-gelato", to: "/api-and-toolings/faqs/use-with-gelato" },
  { from: "/sdk/faqs/use-with-react-native", to: "/api-and-toolings/faqs/use-with-react-native" },

  // Meta-infra → API & Tooling › Infrastructure
  { from: "/meta-infra/intro", to: "/api-and-toolings/infrastructure/intro" },
  { from: "/meta-infra/gas-policies", to: "/api-and-toolings/infrastructure/gas-policies" },
  { from: "/meta-infra/custom-gas-policies", to: "/api-and-toolings/infrastructure/custom-gas-policies" },
  { from: "/meta-infra/rpcs", to: "/api-and-toolings/infrastructure/rpcs" },
  { from: "/meta-infra/api", to: "/api-and-toolings/infrastructure/api" },

  // Recovery flow → Advanced › Account Recovery
  { from: "/recovery-flow/intro", to: "/advanced/account-recovery/flow-intro" },
  { from: "/recovery-flow/setup", to: "/advanced/account-recovery/flow-setup" },
  { from: "/recovery-flow/portal", to: "/advanced/account-recovery/portal" },

  // Smart Routing Address (and global-address duplicate)
  //
  // /global-address never reaches this server: a Cloudflare rule answers it
  // first with a 301 to /smart-routing-address, which this table then sends on,
  // so a reader takes two hops. The rule below is the target we want, and it
  // takes effect the moment that Cloudflare rule is removed (DES-25). Confirmed
  // on production: that response carries no `x-render-origin-server` header,
  // while every rule we own does.
  { from: "/smart-routing-address", to: "/onramp/smart-routing-address/quickstart" },
  { from: "/global-address", to: "/onramp/smart-routing-address/quickstart" },

  // Magic Account (legacy) → Chain Abstraction. Was a manual Render redirect to
  // /sdk/advanced/chain-abstraction, itself now legacy; collapse the hop straight
  // to the live page. Every known /magic-account/* subpath has its own rule
  // below; the prefix rule in server.mjs catches anything unknown.
  { from: "/magic-account", to: "/smart-accounts/chain-abstraction/overview" },

  // Embedded Wallet docs live at /wallets/* (alpha — unlisted in sidebars).

  // React WaaS hooks → Advanced › React Hooks. @zerodev/waas is legacy and
  // unmaintained, so only these 1:1 page moves point here; anything else that
  // merely used waas goes to the current wallet SDK instead.
  { from: "/react/getting-started", to: "/advanced/react-hooks/getting-started" },
  { from: "/react/use-balance", to: "/advanced/react-hooks/use-balance" },
  { from: "/react/use-chainid", to: "/advanced/react-hooks/use-chainid" },
  { from: "/react/use-chains", to: "/advanced/react-hooks/use-chains" },
  { from: "/react/use-create-basic-session", to: "/advanced/react-hooks/use-create-basic-session" },
  { from: "/react/use-create-kernelclient-eoa", to: "/advanced/react-hooks/use-create-kernelclient-eoa" },
  { from: "/react/use-create-kernelclient-passkey", to: "/advanced/react-hooks/use-create-kernelclient-passkey" },
  { from: "/react/use-create-kernelclient-social", to: "/advanced/react-hooks/use-create-kernelclient-social" },
  { from: "/react/use-create-session", to: "/advanced/react-hooks/use-create-session" },
  { from: "/react/use-disconnect-kernelclient", to: "/advanced/react-hooks/use-disconnect-kernelclient" },
  { from: "/react/use-kernelclient", to: "/advanced/react-hooks/use-kernelclient" },
  { from: "/react/use-send-transaction", to: "/advanced/react-hooks/use-send-transaction" },
  { from: "/react/use-send-transaction-with-session", to: "/advanced/react-hooks/use-send-transaction-with-session" },
  { from: "/react/use-send-useroperation", to: "/advanced/react-hooks/use-send-useroperation" },
  { from: "/react/use-send-useroperation-with-session", to: "/advanced/react-hooks/use-send-useroperation-with-session" },
  { from: "/react/use-sessions", to: "/advanced/react-hooks/use-sessions" },
  { from: "/react/use-session-kernelclient", to: "/advanced/react-hooks/use-session-kernelclient" },
  { from: "/react/use-set-kernelclient", to: "/advanced/react-hooks/use-set-kernelclient" },
  { from: "/react/use-switch-chain", to: "/advanced/react-hooks/use-switch-chain" },
  { from: "/react/use-wallet-connect", to: "/advanced/react-hooks/use-wallet-connect" },

  // Orphan /smart-wallet/* (deleted) → canonical homes in the new tree
  { from: "/smart-wallet/which-sdk", to: "/get-started/sdks/overview" },
  { from: "/smart-wallet/quickstart-core", to: "/get-started/quickstart" },
  { from: "/smart-wallet/quickstart-react", to: "/wallets/quickstart" },
  { from: "/smart-wallet/quickstart-capabilities", to: "/wallets/quickstart" },
  { from: "/smart-wallet/creating-wallets", to: "/wallets/quickstart" },
  { from: "/smart-wallet/setting-up-zerodev-projects", to: "/get-started/sdks/setup-project" },
  { from: "/smart-wallet/sending-transactions", to: "/wallets/wallet-api/send-transaction" },
  { from: "/smart-wallet/batching-transactions", to: "/smart-accounts/batch-transactions" },
  { from: "/smart-wallet/pay-gas-in-erc20s", to: "/smart-accounts/pay-gas-with-erc20s" },
  { from: "/smart-wallet/sponsoring-gas", to: "/smart-accounts/sponsor-gas/evm" },
  { from: "/smart-wallet/delegatecall", to: "/smart-accounts/delegatecall" },
  { from: "/smart-wallet/multisig", to: "/advanced/multisig" },
  { from: "/smart-wallet/account-recovery", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/smart-wallet/importing-assets", to: "/onboarding/create-a-smart-account" },
  { from: "/smart-wallet/defi-integrations", to: "/smart-accounts/defi" },
  { from: "/smart-wallet/one-click-trading", to: "/smart-accounts/permissions/transaction-automation" },
  { from: "/smart-wallet/parallel-transactions", to: "/smart-accounts/parallel-transactions" },
  { from: "/smart-wallet/transaction-automation", to: "/smart-accounts/permissions/transaction-automation" },
  { from: "/smart-wallet/wallet-connect", to: "/advanced/wallet-connect" },
  { from: "/smart-wallet/infra-fallbacks", to: "/advanced/fallback-providers" },
  { from: "/smart-wallet/code-examples", to: "/" },
  { from: "/smart-wallet/permissions/intro", to: "/smart-accounts/permissions/intro" },
  { from: "/smart-wallet/permissions/transaction-automation", to: "/smart-accounts/permissions/transaction-automation" },
  { from: "/smart-wallet/permissions/signers/ecdsa", to: "/smart-accounts/permissions/signers/ecdsa" },
  { from: "/smart-wallet/permissions/signers/passkeys", to: "/smart-accounts/permissions/signers/passkeys" },
  { from: "/smart-wallet/permissions/signers/multisig", to: "/smart-accounts/permissions/signers/multisig" },
  { from: "/smart-wallet/permissions/signers/build-your-own", to: "/smart-accounts/permissions/signers/build-your-own" },
  { from: "/smart-wallet/permissions/policies/sudo", to: "/smart-accounts/permissions/policies/sudo" },
  { from: "/smart-wallet/permissions/policies/call", to: "/smart-accounts/permissions/policies/call" },
  { from: "/smart-wallet/permissions/policies/gas", to: "/smart-accounts/permissions/policies/gas" },
  { from: "/smart-wallet/permissions/policies/signature", to: "/smart-accounts/permissions/policies/signature" },
  { from: "/smart-wallet/permissions/policies/rate-limit", to: "/smart-accounts/permissions/policies/rate-limit" },
  { from: "/smart-wallet/permissions/policies/timestamp", to: "/smart-accounts/permissions/policies/timestamp" },
  { from: "/smart-wallet/permissions/policies/build-your-own", to: "/smart-accounts/permissions/policies/build-your-own" },
  { from: "/smart-wallet/permissions/actions/build-your-own", to: "/smart-accounts/permissions/actions/build-your-own" },
  { from: "/smart-wallet/permissions/1-click-trading", to: "/smart-accounts/permissions/1-click-trading" },

  // 2026-06 user-journey IA: pillars are now Getting Started / Onboarding /
  // Onramp / Smart Account / Advanced / API & Tooling. Old homes → new homes.
  { from: "/smart-accounts/create-a-smart-account", to: "/onboarding/create-a-smart-account" },
  { from: "/smart-accounts/authentication/social-login", to: "/onboarding/social-login" },
  { from: "/smart-accounts/authentication/eoa", to: "/onboarding/eoa" },
  { from: "/smart-accounts/authentication/custom-signer", to: "/onboarding/custom-signer" },
  { from: "/smart-accounts/authentication/dynamic", to: "/onboarding/dynamic" },
  { from: "/smart-accounts/authentication/privy", to: "/onboarding/privy" },
  { from: "/smart-accounts/authentication/magic", to: "/onboarding/magic" },
  { from: "/smart-accounts/authentication/web3auth", to: "/onboarding/web3auth" },
  { from: "/smart-accounts/authentication/particle", to: "/onboarding/particle" },
  { from: "/smart-accounts/authentication/arcana", to: "/onboarding/arcana" },
  { from: "/smart-accounts/authentication/turnkey", to: "/onboarding/turnkey" },
  { from: "/smart-accounts/authentication/fireblocks", to: "/onboarding/fireblocks" },
  { from: "/smart-accounts/authentication/dfns", to: "/onboarding/dfns" },
  { from: "/smart-accounts/authentication/lit-protocol", to: "/onboarding/lit-protocol" },
  { from: "/smart-accounts/authentication/capsule", to: "/onboarding/capsule" },
  { from: "/smart-accounts/authentication/portal", to: "/onboarding/portal" },
  { from: "/smart-accounts/authentication/smart-wallet", to: "/onboarding/smart-wallet" },
  { from: "/smart-accounts/use-plugins/signers-intro", to: "/onboarding/auth-providers" },
  { from: "/smart-accounts/use-plugins/passkeys/overview", to: "/onboarding/passkeys/overview" },
  { from: "/smart-accounts/use-plugins/passkeys/tutorial", to: "/onboarding/passkeys/tutorial" },
  { from: "/smart-accounts/use-plugins/multisig", to: "/advanced/multisig" },
  { from: "/smart-accounts/account-recovery/sdk-recovery", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/smart-accounts/account-recovery/flow-intro", to: "/advanced/account-recovery/flow-intro" },
  { from: "/smart-accounts/account-recovery/flow-setup", to: "/advanced/account-recovery/flow-setup" },
  { from: "/smart-accounts/account-recovery/portal", to: "/advanced/account-recovery/portal" },
  { from: "/smart-accounts/eip-7702/quickstart", to: "/get-started/eip-7702/quickstart" },
  { from: "/cross-chain/smart-routing-address", to: "/onramp/smart-routing-address/quickstart" },
  { from: "/cross-chain/chain-abstraction/overview", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/cross-chain/chain-abstraction/supported-base-tokens", to: "/smart-accounts/chain-abstraction/supported-base-tokens" },
  { from: "/cross-chain/chain-abstraction/supported-defi-tokens", to: "/smart-accounts/chain-abstraction/supported-defi-tokens" },
  { from: "/advanced/defi", to: "/smart-accounts/defi" },
  { from: "/advanced/multi-chain-signing", to: "/smart-accounts/multi-chain-signing" },
  { from: "/advanced/parallel-transactions", to: "/smart-accounts/parallel-transactions" },
  { from: "/advanced/deploy-contract", to: "/smart-accounts/deploy-contract" },
  { from: "/advanced/delegatecall", to: "/smart-accounts/delegatecall" },

  // /resources/* URLs never existed as files (content lives at
  // /api-and-toolings/*); map them in case old links escaped into the wild.
  { from: "/resources/infrastructure/intro", to: "/api-and-toolings/infrastructure/intro" },
  { from: "/resources/infrastructure/gas-policies", to: "/api-and-toolings/infrastructure/gas-policies" },
  { from: "/resources/infrastructure/custom-gas-policies", to: "/api-and-toolings/infrastructure/custom-gas-policies" },
  { from: "/resources/infrastructure/rpcs", to: "/api-and-toolings/infrastructure/rpcs" },
  { from: "/resources/infrastructure/api", to: "/api-and-toolings/infrastructure/api" },
  { from: "/resources/infrastructure/choose-an-infra-provider", to: "/api-and-toolings/infrastructure/choose-an-infra-provider" },
  { from: "/resources/infrastructure/zerodev", to: "/api-and-toolings/infrastructure/zerodev" },
  { from: "/resources/infrastructure/pimlico", to: "/api-and-toolings/infrastructure/pimlico" },
  { from: "/resources/infrastructure/coinbase", to: "/api-and-toolings/infrastructure/coinbase" },
  { from: "/resources/presets/intro", to: "/api-and-toolings/presets/intro" },
  { from: "/resources/presets/zerodev", to: "/api-and-toolings/presets/zerodev" },
  { from: "/resources/tools/status", to: "/api-and-toolings/tools/status" },
  { from: "/resources/tools/debugger", to: "/api-and-toolings/tools/debugger" },
  { from: "/resources/faqs/chains", to: "/api-and-toolings/faqs/chains" },
  { from: "/resources/faqs/audits", to: "/api-and-toolings/faqs/audits" },
  { from: "/resources/faqs/debug-userop", to: "/api-and-toolings/faqs/debug-userop" },
  { from: "/resources/faqs/use-with-ethers", to: "/api-and-toolings/faqs/use-with-ethers" },
  { from: "/resources/faqs/use-with-gelato", to: "/api-and-toolings/faqs/use-with-gelato" },
  { from: "/resources/faqs/use-with-react-native", to: "/api-and-toolings/faqs/use-with-react-native" },

  // Blog posts moved to the marketing site under different slugs. Matched by
  // title and date; each target returns 200. Two posts (/blog/3074-governance,
  // /blog/introducing-orchestra-multichain-deployment-made-easy) are not on the
  // marketing site yet and stay here, so /blog itself is deliberately not mapped.
  { from: "/blog/3074-pitfalls", to: "https://www.zerodev.app/blogs/the-pitfalls-of-eip-3074-and-how-to-avoid-them" },
  { from: "/blog/4337-and-3074-disagreements", to: "https://www.zerodev.app/blogs/why-4337-and-3074-authors-are-disagreeing-and-who-got-it-right" },
  { from: "/blog/7702-adoption", to: "https://www.zerodev.app/blogs/what-does-eip-7702-mean-for-you-part-1-the-adoption-cycle-of-7702" },
  { from: "/blog/7702-for-dapps", to: "https://www.zerodev.app/blogs/blog-7702-for-dapps" },
  { from: "/blog/erc-4337-misconceptions-and-valid-concerns", to: "https://www.zerodev.app/blogs/erc-4337-misconceptions-and-valid-concerns" },
  { from: "/blog/erc-6492-and-why-its-important-for-aa", to: "https://www.zerodev.app/blogs/what-is-erc-6492-and-why-it-s-important-for-account-abstraction" },
  { from: "/blog/gas-sponsorship-paradox", to: "https://www.zerodev.app/blogs/blog-gas-sponsorship-paradox" },
  { from: "/blog/gemini", to: "https://www.zerodev.app/blogs/blog-gemini" },
  { from: "/blog/go-native-account-abstraction", to: "https://www.zerodev.app/blogs/blog-go-native-account-abstraction" },
  { from: "/blog/hello-capabilities", to: "https://www.zerodev.app/blogs/sdks-are-dead-long-live-capabilities" },
  { from: "/blog/kernel-minimal-extensible-account-for-aa-wallets", to: "https://www.zerodev.app/blogs/introducing-kernel-minimal-and-extensible-smart-contract-account-for-erc-4337-wallets" },
  { from: "/blog/kernel-v2-and-the-lessons-we-learned", to: "https://www.zerodev.app/blogs/kernel-v2-and-the-lessons-we-learned" },
  { from: "/blog/pricing-update", to: "https://www.zerodev.app/blogs/blog-pricing-update" },
  { from: "/blog/session-keys-are-the-jwts-of-web3", to: "https://www.zerodev.app/blogs/session-keys-are-the-jwts-of-web3" },
  { from: "/blog/towards-the-most-optimized-aa-wallet", to: "https://www.zerodev.app/blogs/towards-the-most-optimized-aa-wallet" },
  { from: "/blog/ultrarelay", to: "https://www.zerodev.app/blogs/account-abstraction-beyond-erc-4337-how-intents-erc-7683-can-make-aa-cheaper-and-faster" },
  { from: "/blog/what-can-you-do-with-account-abstraction", to: "https://www.zerodev.app/blogs/what-can-you-do-with-account-abstraction" },
  { from: "/blog/who-when-what", to: "https://www.zerodev.app/blogs/who-when-what-a-framework-for-thinking-about-plugins-and-7579-vs-6900" },
  { from: "/blog/why-7579-over-6900", to: "https://www.zerodev.app/blogs/why-we-are-building-kernel-on-erc-7579-and-not-erc-6900" },
  { from: "/blog/zerodev-acquired", to: "https://www.zerodev.app/blogs/blog-zerodev-acquired" },
  { from: "/blog/zerodev-glider", to: "https://www.zerodev.app/blogs/blog-zerodev-glider" },
  { from: "/blog/zerodev-litprotocol", to: "https://www.zerodev.app/blogs/blog-zerodev-litprotocol" },

  // 2026-06 IA revamp fallout. Sources found with
  // `git log --first-parent --full-history origin/main`, never `--all`: a page
  // that only ever lived on a feature branch was never deployed, and a rule for
  // one would 301 those pages away if the branch later merged.
  //
  // /modules/offramp and /smart-wallet/offramp are absent on purpose. Both were
  // one-line stubs with no successor, so they 404.

  // Legacy /sdk/*
  { from: "/sdk/advanced/magic-address", to: "/onramp/smart-routing-address/quickstart" },
  { from: "/sdk/core-api/intro", to: "/onboarding/create-a-smart-account" },
  { from: "/sdk/core-api/pay-gas-in-erc20s", to: "/smart-accounts/pay-gas-with-erc20s" },
  { from: "/sdk/core-api/sign-and-validate-messages", to: "/smart-accounts/sign-and-verify" },
  { from: "/sdk/core-api/wallet-connect", to: "/advanced/wallet-connect" },
  { from: "/sdk/faqs/why-chain-abstraction", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/sdk/getting-started/wallet-connect", to: "/advanced/wallet-connect" },
  { from: "/sdk/infra/stackup", to: "/api-and-toolings/infrastructure/choose-an-infra-provider" },
  { from: "/sdk/intro", to: "/" },
  { from: "/sdk/permissions/getting-started", to: "/smart-accounts/permissions/session-keys" },
  { from: "/sdk/plugins/ecdsa", to: "/smart-accounts/permissions/signers/ecdsa" },
  { from: "/sdk/plugins/guardians", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/sdk/plugins/intro", to: "/smart-accounts/use-plugins/overview" },
  { from: "/sdk/plugins/multisig", to: "/advanced/multisig" },
  { from: "/sdk/plugins/passkey", to: "/onboarding/passkeys/overview" },
  { from: "/sdk/plugins/passkeys", to: "/onboarding/passkeys/overview" },
  { from: "/sdk/plugins/recovery", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/sdk/plugins/session-keys", to: "/smart-accounts/permissions/session-keys" },
  { from: "/sdk/plugins/weighted-ecdsa", to: "/advanced/multisig" },

  // kerneljs.com docs, merged into this site
  { from: "/kerneljs/core-api/batch-transactions", to: "/smart-accounts/batch-transactions" },
  { from: "/kerneljs/core-api/create-account", to: "/onboarding/create-a-smart-account" },
  { from: "/kerneljs/core-api/delegatecall", to: "/smart-accounts/delegatecall" },
  { from: "/kerneljs/core-api/deploy-contract", to: "/smart-accounts/deploy-contract" },
  { from: "/kerneljs/core-api/intro", to: "/onboarding/create-a-smart-account" },
  { from: "/kerneljs/core-api/pay-gas-in-erc20s", to: "/smart-accounts/pay-gas-with-erc20s" },
  { from: "/kerneljs/core-api/send-transactions", to: "/smart-accounts/send-transactions" },
  { from: "/kerneljs/core-api/sign-and-validate-messages", to: "/smart-accounts/sign-and-verify" },
  { from: "/kerneljs/core-api/sponsor-gas", to: "/smart-accounts/sponsor-gas/evm" },
  { from: "/kerneljs/getting-started/intro", to: "/" },
  { from: "/kerneljs/getting-started/quickstart", to: "/get-started/quickstart" },
  { from: "/kerneljs/plugins/ecdsa", to: "/smart-accounts/permissions/signers/ecdsa" },
  { from: "/kerneljs/plugins/intro", to: "/smart-accounts/use-plugins/overview" },
  { from: "/kerneljs/plugins/multisig", to: "/advanced/multisig" },
  { from: "/kerneljs/plugins/passkey", to: "/onboarding/passkeys/overview" },
  { from: "/kerneljs/plugins/recovery", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/kerneljs/plugins/session-keys", to: "/smart-accounts/permissions/session-keys" },
  { from: "/kerneljs/presets/intro", to: "/api-and-toolings/presets/intro" },
  { from: "/kerneljs/presets/zerodev", to: "/api-and-toolings/presets/zerodev" },
  { from: "/kerneljs/signers/arcana", to: "/onboarding/arcana" },
  { from: "/kerneljs/signers/capsule", to: "/onboarding/capsule" },
  { from: "/kerneljs/signers/custom-signer", to: "/onboarding/custom-signer" },
  { from: "/kerneljs/signers/dfns", to: "/onboarding/dfns" },
  { from: "/kerneljs/signers/dynamic", to: "/onboarding/dynamic" },
  { from: "/kerneljs/signers/eoa", to: "/onboarding/eoa" },
  { from: "/kerneljs/signers/fireblocks", to: "/onboarding/fireblocks" },
  { from: "/kerneljs/signers/intro", to: "/onboarding/auth-providers" },
  { from: "/kerneljs/signers/lit-protocol", to: "/onboarding/lit-protocol" },
  { from: "/kerneljs/signers/magic", to: "/onboarding/magic" },
  { from: "/kerneljs/signers/particle", to: "/onboarding/particle" },
  { from: "/kerneljs/signers/portal", to: "/onboarding/portal" },
  { from: "/kerneljs/signers/privy", to: "/onboarding/privy" },
  { from: "/kerneljs/signers/turnkey", to: "/onboarding/turnkey" },
  { from: "/kerneljs/signers/web3auth", to: "/onboarding/web3auth" },

  // /wallets/* moved or renamed
  { from: "/wallets/auth/wallet-ui-kit", to: "/wallets/auth/wallet-ui-kit/getting-started" },
  { from: "/wallets/hooks/use-authenticate-oauth", to: "/wallets/auth/google-oauth" },
  { from: "/wallets/hooks/use-export-private-key", to: "/wallets/export" },
  { from: "/wallets/hooks/use-export-wallet", to: "/wallets/export" },
  { from: "/wallets/hooks/use-get-user-email", to: "/wallets/quickstart" },
  { from: "/wallets/hooks/use-login-passkey", to: "/wallets/auth/passkeys" },
  { from: "/wallets/hooks/use-refresh-session", to: "/wallets/session-management" },
  { from: "/wallets/hooks/use-register-passkey", to: "/wallets/auth/passkeys" },
  { from: "/wallets/hooks/use-send-magic-link", to: "/wallets/auth/magic-link" },
  { from: "/wallets/hooks/use-send-otp", to: "/wallets/auth/email-otp" },
  { from: "/wallets/hooks/use-verify-magic-link", to: "/wallets/auth/magic-link" },
  { from: "/wallets/hooks/use-verify-otp", to: "/wallets/auth/email-otp" },
  { from: "/wallets/shared/mutation-result", to: "/wallets/quickstart" },
  { from: "/wallets/shared/query-result", to: "/wallets/quickstart" },
  { from: "/wallets/wallet-api/sign-typed-message", to: "/wallets/wallet-api/sign-message" },

  // /smart-accounts/embedded-wallet/* -> /wallets/*
  { from: "/smart-accounts/embedded-wallet", to: "/wallets" },
  { from: "/smart-accounts/embedded-wallet/auth/email-otp", to: "/wallets/auth/email-otp" },
  { from: "/smart-accounts/embedded-wallet/auth/google-oauth", to: "/wallets/auth/google-oauth" },
  { from: "/smart-accounts/embedded-wallet/auth/magic-link", to: "/wallets/auth/magic-link" },
  { from: "/smart-accounts/embedded-wallet/auth/passkeys", to: "/wallets/auth/passkeys" },
  { from: "/smart-accounts/embedded-wallet/export", to: "/wallets/export" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-authenticate-oauth", to: "/wallets/auth/google-oauth" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-export-private-key", to: "/wallets/export" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-export-wallet", to: "/wallets/export" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-get-user-email", to: "/wallets/quickstart" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-login-passkey", to: "/wallets/auth/passkeys" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-refresh-session", to: "/wallets/session-management" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-register-passkey", to: "/wallets/auth/passkeys" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-send-magic-link", to: "/wallets/auth/magic-link" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-send-otp", to: "/wallets/auth/email-otp" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-verify-magic-link", to: "/wallets/auth/magic-link" },
  { from: "/smart-accounts/embedded-wallet/hooks/use-verify-otp", to: "/wallets/auth/email-otp" },
  { from: "/smart-accounts/embedded-wallet/quickstart", to: "/wallets/quickstart" },
  { from: "/smart-accounts/embedded-wallet/session-management", to: "/wallets/session-management" },
  { from: "/smart-accounts/embedded-wallet/shared/mutation-result", to: "/wallets/quickstart" },
  { from: "/smart-accounts/embedded-wallet/shared/query-result", to: "/wallets/quickstart" },
  { from: "/smart-accounts/embedded-wallet/wallet-api/send-transaction", to: "/wallets/wallet-api/send-transaction" },
  { from: "/smart-accounts/embedded-wallet/wallet-api/sign-message", to: "/wallets/wallet-api/sign-message" },
  { from: "/smart-accounts/embedded-wallet/wallet-api/sign-typed-message", to: "/wallets/wallet-api/sign-message" },

  // Magic Account subpaths with a closer home than the overview
  { from: "/magic-account/knowledge-base/capabilities", to: "https://www.zerodev.app/blogs/sdks-are-dead-long-live-capabilities" },
  { from: "/magic-account/knowledge-base/chain-abstraction", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/magic-account/knowledge-base/permissions", to: "/smart-accounts/permissions/intro" },
  { from: "/magic-account/knowledge-base/smart-account", to: "/onboarding/create-a-smart-account" },
  { from: "/magic-account/quickstart", to: "/get-started/quickstart" },
  { from: "/magic-account/setup", to: "/onboarding/create-a-smart-account" },
  { from: "/magic-account/setup/eoa", to: "/onboarding/eoa" },
  { from: "/magic-account/setup/passkeys", to: "/onboarding/passkeys/overview" },
  { from: "/magic-account/setup/social", to: "/onboarding/social-login" },
  { from: "/magic-account/setup/third-party-signers", to: "/onboarding/auth-providers" },
  { from: "/magic-account/usage", to: "/smart-accounts/send-transactions" },
  { from: "/magic-account/usage/automating-transactions", to: "/smart-accounts/permissions/transaction-automation" },
  { from: "/magic-account/usage/batching-transactions", to: "/smart-accounts/batch-transactions" },
  { from: "/magic-account/usage/chain-abstraction", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/magic-account/usage/one-click-trading", to: "/smart-accounts/permissions/1-click-trading" },
  { from: "/magic-account/usage/paying-gas-with-erc20", to: "/smart-accounts/pay-gas-with-erc20s" },
  { from: "/magic-account/usage/sponsoring-gas", to: "/smart-accounts/sponsor-gas/evm" },
  { from: "/magic-account/why-chain-abstraction", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/magic-account/yi-vs-others", to: "/smart-accounts/chain-abstraction/overview" },

  // /modules/* (7579 modules) -> /smart-accounts/*
  { from: "/modules", to: "/" },
  { from: "/modules/account-recovery", to: "/advanced/account-recovery/sdk-recovery" },
  { from: "/modules/batching", to: "/smart-accounts/batch-transactions" },
  { from: "/modules/defi-integrations", to: "/smart-accounts/defi" },
  { from: "/modules/gas", to: "/smart-accounts/sponsor-gas/evm" },
  { from: "/modules/importing-assets", to: "/smart-accounts/chain-abstraction/overview" },
  { from: "/modules/one-click-trading", to: "/smart-accounts/permissions/transaction-automation" },
  { from: "/modules/onramp", to: "/onramp/smart-routing-address" },
  { from: "/modules/signin", to: "/onboarding/create-a-smart-account" },
  { from: "/modules/transaction-automation", to: "/smart-accounts/permissions/transaction-automation" },

  // orphan /smart-wallet/*
  { from: "/smart-wallet/batching", to: "/smart-accounts/batch-transactions" },
  { from: "/smart-wallet/gas", to: "/smart-accounts/sponsor-gas/evm" },
  { from: "/smart-wallet/intro", to: "/onboarding/create-a-smart-account" },
  { from: "/smart-wallet/onramp", to: "/onramp/smart-routing-address" },
  { from: "/smart-wallet/setup", to: "/onboarding/create-a-smart-account" },
  { from: "/smart-wallet/signin", to: "/onboarding/create-a-smart-account" },

  // /kernel/* contract docs
  { from: "/kernel/intro", to: "/" },

  // versioned SDK path
  { from: "/sdk/v5_3_x/faqs/why-chain-abstraction", to: "/sdk/v5_3_x/advanced/chain-abstraction" },
];
