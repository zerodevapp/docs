import { defineConfig } from "vocs";
import dotenv from "dotenv";

dotenv.config();

// Map of legacy URL paths to their new homes.
// Used by the Vite middleware below for dev redirects, and exported so
// production hosting (Vercel/Netlify/etc.) can pick them up at deploy time.
const REDIRECTS: Record<string, string> = {
  // Get Started
  "/sdk/getting-started/quickstart": "/get-started/quickstart",
  "/sdk/getting-started/tutorial": "/get-started/quickstart",
  "/sdk/getting-started/tutorial-passkeys": "/onboarding/passkeys/tutorial",
  "/sdk/getting-started/quickstart-7702": "/get-started/eip-7702/quickstart",
  "/sdk/getting-started/quickstart-agentkit":
    "/smart-accounts/permissions/agentkit",
  "/sdk/getting-started/migration": "/advanced/migration",

  // Core API → Onboarding + Smart Account + API & Tooling
  "/sdk/core-api/create-account": "/onboarding/create-a-smart-account",
  "/sdk/core-api/using-plugins": "/smart-accounts/use-plugins/overview",
  "/sdk/core-api/send-transactions": "/smart-accounts/send-transactions",
  "/sdk/core-api/batch-transactions": "/smart-accounts/batch-transactions",
  "/sdk/core-api/sponsor-gas": "/smart-accounts/sponsor-gas/evm",
  "/sdk/core-api/pay-gas-with-erc20s": "/smart-accounts/pay-gas-with-erc20s",
  "/sdk/core-api/sign-and-verify": "/smart-accounts/sign-and-verify",
  "/sdk/core-api/deploy-contract": "/smart-accounts/deploy-contract",
  "/sdk/core-api/delegatecall": "/smart-accounts/delegatecall",
  "/sdk/core-api/status": "/api-and-toolings/tools/status",
  "/sdk/core-api/debugger": "/api-and-toolings/tools/debugger",

  // Old SDK advanced section → split across the journey pillars
  "/sdk/advanced/chain-abstraction":
    "/smart-accounts/chain-abstraction/overview",
  "/sdk/advanced/passkeys": "/onboarding/passkeys/overview",
  "/sdk/advanced/multisig": "/advanced/multisig",
  "/sdk/advanced/social-login": "/onboarding/social-login",
  "/sdk/advanced/session-keys": "/smart-accounts/permissions/session-keys",
  "/sdk/advanced/recovery": "/advanced/account-recovery/sdk-recovery",
  "/sdk/advanced/multi-chain-signing": "/smart-accounts/multi-chain-signing",
  "/sdk/advanced/key-storage": "/advanced/key-storage",
  "/sdk/advanced/defi": "/smart-accounts/defi",
  "/sdk/advanced/parallel-orders": "/smart-accounts/parallel-transactions",
  "/sdk/advanced/wallet-connect": "/advanced/wallet-connect",
  "/sdk/advanced/fallback-providers": "/advanced/fallback-providers",
  "/sdk/advanced/run-solidity-code-on-init":
    "/advanced/track-deployed-accounts",
  "/sdk/advanced/upgrade-kernel": "/advanced/upgrade-kernel",
  "/sdk/advanced/go-sdk": "/get-started/sdks/server-side/go",
  "/advanced/go-sdk": "/get-started/sdks/server-side/go",
  "/sdk/advanced/userop-builder-api": "/advanced/userop-builder-api",
  "/sdk/advanced/supported-base-tokens":
    "/smart-accounts/chain-abstraction/supported-base-tokens",
  "/sdk/advanced/supported-defi-tokens":
    "/smart-accounts/chain-abstraction/supported-defi-tokens",

  // Permissions (preserved structure)
  "/sdk/permissions/intro": "/smart-accounts/permissions/intro",
  "/sdk/permissions/transaction-automation":
    "/smart-accounts/permissions/transaction-automation",
  "/sdk/permissions/install-with-init-config":
    "/smart-accounts/permissions/install-with-init-config",
  "/sdk/permissions/1-click-trading":
    "/smart-accounts/permissions/1-click-trading",
  "/sdk/permissions/signers/ecdsa": "/smart-accounts/permissions/signers/ecdsa",
  "/sdk/permissions/signers/passkeys":
    "/smart-accounts/permissions/signers/passkeys",
  "/sdk/permissions/signers/multisig":
    "/smart-accounts/permissions/signers/multisig",
  "/sdk/permissions/signers/build-your-own":
    "/smart-accounts/permissions/signers/build-your-own",
  "/sdk/permissions/policies/sudo": "/smart-accounts/permissions/policies/sudo",
  "/sdk/permissions/policies/call": "/smart-accounts/permissions/policies/call",
  "/sdk/permissions/policies/gas": "/smart-accounts/permissions/policies/gas",
  "/sdk/permissions/policies/signature":
    "/smart-accounts/permissions/policies/signature",
  "/sdk/permissions/policies/rate-limit":
    "/smart-accounts/permissions/policies/rate-limit",
  "/sdk/permissions/policies/timestamp":
    "/smart-accounts/permissions/policies/timestamp",
  "/sdk/permissions/policies/build-your-own":
    "/smart-accounts/permissions/policies/build-your-own",
  "/sdk/permissions/actions/build-your-own":
    "/smart-accounts/permissions/actions/build-your-own",

  // Signers (auth providers + intro)
  "/sdk/signers/intro": "/onboarding/auth-providers",
  "/sdk/signers/dynamic": "/onboarding/dynamic",
  "/sdk/signers/privy": "/onboarding/privy",
  "/sdk/signers/magic": "/onboarding/magic",
  "/sdk/signers/web3auth": "/onboarding/web3auth",
  "/sdk/signers/smart-wallet": "/onboarding/smart-wallet",
  "/sdk/signers/portal": "/onboarding/portal",
  "/sdk/signers/turnkey": "/onboarding/turnkey",
  "/sdk/signers/fireblocks": "/onboarding/fireblocks",
  "/sdk/signers/capsule": "/onboarding/capsule",
  "/sdk/signers/lit-protocol": "/onboarding/lit-protocol",
  "/sdk/signers/particle": "/onboarding/particle",
  "/sdk/signers/dfns": "/onboarding/dfns",
  "/sdk/signers/arcana": "/onboarding/arcana",
  "/sdk/signers/eoa": "/onboarding/eoa",
  "/sdk/signers/custom-signer": "/onboarding/custom-signer",

  // Solana
  "/sdk/solana/sponsor-gas": "/smart-accounts/sponsor-gas/solana",

  // Infra (formerly orphan in main sidebar)
  "/sdk/infra/intro":
    "/api-and-toolings/infrastructure/choose-an-infra-provider",
  "/sdk/infra/zerodev": "/api-and-toolings/infrastructure/zerodev",
  "/sdk/infra/pimlico": "/api-and-toolings/infrastructure/pimlico",
  "/sdk/infra/coinbase": "/api-and-toolings/infrastructure/coinbase",

  // Presets (formerly orphan)
  "/sdk/presets/intro": "/api-and-toolings/presets/intro",
  "/sdk/presets/zerodev": "/api-and-toolings/presets/zerodev",

  // FAQs
  "/sdk/faqs/chains": "/api-and-toolings/faqs/chains",
  "/sdk/faqs/audits": "/api-and-toolings/faqs/audits",
  "/sdk/faqs/debug-userop": "/api-and-toolings/faqs/debug-userop",
  "/sdk/faqs/use-with-ethers": "/api-and-toolings/faqs/use-with-ethers",
  "/sdk/faqs/use-with-gelato": "/api-and-toolings/faqs/use-with-gelato",
  "/sdk/faqs/use-with-react-native":
    "/api-and-toolings/faqs/use-with-react-native",

  // Meta-infra → API & Tooling › Infrastructure
  "/meta-infra/intro": "/api-and-toolings/infrastructure/intro",
  "/meta-infra/gas-policies": "/api-and-toolings/infrastructure/gas-policies",
  "/meta-infra/custom-gas-policies":
    "/api-and-toolings/infrastructure/custom-gas-policies",
  "/meta-infra/rpcs": "/api-and-toolings/infrastructure/rpcs",
  "/meta-infra/api": "/api-and-toolings/infrastructure/api",

  // Recovery flow → Advanced › Account Recovery
  "/recovery-flow/intro": "/advanced/account-recovery/flow-intro",
  "/recovery-flow/setup": "/advanced/account-recovery/flow-setup",
  "/recovery-flow/portal": "/advanced/account-recovery/portal",

  // Smart Routing Address (and global-address duplicate)
  "/smart-routing-address": "/onramp/smart-routing-address",
  "/global-address": "/onramp/smart-routing-address",

  // Embedded Wallet docs live at /wallets/* (alpha — unlisted in sidebars).
  "/wallets/evaluate": "/wallets/overview",

  // React WaaS hooks → Advanced › React Hooks (legacy)
  "/react/getting-started": "/advanced/react-hooks/getting-started",
  "/react/use-balance": "/advanced/react-hooks/use-balance",
  "/react/use-chainid": "/advanced/react-hooks/use-chainid",
  "/react/use-chains": "/advanced/react-hooks/use-chains",
  "/react/use-create-basic-session":
    "/advanced/react-hooks/use-create-basic-session",
  "/react/use-create-kernelclient-eoa":
    "/advanced/react-hooks/use-create-kernelclient-eoa",
  "/react/use-create-kernelclient-passkey":
    "/advanced/react-hooks/use-create-kernelclient-passkey",
  "/react/use-create-kernelclient-social":
    "/advanced/react-hooks/use-create-kernelclient-social",
  "/react/use-create-session": "/advanced/react-hooks/use-create-session",
  "/react/use-disconnect-kernelclient":
    "/advanced/react-hooks/use-disconnect-kernelclient",
  "/react/use-kernelclient": "/advanced/react-hooks/use-kernelclient",
  "/react/use-send-transaction": "/advanced/react-hooks/use-send-transaction",
  "/react/use-send-transaction-with-session":
    "/advanced/react-hooks/use-send-transaction-with-session",
  "/react/use-send-useroperation":
    "/advanced/react-hooks/use-send-useroperation",
  "/react/use-send-useroperation-with-session":
    "/advanced/react-hooks/use-send-useroperation-with-session",
  "/react/use-sessions": "/advanced/react-hooks/use-sessions",
  "/react/use-session-kernelclient":
    "/advanced/react-hooks/use-session-kernelclient",
  "/react/use-set-kernelclient": "/advanced/react-hooks/use-set-kernelclient",
  "/react/use-switch-chain": "/advanced/react-hooks/use-switch-chain",
  "/react/use-wallet-connect": "/advanced/react-hooks/use-wallet-connect",

  // Orphan /smart-wallet/* (deleted) → canonical homes in the new tree
  "/smart-wallet/which-sdk": "/onboarding/create-a-smart-account",
  "/smart-wallet/quickstart-core": "/get-started/quickstart",
  "/smart-wallet/quickstart-react": "/get-started/quickstart",
  "/smart-wallet/quickstart-capabilities": "/get-started/quickstart",
  "/smart-wallet/creating-wallets": "/onboarding/create-a-smart-account",
  "/smart-wallet/setting-up-zerodev-projects": "/",
  "/smart-wallet/sending-transactions": "/smart-accounts/send-transactions",
  "/smart-wallet/batching-transactions": "/smart-accounts/batch-transactions",
  "/smart-wallet/pay-gas-in-erc20s": "/smart-accounts/pay-gas-with-erc20s",
  "/smart-wallet/sponsoring-gas": "/smart-accounts/sponsor-gas/evm",
  "/smart-wallet/delegatecall": "/smart-accounts/delegatecall",
  "/smart-wallet/multisig": "/advanced/multisig",
  "/smart-wallet/account-recovery": "/advanced/account-recovery/sdk-recovery",
  "/smart-wallet/importing-assets": "/onboarding/create-a-smart-account",
  "/smart-wallet/defi-integrations": "/smart-accounts/defi",
  "/smart-wallet/one-click-trading":
    "/smart-accounts/permissions/transaction-automation",
  "/smart-wallet/parallel-transactions":
    "/smart-accounts/parallel-transactions",
  "/smart-wallet/transaction-automation":
    "/smart-accounts/permissions/transaction-automation",
  "/smart-wallet/wallet-connect": "/advanced/wallet-connect",
  "/smart-wallet/infra-fallbacks": "/advanced/fallback-providers",
  "/smart-wallet/code-examples": "/",
  "/smart-wallet/permissions/intro": "/smart-accounts/permissions/intro",
  "/smart-wallet/permissions/transaction-automation":
    "/smart-accounts/permissions/transaction-automation",
  "/smart-wallet/permissions/signers/ecdsa":
    "/smart-accounts/permissions/signers/ecdsa",
  "/smart-wallet/permissions/signers/passkeys":
    "/smart-accounts/permissions/signers/passkeys",
  "/smart-wallet/permissions/signers/multisig":
    "/smart-accounts/permissions/signers/multisig",
  "/smart-wallet/permissions/signers/build-your-own":
    "/smart-accounts/permissions/signers/build-your-own",
  "/smart-wallet/permissions/policies/sudo":
    "/smart-accounts/permissions/policies/sudo",
  "/smart-wallet/permissions/policies/call":
    "/smart-accounts/permissions/policies/call",
  "/smart-wallet/permissions/policies/gas":
    "/smart-accounts/permissions/policies/gas",
  "/smart-wallet/permissions/policies/signature":
    "/smart-accounts/permissions/policies/signature",
  "/smart-wallet/permissions/policies/rate-limit":
    "/smart-accounts/permissions/policies/rate-limit",
  "/smart-wallet/permissions/policies/timestamp":
    "/smart-accounts/permissions/policies/timestamp",
  "/smart-wallet/permissions/policies/build-your-own":
    "/smart-accounts/permissions/policies/build-your-own",
  "/smart-wallet/permissions/actions/build-your-own":
    "/smart-accounts/permissions/actions/build-your-own",
  "/smart-wallet/permissions/1-click-trading":
    "/smart-accounts/permissions/1-click-trading",

  // 2026-06 user-journey IA: pillars are now Getting Started / Onboarding /
  // Onramp / Smart Account / Advanced / API & Tooling. Old homes → new homes.
  "/smart-accounts/create-a-smart-account":
    "/onboarding/create-a-smart-account",
  "/smart-accounts/authentication/social-login": "/onboarding/social-login",
  "/smart-accounts/authentication/eoa": "/onboarding/eoa",
  "/smart-accounts/authentication/custom-signer": "/onboarding/custom-signer",
  "/smart-accounts/authentication/dynamic": "/onboarding/dynamic",
  "/smart-accounts/authentication/privy": "/onboarding/privy",
  "/smart-accounts/authentication/magic": "/onboarding/magic",
  "/smart-accounts/authentication/web3auth": "/onboarding/web3auth",
  "/smart-accounts/authentication/particle": "/onboarding/particle",
  "/smart-accounts/authentication/arcana": "/onboarding/arcana",
  "/smart-accounts/authentication/turnkey": "/onboarding/turnkey",
  "/smart-accounts/authentication/fireblocks": "/onboarding/fireblocks",
  "/smart-accounts/authentication/dfns": "/onboarding/dfns",
  "/smart-accounts/authentication/lit-protocol": "/onboarding/lit-protocol",
  "/smart-accounts/authentication/capsule": "/onboarding/capsule",
  "/smart-accounts/authentication/portal": "/onboarding/portal",
  "/smart-accounts/authentication/smart-wallet": "/onboarding/smart-wallet",
  "/smart-accounts/use-plugins/signers-intro": "/onboarding/auth-providers",
  "/smart-accounts/use-plugins/passkeys/overview":
    "/onboarding/passkeys/overview",
  "/smart-accounts/use-plugins/passkeys/tutorial":
    "/onboarding/passkeys/tutorial",
  "/smart-accounts/use-plugins/multisig": "/advanced/multisig",
  "/smart-accounts/account-recovery/sdk-recovery":
    "/advanced/account-recovery/sdk-recovery",
  "/smart-accounts/account-recovery/flow-intro":
    "/advanced/account-recovery/flow-intro",
  "/smart-accounts/account-recovery/flow-setup":
    "/advanced/account-recovery/flow-setup",
  "/smart-accounts/account-recovery/portal":
    "/advanced/account-recovery/portal",
  "/smart-accounts/eip-7702/quickstart": "/get-started/eip-7702/quickstart",
  "/cross-chain/smart-routing-address": "/onramp/smart-routing-address",
  "/cross-chain/chain-abstraction/overview":
    "/smart-accounts/chain-abstraction/overview",
  "/cross-chain/chain-abstraction/supported-base-tokens":
    "/smart-accounts/chain-abstraction/supported-base-tokens",
  "/cross-chain/chain-abstraction/supported-defi-tokens":
    "/smart-accounts/chain-abstraction/supported-defi-tokens",
  "/advanced/defi": "/smart-accounts/defi",
  "/advanced/multi-chain-signing": "/smart-accounts/multi-chain-signing",
  "/advanced/parallel-transactions": "/smart-accounts/parallel-transactions",
  "/advanced/deploy-contract": "/smart-accounts/deploy-contract",
  "/advanced/delegatecall": "/smart-accounts/delegatecall",

  // /resources/* URLs never existed as files (content lives at
  // /api-and-toolings/*); map them in case old links escaped into the wild.
  "/resources/infrastructure/intro": "/api-and-toolings/infrastructure/intro",
  "/resources/infrastructure/gas-policies":
    "/api-and-toolings/infrastructure/gas-policies",
  "/resources/infrastructure/custom-gas-policies":
    "/api-and-toolings/infrastructure/custom-gas-policies",
  "/resources/infrastructure/rpcs": "/api-and-toolings/infrastructure/rpcs",
  "/resources/infrastructure/api": "/api-and-toolings/infrastructure/api",
  "/resources/infrastructure/choose-an-infra-provider":
    "/api-and-toolings/infrastructure/choose-an-infra-provider",
  "/resources/infrastructure/zerodev":
    "/api-and-toolings/infrastructure/zerodev",
  "/resources/infrastructure/pimlico":
    "/api-and-toolings/infrastructure/pimlico",
  "/resources/infrastructure/coinbase":
    "/api-and-toolings/infrastructure/coinbase",
  "/resources/presets/intro": "/api-and-toolings/presets/intro",
  "/resources/presets/zerodev": "/api-and-toolings/presets/zerodev",
  "/resources/tools/status": "/api-and-toolings/tools/status",
  "/resources/tools/debugger": "/api-and-toolings/tools/debugger",
  "/resources/faqs/chains": "/api-and-toolings/faqs/chains",
  "/resources/faqs/audits": "/api-and-toolings/faqs/audits",
  "/resources/faqs/debug-userop": "/api-and-toolings/faqs/debug-userop",
  "/resources/faqs/use-with-ethers": "/api-and-toolings/faqs/use-with-ethers",
  "/resources/faqs/use-with-gelato": "/api-and-toolings/faqs/use-with-gelato",
  "/resources/faqs/use-with-react-native":
    "/api-and-toolings/faqs/use-with-react-native",
};

