/**
 * Internal doc redirects: legacy URL -> new URL.
 *
 * Single source of truth for redirects. Consumed in two places:
 *   - the dev-server redirect middleware in vocs.config.tsx (local `vocs dev`)
 *   - `npm run sync-redirects`, which mirrors these into vercel.json so Vercel
 *     serves them in production (Vocs has no build-time redirect support).
 *
 * After editing, run `npm run sync-redirects` and commit the updated vercel.json.
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
  { from: "/smart-routing-address", to: "/onramp/smart-routing-address" },
  { from: "/global-address", to: "/onramp/smart-routing-address" },

  // Embedded Wallet docs live at /wallets/* (alpha — unlisted in sidebars).

  // React WaaS hooks → Advanced › React Hooks (legacy)
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
  { from: "/smart-wallet/which-sdk", to: "/onboarding/create-a-smart-account" },
  { from: "/smart-wallet/quickstart-core", to: "/get-started/quickstart" },
  { from: "/smart-wallet/quickstart-react", to: "/get-started/quickstart" },
  { from: "/smart-wallet/quickstart-capabilities", to: "/get-started/quickstart" },
  { from: "/smart-wallet/creating-wallets", to: "/onboarding/create-a-smart-account" },
  { from: "/smart-wallet/setting-up-zerodev-projects", to: "/" },
  { from: "/smart-wallet/sending-transactions", to: "/smart-accounts/send-transactions" },
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
  { from: "/cross-chain/smart-routing-address", to: "/onramp/smart-routing-address" },
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
];