export default defineConfig({
  iconUrl: "/favicon.ico",
  logoUrl: {
    dark: "/logo-white.svg",
    light: "/logo-black.svg",
  },
  ogImageUrl:
    "https://opengraph.b-cdn.net/production/images/50e96e41-57b2-498a-926d-5d4f7dc12ce9.jpg?token=gBUdkC6PEL62pNjHqzD5XrTo5vueTGU7yocJbzCuEvg&height=630&width=1200&expires=33273546185",
  editLink: {
    pattern: "https://github.com/zerodevapp/docs/edit/main/docs/pages/:path",
    text: "Edit on GitHub",
  },
  theme: {
    variables: {
      color: {
        textAccent: {
          light: "#5753c6",
          dark: "#b1a9ff",
        },
        textAccentHover: {
          light: "#272962",
          dark: "#6e6ade",
        },
        link: {
          light: "#5753c6",
          dark: "#b1a9ff",
        },
      },
    },
  },
  title: "ZeroDev",
  titleTemplate: "%s – ZeroDev",
  description: "The most powerful smart account.",
  head: (
    <>
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="ZeroDev -- Simple & Powerful Account Abstraction"
      />
      <meta property="og:url" content="https://zerodev.app" />
      <meta
        property="og:description"
        content="Build a Web3 experience that feels like Web2, using account abstraction through ZeroDev.  Say goodbye to gas, seed phrases, transaction prompts, and more."
      />
    </>
  ),
  // Pillars (Getting Started, Onboarding, Onramp, Smart Account, Advanced,
  // API & Tooling) are rendered by the `inject-pillar-bar` Vite plugin
  // below as a separate horizontal bar BELOW this top nav. Only utility links
  // live in topNav itself.
  topNav: [
    { text: "API Reference", link: "https://zerodev-api.readme.io" },
    { text: "Dashboard", link: "https://dashboard.zerodev.app/" },
    { text: "Blog", link: "/blog", match: "/blog" },
  ],
  socials: [
    { icon: "github", link: "https://github.com/zerodevapp" },
    { icon: "discord", link: "https://discord.gg/KS9MRaTSjx" },
    { icon: "x", link: "https://twitter.com/zerodev_app" },
  ],
  sidebar: {
    "/": [
      {
        text: "Get Started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/" },
          { text: "Quickstart", link: "/get-started/quickstart" },
          {
            text: "EIP-7702",
            collapsed: false,
            items: [
              {
                text: "Quickstart",
                link: "/get-started/eip-7702/quickstart",
              },
              {
                text: "Examples (external)",
                link: "https://7702.zerodev.app/",
              },
            ],
          },
          {
            text: "SDKs",
            collapsed: false,
            items: [
              { text: "Overview", link: "/get-started/sdks/overview" },
              {
                text: "Set up a project",
                link: "/get-started/sdks/setup-project",
              },
              {
                text: "Client-side",
                collapsed: false,
                items: [
                  {
                    text: "TypeScript / JavaScript",
                    link: "/get-started/sdks/client-side/typescript",
                  },
                  {
                    text: "iOS (Swift)",
                    link: "/get-started/sdks/client-side/ios",
                  },
                  {
                    text: "Android (Kotlin)",
                    link: "/get-started/sdks/client-side/android",
                  },
                ],
              },
              {
                text: "Server-side",
                collapsed: false,
                items: [
                  {
                    text: "Node.js / TypeScript",
                    link: "/get-started/sdks/server-side/nodejs",
                  },
                  {
                    text: "Go",
                    link: "/get-started/sdks/server-side/go",
                  },
                  {
                    text: "Python",
                    link: "/get-started/sdks/server-side/python",
                  },
                  {
                    text: "Rust",
                    link: "/get-started/sdks/server-side/rust",
                  },
                  {
                    text: "C",
                    link: "/get-started/sdks/server-side/c",
                  },
                ],
              },
            ],
          },
          {
            text: "Code Examples",
            link: "https://github.com/zerodevapp/zerodev-examples",
          },
        ],
      },
    ],
    "/onboarding": [
      {
        text: "Onboarding",
        collapsed: false,
        items: [
          {
            text: "Create a Smart Account",
            link: "/onboarding/create-a-smart-account",
          },
          {
            text: "Auth Providers",
            link: "/onboarding/auth-providers",
          },
          {
            text: "Passkeys",
            link: "/onboarding/passkeys/overview",
            collapsed: false,
            items: [
              {
                text: "Code Example: Tutorial",
                link: "/onboarding/passkeys/tutorial",
              },
            ],
          },
          {
            text: "Social Login",
            link: "/onboarding/social-login",
          },
          {
            text: "EOA Wallets",
            link: "/onboarding/eoa",
          },
          {
            text: "Custom Signer",
            link: "/onboarding/custom-signer",
          },
          {
            text: "Dynamic",
            link: "/onboarding/dynamic",
          },
          {
            text: "Privy",
            link: "/onboarding/privy",
          },
          {
            text: "Magic",
            link: "/onboarding/magic",
          },
          {
            text: "Web3Auth",
            link: "/onboarding/web3auth",
          },
          {
            text: "Particle",
            link: "/onboarding/particle",
          },
          {
            text: "Arcana",
            link: "/onboarding/arcana",
          },
          {
            text: "Turnkey",
            link: "/onboarding/turnkey",
          },
          {
            text: "Fireblocks",
            link: "/onboarding/fireblocks",
          },
          {
            text: "Dfns",
            link: "/onboarding/dfns",
          },
          {
            text: "Lit Protocol",
            link: "/onboarding/lit-protocol",
          },
          {
            text: "Para",
            link: "/onboarding/capsule",
          },
          {
            text: "Portal",
            link: "/onboarding/portal",
          },
          {
            text: "Coinbase Smart Wallet",
            link: "/onboarding/smart-wallet",
          },
        ],
      },
    ],
    "/onramp": [
      {
        text: "Smart Routing Address",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/onramp/smart-routing-address",
          },
          {
            text: "Quickstart",
            link: "/onramp/smart-routing-address/quickstart",
          },
          {
            text: "Fetching Status",
            link: "/onramp/smart-routing-address/fetching-status",
          },
          {
            text: "Fee Sponsorship",
            link: "/onramp/smart-routing-address/fee-sponsorship",
          },
          {
            text: "Supported Chains & Tokens",
            link: "/onramp/smart-routing-address/supported-chains",
          },
        ],
      },
    ],
    "/smart-accounts": [
      {
        text: "Smart Account",
        collapsed: false,
        items: [
          {
            text: "Send Transactions",
            link: "/smart-accounts/send-transactions",
          },
          {
            text: "Batch Transactions",
            link: "/smart-accounts/batch-transactions",
          },
          {
            text: "Sponsor Gas",
            collapsed: false,
            items: [
              { text: "EVM", link: "/smart-accounts/sponsor-gas/evm" },
              { text: "Solana", link: "/smart-accounts/sponsor-gas/solana" },
            ],
          },
          {
            text: "Pay Gas with ERC-20s",
            link: "/smart-accounts/pay-gas-with-erc20s",
          },
          {
            text: "Sign and Verify Messages",
            link: "/smart-accounts/sign-and-verify",
          },
          {
            text: "Using Plugins",
            link: "/smart-accounts/use-plugins/overview",
          },
          {
            text: "Permissions (Session Keys)",
            collapsed: true,
            items: [
              {
                text: "Introduction",
                link: "/smart-accounts/permissions/intro",
              },
              {
                text: "Session Keys",
                link: "/smart-accounts/permissions/session-keys",
              },
              {
                text: "Tutorial: Transaction Automation",
                link: "/smart-accounts/permissions/transaction-automation",
              },
              {
                text: "Install with initConfig",
                link: "/smart-accounts/permissions/install-with-init-config",
              },
              {
                text: "Code Example: AgentKit",
                link: "/smart-accounts/permissions/agentkit",
              },
              {
                text: "Signers",
                collapsed: true,
                items: [
                  {
                    text: "ECDSA",
                    link: "/smart-accounts/permissions/signers/ecdsa",
                  },
                  {
                    text: "Passkeys",
                    link: "/smart-accounts/permissions/signers/passkeys",
                  },
                  {
                    text: "Multisig",
                    link: "/smart-accounts/permissions/signers/multisig",
                  },
                  {
                    text: "Build your own signer",
                    link: "/smart-accounts/permissions/signers/build-your-own",
                  },
                ],
              },
              {
                text: "Policies",
                collapsed: true,
                items: [
                  {
                    text: "Sudo policy",
                    link: "/smart-accounts/permissions/policies/sudo",
                  },
                  {
                    text: "Call policy",
                    link: "/smart-accounts/permissions/policies/call",
                  },
                  {
                    text: "Gas policy",
                    link: "/smart-accounts/permissions/policies/gas",
                  },
                  {
                    text: "Signature policy",
                    link: "/smart-accounts/permissions/policies/signature",
                  },
                  {
                    text: "Rate Limit policy",
                    link: "/smart-accounts/permissions/policies/rate-limit",
                  },
                  {
                    text: "Timestamp policy",
                    link: "/smart-accounts/permissions/policies/timestamp",
                  },
                  {
                    text: "Build your own policy",
                    link: "/smart-accounts/permissions/policies/build-your-own",
                  },
                ],
              },
              {
                text: "Actions",
                collapsed: true,
                items: [
                  {
                    text: "Build your own action",
                    link: "/smart-accounts/permissions/actions/build-your-own",
                  },
                ],
              },
            ],
          },
          {
            text: "Chain Abstraction (CAB)",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/smart-accounts/chain-abstraction/overview",
              },
              {
                text: "Supported Base Tokens",
                link: "/smart-accounts/chain-abstraction/supported-base-tokens",
              },
              {
                text: "Supported DeFi Tokens",
                link: "/smart-accounts/chain-abstraction/supported-defi-tokens",
              },
            ],
          },
          {
            text: "DeFi Integrations",
            link: "/smart-accounts/defi",
          },
          {
            text: "Multi-chain Signing",
            link: "/smart-accounts/multi-chain-signing",
          },
          {
            text: "Parallel Transactions (2D Nonces)",
            link: "/smart-accounts/parallel-transactions",
          },
          {
            text: "Deploy Contracts",
            link: "/smart-accounts/deploy-contract",
          },
          {
            text: "Delegatecall",
            link: "/smart-accounts/delegatecall",
          },
        ],
      },
    ],
    // Embedded Wallet (alpha) — not advertised in the public pillar bar.
    // Lives at /wallets/* and is only navigable for users who know the URL.
    "/wallets": [
      {
        text: "Embedded Wallets",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/wallets",
          },
          {
            text: "Overview",
            link: "/wallets/overview",
          },
          {
            text: "Quickstart",
            link: "/wallets/quickstart",
          },
          {
            text: "Demo",
            link: "https://zerodev-signer-demo.vercel.app/",
          },
          {
            text: "Authentication",
            collapsed: false,
            items: [
              {
                text: "Overview",
                link: "/wallets/auth",
              },
              {
                text: "Login",
                collapsed: true,
                items: [
                  {
                    text: "Passkeys",
                    link: "/wallets/auth/passkeys",
                  },
                  {
                    text: "Email OTP",
                    link: "/wallets/auth/email-otp",
                  },
                  {
                    text: "Magic Link",
                    link: "/wallets/auth/magic-link",
                  },
                  {
                    text: "Google OAuth",
                    link: "/wallets/auth/google-oauth",
                  },
                ],
              },
              {
                text: "Session Management",
                link: "/wallets/session-management",
              },
            ],
          },
          {
            text: "Wallets",
            collapsed: false,
            items: [
              {
                text: "Overview",
                link: "/wallets/wallet-api",
              },
              {
                text: "Features",
                collapsed: true,
                items: [
                  {
                    text: "Send a Transaction",
                    link: "/wallets/wallet-api/send-transaction",
                  },
                  {
                    text: "Sign a Message",
                    link: "/wallets/wallet-api/sign-message",
                  },
                  {
                    text: "Sign a Typed Message",
                    link: "/wallets/wallet-api/sign-typed-message",
                  },
                ],
              },
              {
                text: "Security",
                collapsed: true,
                items: [
                  {
                    text: "Export Wallet",
                    link: "/wallets/export",
                  },
                ],
              },
            ],
          },
          {
            text: "Reference",
            collapsed: true,
            items: [
              {
                text: "Public API Reference",
                link: "/wallets/api-reference",
              },
              {
                text: "useRegisterPasskey",
                link: "/wallets/hooks/use-register-passkey",
              },
              {
                text: "useLoginPasskey",
                link: "/wallets/hooks/use-login-passkey",
              },
              {
                text: "useAuthenticateOAuth",
                link: "/wallets/hooks/use-authenticate-oauth",
              },
              {
                text: "useSendOTP",
                link: "/wallets/hooks/use-send-otp",
              },
              {
                text: "useVerifyOTP",
                link: "/wallets/hooks/use-verify-otp",
              },
              {
                text: "useSendMagicLink",
                link: "/wallets/hooks/use-send-magic-link",
              },
              {
                text: "useVerifyMagicLink",
                link: "/wallets/hooks/use-verify-magic-link",
              },
              {
                text: "useAuthenticators",
                link: "/wallets/hooks/use-authenticators",
              },
              {
                text: "useRefreshSession",
                link: "/wallets/hooks/use-refresh-session",
              },
              {
                text: "useExportWallet",
                link: "/wallets/hooks/use-export-wallet",
              },
              {
                text: "useExportPrivateKey",
                link: "/wallets/hooks/use-export-private-key",
              },
            ],
          },
        ],
      },
    ],
    "/advanced": [
      {
        text: "Advanced",
        collapsed: false,
        items: [
          { text: "Migration Guide", link: "/advanced/migration" },
          {
            text: "Account Recovery",
            collapsed: true,
            items: [
              {
                text: "SDK Recovery",
                link: "/advanced/account-recovery/sdk-recovery",
              },
              {
                text: "Flow Intro",
                link: "/advanced/account-recovery/flow-intro",
              },
              {
                text: "Flow Setup",
                link: "/advanced/account-recovery/flow-setup",
              },
              {
                text: "Portal",
                link: "/advanced/account-recovery/portal",
              },
            ],
          },
          { text: "Multisig", link: "/advanced/multisig" },
          {
            text: "Fallback Providers",
            link: "/advanced/fallback-providers",
          },
          { text: "Key Storage", link: "/advanced/key-storage" },
          {
            text: "Connect Wallet with Other DApps",
            link: "/advanced/wallet-connect",
          },
          {
            text: "Track deployed smart accounts",
            link: "/advanced/track-deployed-accounts",
          },
          { text: "Upgrading Kernel", link: "/advanced/upgrade-kernel" },
          {
            text: "UserOp Builder API",
            link: "/advanced/userop-builder-api",
          },
        ],
      },
    ],
    "/api-and-toolings": [
      {
        text: "API & Tooling",
        collapsed: false,
        items: [
          {
            text: "Infrastructure",
            collapsed: false,
            items: [
              {
                text: "Gas Policies",
                link: "/api-and-toolings/infrastructure/gas-policies",
              },
              {
                text: "Custom Gas Policies",
                link: "/api-and-toolings/infrastructure/custom-gas-policies",
              },
              {
                text: "Admin API",
                link: "/api-and-toolings/infrastructure/api",
              },
            ],
          },
          {
            text: "Tools",
            collapsed: false,
            items: [
              { text: "UserOp Debugger", link: "https://debug.zerodev.app/" },
              {
                text: "Status & Uptime API",
                link: "https://status.zerodev.app/",
              },
            ],
          },
          {
            text: "FAQs",
            collapsed: true,
            items: [
              {
                text: "Supported networks",
                link: "/api-and-toolings/faqs/chains",
              },
              {
                text: "Audits",
                link: "/api-and-toolings/faqs/audits",
              },
              {
                text: "Use with ethers.js",
                link: "/api-and-toolings/faqs/use-with-ethers",
              },
              {
                text: "Use with React Native",
                link: "/api-and-toolings/faqs/use-with-react-native",
              },
              {
                text: "Use with Gelato",
                link: "/api-and-toolings/faqs/use-with-gelato",
              },
              {
                text: "Debug a UserOp",
                link: "/api-and-toolings/faqs/debug-userop",
              },
            ],
          },
        ],
      },
    ],
    "/sdk/v5_3_x": [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/sdk/v5_3_x/",
          },
          {
            text: "Quickstart",
            link: "/sdk/v5_3_x/getting-started/quickstart",
          },
          {
            text: "Tutorial",
            link: "/sdk/v5_3_x/getting-started/tutorial",
          },
          {
            text: "Tutorial — Passkeys",
            link: "/sdk/v5_3_x/getting-started/tutorial-passkeys",
          },
          {
            text: "Code Examples",
            link: "https://github.com/zerodevapp/zerodev-examples/tree/v5.3.x",
          },
          {
            text: "Migration Guide",
            link: "/sdk/v5_3_x/getting-started/migration",
          },
        ],
      },
      {
        text: "Core API",
        collapsed: false,
        items: [
          {
            text: "Create a Smart Account",
            link: "/sdk/v5_3_x/core-api/create-account",
          },
          {
            text: "Using Plugins",
            link: "/sdk/v5_3_x/core-api/using-plugins",
          },
          {
            text: "Send Transactions",
            link: "/sdk/v5_3_x/core-api/send-transactions",
          },
          {
            text: "Sponsor Gas",
            link: "/sdk/v5_3_x/core-api/sponsor-gas",
          },
          {
            text: "Pay Gas with ERC20s",
            link: "/sdk/v5_3_x/core-api/pay-gas-with-erc20s",
          },
          {
            text: "Batch Transactions",
            link: "/sdk/v5_3_x/core-api/batch-transactions",
          },
          {
            text: "Deploy Contracts",
            link: "/sdk/v5_3_x/core-api/deploy-contract",
          },
          {
            text: "Delegatecall",
            link: "/sdk/v5_3_x/core-api/delegatecall",
          },
          {
            text: "Sign and Verify Messages",
            link: "/sdk/v5_3_x/core-api/sign-and-verify",
          },
        ],
      },
      {
        text: "Advanced",
        collapsed: false,
        items: [
          {
            text: "Chain Abstraction",
            link: "/sdk/v5_3_x/advanced/chain-abstraction",
          },
          {
            text: "Passkeys",
            link: "/sdk/v5_3_x/advanced/passkeys",
          },
          {
            text: "Social Login",
            link: "/sdk/v5_3_x/advanced/social-login",
          },
          {
            text: "Session Keys",
            link: "/sdk/v5_3_x/advanced/session-keys",
          },
          {
            text: "Multisig",
            link: "/sdk/v5_3_x/advanced/multisig",
          },
          {
            text: "Recovery",
            link: "/sdk/v5_3_x/advanced/recovery",
          },
          {
            text: "Multi-chain Signing",
            link: "/sdk/v5_3_x/advanced/multi-chain-signing",
          },
          {
            text: "Key Storage",
            link: "/sdk/v5_3_x/advanced/key-storage",
          },
          {
            text: "DeFi Integrations",
            link: "/sdk/v5_3_x/advanced/defi",
          },
          {
            text: "Parallel Transactions (2D Nonces)",
            link: "/sdk/v5_3_x/advanced/parallel-orders",
          },
          {
            text: "Connect Wallet with Other DApps",
            link: "/sdk/v5_3_x/advanced/wallet-connect",
          },
          {
            text: "Fallback Providers",
            link: "/sdk/v5_3_x/advanced/fallback-providers",
          },
        ],
      },
      {
        text: "Permissions (Session Keys)",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/sdk/v5_3_x/permissions/intro",
          },
          {
            text: "Tutorial: Transaction Automation",
            link: "/sdk/v5_3_x/permissions/transaction-automation",
          },
          {
            text: "Signers",
            collapsed: false,
            items: [
              {
                text: "ECDSA",
                link: "/sdk/v5_3_x/permissions/signers/ecdsa",
              },
              {
                text: "Passkeys",
                link: "/sdk/v5_3_x/permissions/signers/passkeys",
              },
              {
                text: "Multisig",
                link: "/sdk/v5_3_x/permissions/signers/multisig",
              },
              {
                text: "Build your own signer",
                link: "/sdk/v5_3_x/permissions/signers/build-your-own",
              },
            ],
          },
          {
            text: "Policies",
            collapsed: false,
            items: [
              {
                text: "Sudo policy",
                link: "/sdk/v5_3_x/permissions/policies/sudo",
              },
              {
                text: "Call policy",
                link: "/sdk/v5_3_x/permissions/policies/call",
              },
              {
                text: "Gas policy",
                link: "/sdk/v5_3_x/permissions/policies/gas",
              },
              {
                text: "Signature policy",
                link: "/sdk/v5_3_x/permissions/policies/signature",
              },
              {
                text: "Rate Limit policy",
                link: "/sdk/v5_3_x/permissions/policies/rate-limit",
              },
              {
                text: "Timestamp policy",
                link: "/sdk/v5_3_x/permissions/policies/timestamp",
              },
              {
                text: "Build your own policy",
                link: "/sdk/v5_3_x/permissions/policies/build-your-own",
              },
            ],
          },
          {
            text: "Actions",
            collapsed: true,
            items: [
              {
                text: "Build your own action",
                link: "/sdk/v5_3_x/permissions/actions/build-your-own",
              },
            ],
          },
        ],
      },
      {
        text: "Auth Providers",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/sdk/v5_3_x/signers/intro" },
          { link: "/sdk/v5_3_x/signers/dynamic", text: "Dynamic" },
          { link: "/sdk/v5_3_x/signers/privy", text: "Privy" },
          { link: "/sdk/v5_3_x/signers/magic", text: "Magic" },
          { link: "/sdk/v5_3_x/signers/web3auth", text: "Web3Auth" },
          { link: "/sdk/v5_3_x/signers/portal", text: "Portal" },
          { link: "/sdk/v5_3_x/signers/turnkey", text: "Turnkey" },
          { link: "/sdk/v5_3_x/signers/fireblocks", text: "Fireblocks" },
          { link: "/sdk/v5_3_x/signers/capsule", text: "Capsule" },
          { link: "/sdk/v5_3_x/signers/lit-protocol", text: "Lit Protocol" },
          { link: "/sdk/v5_3_x/signers/particle", text: "Particle Network" },
          { link: "/sdk/v5_3_x/signers/dfns", text: "Dfns" },
          { link: "/sdk/v5_3_x/signers/arcana", text: "Arcana Auth" },
          {
            link: "/sdk/v5_3_x/signers/eoa",
            text: "EOA Wallets (e.g. MetaMask)",
          },
          {
            link: "/sdk/v5_3_x/signers/custom-signer",
            text: "Custom Signer Integration",
          },
        ],
      },
      {
        text: "Infra",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/sdk/v5_3_x/infra/intro" },
          { text: "ZeroDev", link: "/api-and-toolings/infrastructure/intro" },
          { text: "Pimlico", link: "/sdk/v5_3_x/infra/pimlico" },
          { text: "Coinbase", link: "/sdk/v5_3_x/infra/coinbase" },
        ],
      },
      {
        text: "FAQs",
        collapsed: false,
        items: [
          {
            text: "Why chain abstraction?",
            link: "/sdk/v5_3_x/faqs/why-chain-abstraction",
          },
          {
            text: "What networks do you support?",
            link: "/sdk/v5_3_x/faqs/chains",
          },
          {
            text: "How to debug a UserOp?",
            link: "/sdk/v5_3_x/faqs/debug-userop",
          },
          {
            text: "Can I use a KernelClient with ethers.js?",
            link: "/sdk/v5_3_x/faqs/use-with-ethers",
          },
          {
            text: "Can you use ZeroDev with React Native?",
            link: "/sdk/v5_3_x/faqs/use-with-react-native",
          },
          { text: "Is ZeroDev Audited?", link: "/sdk/v5_3_x/faqs/audits" },
          {
            text: "How to use ZeroDev with Gelato",
            link: "/sdk/v5_3_x/faqs/use-with-gelato",
          },
        ],
      },
    ],
  },
  vite: {
    plugins: [
      {
        name: "ia-revamp-redirects",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (!req.url) return next();
            const url = new URL(req.url, "http://localhost");
            const target = REDIRECTS[url.pathname];
            if (target) {
              res.statusCode = 301;
              res.setHeader("Location", target + url.search);
              res.end();
              return;
            }
            next();
          });
        },
      },
      {
        name: "inject-pillar-bar",
        transformIndexHtml(html) {
          const pillarBarStyles = `
<style id="zd-pillar-bar-styles">
  :root { --zd-pillar-bar-height: 44px; }

  /* Expand the search bar so it fills the row */
  .vocs_DesktopSearch_search {
    width: 100% !important;
    max-width: none !important;
  }
  .vocs_DesktopTopNav > .vocs_DesktopTopNav_section:first-of-type {
    flex: 1 1 auto;
  }

  /* Push docs content (and the right-side outline gutter) down so the fixed
     pillar bar doesn't overlap it. */
  .vocs_DocsLayout_content {
    padding-top: calc(var(--vocs-topNav_height, 56px) + var(--zd-pillar-bar-height)) !important;
  }
  .vocs_DocsLayout_gutterRight {
    margin-top: var(--zd-pillar-bar-height);
  }

  /* Pillar bar: fixed horizontal nav directly below the top header.
     Mounted at document.body so it escapes the fixed-height gutterTop. */
  .zd-pillar-bar {
    position: fixed;
    top: var(--vocs-topNav_height, 56px);
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 4px;
    height: var(--zd-pillar-bar-height);
    /* Match Vocs's leftGutterWidth calc — that variable is scoped to
       .vocs_DocsLayout so it's not visible on body. Recompute it here using
       :root-scoped vars so the bar's content aligns with the search bar. */
    padding-left: max(
      calc((100vw - var(--vocs-content_width)) / 2),
      var(--vocs-sidebar_width)
    );
    padding-right: 24px;
    border-bottom: 1px solid var(--vocs-color_border);
    background: var(--vocs-color_background);
    font-size: 14px;
    font-weight: 500;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .zd-pillar-bar::-webkit-scrollbar { display: none; }

  .zd-pillar-bar a {
    display: inline-flex;
    align-items: center;
    color: var(--vocs-color_text2);
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    transition: color 0.1s, background 0.1s;
  }
  .zd-pillar-bar a:hover {
    color: var(--vocs-color_textHover);
    background: var(--vocs-color_background3);
  }
  .zd-pillar-bar a[aria-current="page"] {
    color: var(--vocs-color_textAccent);
    background: var(--vocs-color_backgroundIrisTint);
  }

  /* On narrow viewports, Vocs hides the desktop top nav and shows a mobile drawer.
     Hide the pillar bar there too — Vocs's mobile menu will surface pillar links via
     the sidebar. */
  @media (max-width: 1080px) {
    .zd-pillar-bar { display: none; }
    .vocs_DocsLayout_content { padding-top: var(--vocs-topNav_height, 56px) !important; }
    .vocs_DocsLayout_gutterRight { margin-top: 0; }
  }
</style>`;

          const pillarBarScript = `
<script id="zd-pillar-bar-script">
(function() {
  var PILLARS = [
    { href: '/', text: 'Getting Started', match: function(p) { return p === '/' || p.indexOf('/get-started') === 0; } },
    { href: '/onboarding/create-a-smart-account', text: 'Onboarding', match: function(p) { return p.indexOf('/onboarding') === 0; } },
    { href: '/onramp/smart-routing-address', text: 'Onramp', match: function(p) { return p.indexOf('/onramp') === 0; } },
    { href: '/smart-accounts/send-transactions', text: 'Smart Account', match: function(p) { return p.indexOf('/smart-accounts') === 0; } },
    { href: '/advanced/migration', text: 'Advanced', match: function(p) { return p.indexOf('/advanced') === 0; } },
    { href: '/api-and-toolings/infrastructure/gas-policies', text: 'API & Tooling', match: function(p) { return p.indexOf('/api-and-toolings') === 0; } }
  ];

  function build() {
    var bar = document.createElement('nav');
    bar.className = 'zd-pillar-bar';
    bar.id = 'zd-pillar-bar';
    bar.setAttribute('aria-label', 'Documentation sections');
    PILLARS.forEach(function(p) {
      var a = document.createElement('a');
      a.href = p.href;
      a.textContent = p.text;
      a.setAttribute('data-pillar-href', p.href);
      bar.appendChild(a);
    });
    return bar;
  }

  function updateActive() {
    var bar = document.getElementById('zd-pillar-bar');
    if (!bar) return;
    var path = window.location.pathname.replace(/\\/$/, '') || '/';
    var anchors = bar.querySelectorAll('a');
    anchors.forEach(function(a, i) {
      if (PILLARS[i].match(path)) {
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  function mount() {
    if (document.getElementById('zd-pillar-bar')) return;
    if (!document.body) return;
    var bar = build();
    // Mount at body level so it escapes Vocs's fixed-height gutterTop container.
    // The CSS pins it via position:fixed below the existing top nav.
    document.body.appendChild(bar);
    updateActive();
  }

  function tryMount() {
    mount();
    // Retry briefly in case body isn't ready yet (very early script execution).
    if (!document.getElementById('zd-pillar-bar')) {
      var attempts = 0;
      var interval = setInterval(function() {
        mount();
        if (document.getElementById('zd-pillar-bar') || ++attempts > 20) {
          clearInterval(interval);
        }
      }, 50);
    }
  }

  // Patch history APIs so SPA navigation triggers our updater.
  ['pushState', 'replaceState'].forEach(function(method) {
    var orig = history[method];
    history[method] = function() {
      var ret = orig.apply(history, arguments);
      window.dispatchEvent(new Event('zd-locationchange'));
      return ret;
    };
  });
  window.addEventListener('popstate', function() {
    window.dispatchEvent(new Event('zd-locationchange'));
  });
  window.addEventListener('zd-locationchange', function() {
    // Re-mount in case Vocs rebuilt the layout, then update active state.
    mount();
    updateActive();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryMount);
  } else {
    tryMount();
  }
})();
</script>`;

          return html.replace(
            "</head>",
            `${pillarBarStyles}\n${pillarBarScript}\n</head>`,
          );
        },
      },
      {
        name: "inject-external-link-handler",
        transformIndexHtml(html) {
          const externalLinkScript = `
<script id="zd-external-link-handler">
(function() {
  function isExternal(href) {
    if (!href) return false;
    if (!/^https?:\\/\\//i.test(href)) return false;
    try {
      var u = new URL(href, window.location.href);
      return u.host !== window.location.host;
    } catch (e) {
      return false;
    }
  }

  function markExternalLinks() {
    var anchors = document.querySelectorAll('a[href]');
    anchors.forEach(function(a) {
      if (a.dataset.zdExternalChecked === '1') return;
      a.dataset.zdExternalChecked = '1';
      if (isExternal(a.getAttribute('href'))) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  function start() {
    markExternalLinks();
    var observer = new MutationObserver(function() {
      markExternalLinks();
    });
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  window.addEventListener('zd-locationchange', markExternalLinks);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
</script>`;

          return html.replace("</head>", `${externalLinkScript}\n</head>`);
        },
      },
      {
        name: "inject-posthog-plugin",
        transformIndexHtml(html) {
          return html.replace(
            "</head>",
            `  <script>!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init hi $r kr ui wr Er capture Ri calculateEventProperties Ir register register_once register_for_session unregister unregister_for_session Fr getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Cr Tr createPersonProfile Or yr Mr opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Pr debug L Rr getPageViewId captureTraceFeedback captureTraceMetric gr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('${process.env.VITE_POSTHOG}', {
    api_host: '${process.env.VITE_POSTHOG_HOST}',
    defaults: '2025-05-24',
    cookieless_mode: "always",
})</script>

<!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/50627473.js"></script>
<!-- End of HubSpot Embed Code -->
</head>`,
          );
        },
      },
    ],
  },
});
