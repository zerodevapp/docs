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
  "/sdk/getting-started/tutorial-passkeys":
    "/smart-accounts/use-plugins/passkeys/tutorial",
  "/sdk/getting-started/quickstart-7702":
    "/smart-accounts/eip-7702/quickstart",
  "/sdk/getting-started/quickstart-agentkit":
    "/smart-accounts/permissions/agentkit",
  "/sdk/getting-started/migration": "/advanced/migration",

  // Core API → Smart Accounts (build) + Advanced + Resources/Tools
  "/sdk/core-api/create-account": "/smart-accounts/create-a-smart-account",
  "/sdk/core-api/using-plugins": "/smart-accounts/use-plugins/overview",
  "/sdk/core-api/send-transactions": "/smart-accounts/send-transactions",
  "/sdk/core-api/batch-transactions": "/smart-accounts/batch-transactions",
  "/sdk/core-api/sponsor-gas": "/smart-accounts/sponsor-gas/evm",
  "/sdk/core-api/pay-gas-with-erc20s": "/smart-accounts/pay-gas-with-erc20s",
  "/sdk/core-api/sign-and-verify": "/smart-accounts/sign-and-verify",
  "/sdk/core-api/deploy-contract": "/advanced/deploy-contract",
  "/sdk/core-api/delegatecall": "/advanced/delegatecall",
  "/sdk/core-api/status": "/resources/tools/status",
  "/sdk/core-api/debugger": "/resources/tools/debugger",

  // Advanced → split between Smart Accounts, Cross-Chain, and Advanced
  "/sdk/advanced/chain-abstraction": "/cross-chain/chain-abstraction/overview",
  "/sdk/advanced/passkeys": "/smart-accounts/use-plugins/passkeys/overview",
  "/sdk/advanced/multisig": "/smart-accounts/use-plugins/multisig",
  "/sdk/advanced/social-login": "/smart-accounts/authentication/social-login",
  "/sdk/advanced/session-keys": "/smart-accounts/permissions/session-keys",
  "/sdk/advanced/recovery": "/smart-accounts/account-recovery/sdk-recovery",
  "/sdk/advanced/multi-chain-signing": "/advanced/multi-chain-signing",
  "/sdk/advanced/key-storage": "/advanced/key-storage",
  "/sdk/advanced/defi": "/advanced/defi",
  "/sdk/advanced/parallel-orders": "/advanced/parallel-transactions",
  "/sdk/advanced/wallet-connect": "/advanced/wallet-connect",
  "/sdk/advanced/fallback-providers": "/advanced/fallback-providers",
  "/sdk/advanced/run-solidity-code-on-init":
    "/advanced/track-deployed-accounts",
  "/sdk/advanced/upgrade-kernel": "/advanced/upgrade-kernel",
  "/sdk/advanced/go-sdk": "/advanced/go-sdk",
  "/sdk/advanced/userop-builder-api": "/advanced/userop-builder-api",
  "/sdk/advanced/supported-base-tokens":
    "/cross-chain/chain-abstraction/supported-base-tokens",
  "/sdk/advanced/supported-defi-tokens":
    "/cross-chain/chain-abstraction/supported-defi-tokens",

  // Permissions (preserved structure)
  "/sdk/permissions/intro": "/smart-accounts/permissions/intro",
  "/sdk/permissions/transaction-automation":
    "/smart-accounts/permissions/transaction-automation",
  "/sdk/permissions/install-with-init-config":
    "/smart-accounts/permissions/install-with-init-config",
  "/sdk/permissions/1-click-trading":
    "/smart-accounts/permissions/1-click-trading",
  "/sdk/permissions/signers/ecdsa":
    "/smart-accounts/permissions/signers/ecdsa",
  "/sdk/permissions/signers/passkeys":
    "/smart-accounts/permissions/signers/passkeys",
  "/sdk/permissions/signers/multisig":
    "/smart-accounts/permissions/signers/multisig",
  "/sdk/permissions/signers/build-your-own":
    "/smart-accounts/permissions/signers/build-your-own",
  "/sdk/permissions/policies/sudo":
    "/smart-accounts/permissions/policies/sudo",
  "/sdk/permissions/policies/call":
    "/smart-accounts/permissions/policies/call",
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
  "/sdk/signers/intro": "/smart-accounts/use-plugins/signers-intro",
  "/sdk/signers/dynamic": "/smart-accounts/authentication/dynamic",
  "/sdk/signers/privy": "/smart-accounts/authentication/privy",
  "/sdk/signers/magic": "/smart-accounts/authentication/magic",
  "/sdk/signers/web3auth": "/smart-accounts/authentication/web3auth",
  "/sdk/signers/smart-wallet": "/smart-accounts/authentication/smart-wallet",
  "/sdk/signers/portal": "/smart-accounts/authentication/portal",
  "/sdk/signers/turnkey": "/smart-accounts/authentication/turnkey",
  "/sdk/signers/fireblocks": "/smart-accounts/authentication/fireblocks",
  "/sdk/signers/capsule": "/smart-accounts/authentication/capsule",
  "/sdk/signers/lit-protocol": "/smart-accounts/authentication/lit-protocol",
  "/sdk/signers/particle": "/smart-accounts/authentication/particle",
  "/sdk/signers/dfns": "/smart-accounts/authentication/dfns",
  "/sdk/signers/arcana": "/smart-accounts/authentication/arcana",
  "/sdk/signers/eoa": "/smart-accounts/authentication/eoa",
  "/sdk/signers/custom-signer":
    "/smart-accounts/authentication/custom-signer",

  // Solana
  "/sdk/solana/sponsor-gas": "/smart-accounts/sponsor-gas/solana",

  // Infra (formerly orphan in main sidebar)
  "/sdk/infra/intro": "/resources/infrastructure/choose-an-infra-provider",
  "/sdk/infra/zerodev": "/resources/infrastructure/zerodev",
  "/sdk/infra/pimlico": "/resources/infrastructure/pimlico",
  "/sdk/infra/coinbase": "/resources/infrastructure/coinbase",

  // Presets (formerly orphan)
  "/sdk/presets/intro": "/resources/presets/intro",
  "/sdk/presets/zerodev": "/resources/presets/zerodev",

  // FAQs
  "/sdk/faqs/chains": "/resources/faqs/chains",
  "/sdk/faqs/audits": "/resources/faqs/audits",
  "/sdk/faqs/debug-userop": "/resources/faqs/debug-userop",
  "/sdk/faqs/use-with-ethers": "/resources/faqs/use-with-ethers",
  "/sdk/faqs/use-with-gelato": "/resources/faqs/use-with-gelato",
  "/sdk/faqs/use-with-react-native": "/resources/faqs/use-with-react-native",

  // Meta-infra → Resources › Infrastructure
  "/meta-infra/intro": "/resources/infrastructure/intro",
  "/meta-infra/gas-policies": "/resources/infrastructure/gas-policies",
  "/meta-infra/custom-gas-policies":
    "/resources/infrastructure/custom-gas-policies",
  "/meta-infra/rpcs": "/resources/infrastructure/rpcs",
  "/meta-infra/api": "/resources/infrastructure/api",

  // Recovery flow → Smart Accounts › Account Recovery
  "/recovery-flow/intro": "/smart-accounts/account-recovery/flow-intro",
  "/recovery-flow/setup": "/smart-accounts/account-recovery/flow-setup",
  "/recovery-flow/portal": "/smart-accounts/account-recovery/portal",

  // Smart Routing Address (and global-address duplicate)
  "/smart-routing-address": "/cross-chain/smart-routing-address",
  "/global-address": "/cross-chain/smart-routing-address",

  // Embedded Wallet (formerly /wallets)
  "/wallets": "/smart-accounts/embedded-wallet",
  "/wallets/quickstart": "/smart-accounts/embedded-wallet/quickstart",
  "/wallets/export": "/smart-accounts/embedded-wallet/export",
  "/wallets/session-management":
    "/smart-accounts/embedded-wallet/session-management",
  "/wallets/auth/passkeys": "/smart-accounts/embedded-wallet/auth/passkeys",
  "/wallets/auth/email-otp": "/smart-accounts/embedded-wallet/auth/email-otp",
  "/wallets/auth/magic-link":
    "/smart-accounts/embedded-wallet/auth/magic-link",
  "/wallets/auth/google-oauth":
    "/smart-accounts/embedded-wallet/auth/google-oauth",
  "/wallets/wallet-api/send-transaction":
    "/smart-accounts/embedded-wallet/wallet-api/send-transaction",
  "/wallets/wallet-api/sign-message":
    "/smart-accounts/embedded-wallet/wallet-api/sign-message",
  "/wallets/wallet-api/sign-typed-message":
    "/smart-accounts/embedded-wallet/wallet-api/sign-typed-message",
  "/wallets/hooks/use-register-passkey":
    "/smart-accounts/embedded-wallet/hooks/use-register-passkey",
  "/wallets/hooks/use-login-passkey":
    "/smart-accounts/embedded-wallet/hooks/use-login-passkey",
  "/wallets/hooks/use-authenticate-oauth":
    "/smart-accounts/embedded-wallet/hooks/use-authenticate-oauth",
  "/wallets/hooks/use-send-otp":
    "/smart-accounts/embedded-wallet/hooks/use-send-otp",
  "/wallets/hooks/use-verify-otp":
    "/smart-accounts/embedded-wallet/hooks/use-verify-otp",
  "/wallets/hooks/use-send-magic-link":
    "/smart-accounts/embedded-wallet/hooks/use-send-magic-link",
  "/wallets/hooks/use-verify-magic-link":
    "/smart-accounts/embedded-wallet/hooks/use-verify-magic-link",
  "/wallets/hooks/use-get-user-email":
    "/smart-accounts/embedded-wallet/hooks/use-get-user-email",
  "/wallets/hooks/use-refresh-session":
    "/smart-accounts/embedded-wallet/hooks/use-refresh-session",
  "/wallets/hooks/use-export-wallet":
    "/smart-accounts/embedded-wallet/hooks/use-export-wallet",
  "/wallets/hooks/use-export-private-key":
    "/smart-accounts/embedded-wallet/hooks/use-export-private-key",

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
  "/react/use-send-transaction":
    "/advanced/react-hooks/use-send-transaction",
  "/react/use-send-transaction-with-session":
    "/advanced/react-hooks/use-send-transaction-with-session",
  "/react/use-send-useroperation":
    "/advanced/react-hooks/use-send-useroperation",
  "/react/use-send-useroperation-with-session":
    "/advanced/react-hooks/use-send-useroperation-with-session",
  "/react/use-sessions": "/advanced/react-hooks/use-sessions",
  "/react/use-session-kernelclient":
    "/advanced/react-hooks/use-session-kernelclient",
  "/react/use-set-kernelclient":
    "/advanced/react-hooks/use-set-kernelclient",
  "/react/use-switch-chain": "/advanced/react-hooks/use-switch-chain",
  "/react/use-wallet-connect": "/advanced/react-hooks/use-wallet-connect",

  // Orphan /smart-wallet/* (deleted) → canonical homes in the new tree
  "/smart-wallet/which-sdk": "/smart-accounts/create-a-smart-account",
  "/smart-wallet/quickstart-core": "/get-started/quickstart",
  "/smart-wallet/quickstart-react": "/get-started/quickstart",
  "/smart-wallet/quickstart-capabilities": "/get-started/quickstart",
  "/smart-wallet/creating-wallets": "/smart-accounts/create-a-smart-account",
  "/smart-wallet/setting-up-zerodev-projects": "/",
  "/smart-wallet/sending-transactions": "/smart-accounts/send-transactions",
  "/smart-wallet/batching-transactions": "/smart-accounts/batch-transactions",
  "/smart-wallet/pay-gas-in-erc20s": "/smart-accounts/pay-gas-with-erc20s",
  "/smart-wallet/sponsoring-gas": "/smart-accounts/sponsor-gas/evm",
  "/smart-wallet/delegatecall": "/advanced/delegatecall",
  "/smart-wallet/multisig": "/smart-accounts/use-plugins/multisig",
  "/smart-wallet/account-recovery":
    "/smart-accounts/account-recovery/sdk-recovery",
  "/smart-wallet/importing-assets": "/smart-accounts/create-a-smart-account",
  "/smart-wallet/defi-integrations": "/advanced/defi",
  "/smart-wallet/one-click-trading":
    "/smart-accounts/permissions/transaction-automation",
  "/smart-wallet/parallel-transactions": "/advanced/parallel-transactions",
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
  // Pillars (Get Started, Smart Accounts & Wallets, Cross-Chain Workflows,
  // Advanced, Resources) are rendered by the `inject-pillar-bar` Vite plugin
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
            text: "SDKs",
            collapsed: true,
            items: [
              { text: "Overview", link: "/get-started/sdks/overview" },
              {
                text: "Client-side",
                collapsed: true,
                items: [
                  {
                    text: "TypeScript / JavaScript",
                    link: "/get-started/sdks/client-side/typescript",
                  },
                  {
                    text: "React Hooks (waas, legacy)",
                    link: "/advanced/react-hooks/getting-started",
                  },
                  {
                    text: "Embedded Wallet (React)",
                    link: "/smart-accounts/embedded-wallet/quickstart",
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
                collapsed: true,
                items: [
                  {
                    text: "Node.js / TypeScript",
                    link: "/get-started/sdks/server-side/nodejs",
                  },
                  {
                    text: "Go (legacy)",
                    link: "/advanced/go-sdk",
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
          { text: "Docs for SDK v5.3.x", link: "/sdk/v5_3_x/" },
        ],
      },
    ],
    "/smart-accounts": [
      {
        text: "Smart Accounts & Wallets",
        collapsed: false,
        items: [
          {
            text: "Create a Smart Account",
            link: "/smart-accounts/create-a-smart-account",
          },
          {
            text: "Authentication",
            collapsed: true,
            items: [
              {
                text: "Social Login",
                link: "/smart-accounts/authentication/social-login",
              },
              {
                text: "EOA Wallets",
                link: "/smart-accounts/authentication/eoa",
              },
              {
                text: "Custom Signer",
                link: "/smart-accounts/authentication/custom-signer",
              },
              {
                text: "Dynamic",
                link: "/smart-accounts/authentication/dynamic",
              },
              {
                text: "Privy",
                link: "/smart-accounts/authentication/privy",
              },
              {
                text: "Magic",
                link: "/smart-accounts/authentication/magic",
              },
              {
                text: "Web3Auth",
                link: "/smart-accounts/authentication/web3auth",
              },
              {
                text: "Particle",
                link: "/smart-accounts/authentication/particle",
              },
              {
                text: "Arcana",
                link: "/smart-accounts/authentication/arcana",
              },
              {
                text: "Turnkey",
                link: "/smart-accounts/authentication/turnkey",
              },
              {
                text: "Fireblocks",
                link: "/smart-accounts/authentication/fireblocks",
              },
              {
                text: "Dfns",
                link: "/smart-accounts/authentication/dfns",
              },
              {
                text: "Lit Protocol",
                link: "/smart-accounts/authentication/lit-protocol",
              },
              {
                text: "Para",
                link: "/smart-accounts/authentication/capsule",
              },
              {
                text: "Portal",
                link: "/smart-accounts/authentication/portal",
              },
              {
                text: "Coinbase Smart Wallet",
                link: "/smart-accounts/authentication/smart-wallet",
              },
            ],
          },
          {
            text: "Use Plugins",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/smart-accounts/use-plugins/overview",
              },
              {
                text: "Signers Introduction",
                link: "/smart-accounts/use-plugins/signers-intro",
              },
              {
                text: "Passkeys",
                link: "/smart-accounts/use-plugins/passkeys/overview",
                collapsed: true,
                items: [
                  {
                    text: "Code Example: Tutorial",
                    link: "/smart-accounts/use-plugins/passkeys/tutorial",
                  },
                ],
              },
              {
                text: "Multisig",
                link: "/smart-accounts/use-plugins/multisig",
              },
            ],
          },
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
            collapsed: true,
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
            text: "Account Recovery",
            collapsed: true,
            items: [
              {
                text: "SDK Recovery",
                link: "/smart-accounts/account-recovery/sdk-recovery",
              },
              {
                text: "Flow Intro",
                link: "/smart-accounts/account-recovery/flow-intro",
              },
              {
                text: "Flow Setup",
                link: "/smart-accounts/account-recovery/flow-setup",
              },
              {
                text: "Portal",
                link: "/smart-accounts/account-recovery/portal",
              },
            ],
          },
          {
            text: "EIP-7702",
            collapsed: true,
            items: [
              {
                text: "Code Example: Quickstart",
                link: "/smart-accounts/eip-7702/quickstart",
              },
              {
                text: "Examples (external)",
                link: "https://7702.zerodev.app/",
              },
            ],
          },
          {
            text: "Embedded Wallet",
            collapsed: true,
            items: [
              {
                text: "Introduction",
                link: "/smart-accounts/embedded-wallet",
              },
              {
                text: "Quickstart",
                link: "/smart-accounts/embedded-wallet/quickstart",
              },
              {
                text: "Demo",
                link: "https://zerodev-signer-demo.vercel.app/",
              },
              {
                text: "Authentication",
                collapsed: true,
                items: [
                  {
                    text: "Passkeys",
                    link: "/smart-accounts/embedded-wallet/auth/passkeys",
                  },
                  {
                    text: "Email OTP",
                    link: "/smart-accounts/embedded-wallet/auth/email-otp",
                  },
                  {
                    text: "Magic Link",
                    link: "/smart-accounts/embedded-wallet/auth/magic-link",
                  },
                  {
                    text: "Google OAuth",
                    link: "/smart-accounts/embedded-wallet/auth/google-oauth",
                  },
                ],
              },
              {
                text: "Features",
                collapsed: true,
                items: [
                  {
                    text: "Session Management",
                    link: "/smart-accounts/embedded-wallet/session-management",
                  },
                  {
                    text: "Export Wallet",
                    link: "/smart-accounts/embedded-wallet/export",
                  },
                ],
              },
              {
                text: "Wallet API",
                collapsed: true,
                items: [
                  {
                    text: "Send a Transaction",
                    link: "/smart-accounts/embedded-wallet/wallet-api/send-transaction",
                  },
                  {
                    text: "Sign a Message",
                    link: "/smart-accounts/embedded-wallet/wallet-api/sign-message",
                  },
                  {
                    text: "Sign a Typed Message",
                    link: "/smart-accounts/embedded-wallet/wallet-api/sign-typed-message",
                  },
                ],
              },
              {
                text: "Hooks",
                collapsed: true,
                items: [
                  {
                    text: "useRegisterPasskey",
                    link: "/smart-accounts/embedded-wallet/hooks/use-register-passkey",
                  },
                  {
                    text: "useLoginPasskey",
                    link: "/smart-accounts/embedded-wallet/hooks/use-login-passkey",
                  },
                  {
                    text: "useAuthenticateOAuth",
                    link: "/smart-accounts/embedded-wallet/hooks/use-authenticate-oauth",
                  },
                  {
                    text: "useSendOTP",
                    link: "/smart-accounts/embedded-wallet/hooks/use-send-otp",
                  },
                  {
                    text: "useVerifyOTP",
                    link: "/smart-accounts/embedded-wallet/hooks/use-verify-otp",
                  },
                  {
                    text: "useSendMagicLink",
                    link: "/smart-accounts/embedded-wallet/hooks/use-send-magic-link",
                  },
                  {
                    text: "useVerifyMagicLink",
                    link: "/smart-accounts/embedded-wallet/hooks/use-verify-magic-link",
                  },
                  {
                    text: "useGetUserEmail",
                    link: "/smart-accounts/embedded-wallet/hooks/use-get-user-email",
                  },
                  {
                    text: "useRefreshSession",
                    link: "/smart-accounts/embedded-wallet/hooks/use-refresh-session",
                  },
                  {
                    text: "useExportWallet",
                    link: "/smart-accounts/embedded-wallet/hooks/use-export-wallet",
                  },
                  {
                    text: "useExportPrivateKey",
                    link: "/smart-accounts/embedded-wallet/hooks/use-export-private-key",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    "/cross-chain": [
      {
        text: "Cross-Chain Workflows",
        collapsed: false,
        items: [
          {
            text: "Smart Routing Address",
            link: "/cross-chain/smart-routing-address",
          },
          {
            text: "Chain Abstraction",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/cross-chain/chain-abstraction/overview",
              },
              {
                text: "Supported Base Tokens",
                link: "/cross-chain/chain-abstraction/supported-base-tokens",
              },
              {
                text: "Supported DeFi Tokens",
                link: "/cross-chain/chain-abstraction/supported-defi-tokens",
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
            text: "Multi-chain Signing",
            link: "/advanced/multi-chain-signing",
          },
          {
            text: "Parallel Transactions (2D Nonces)",
            link: "/advanced/parallel-transactions",
          },
          {
            text: "Fallback Providers",
            link: "/advanced/fallback-providers",
          },
          { text: "Key Storage", link: "/advanced/key-storage" },
          { text: "DeFi Integrations", link: "/advanced/defi" },
          {
            text: "Connect Wallet with Other DApps",
            link: "/advanced/wallet-connect",
          },
          { text: "Deploy Contracts", link: "/advanced/deploy-contract" },
          { text: "Delegatecall", link: "/advanced/delegatecall" },
          {
            text: "Track deployed smart accounts",
            link: "/advanced/track-deployed-accounts",
          },
          { text: "Upgrading Kernel", link: "/advanced/upgrade-kernel" },
          {
            text: "UserOp Builder API",
            link: "/advanced/userop-builder-api",
          },
          { text: "Go SDK (legacy)", link: "/advanced/go-sdk" },
          {
            text: "React Hooks (@zerodev/waas, legacy)",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/advanced/react-hooks/getting-started",
              },
              {
                text: "Code Examples",
                link: "https://github.com/zerodevapp/waas-examples",
              },
              { text: "useBalance", link: "/advanced/react-hooks/use-balance" },
              { text: "useChainId", link: "/advanced/react-hooks/use-chainid" },
              { text: "useChains", link: "/advanced/react-hooks/use-chains" },
              {
                text: "useCreateBasicSession",
                link: "/advanced/react-hooks/use-create-basic-session",
              },
              {
                text: "useCreateSession",
                link: "/advanced/react-hooks/use-create-session",
              },
              {
                text: "useCreateKernelClientEOA",
                link: "/advanced/react-hooks/use-create-kernelclient-eoa",
              },
              {
                text: "useCreateKernelClientPasskey",
                link: "/advanced/react-hooks/use-create-kernelclient-passkey",
              },
              {
                text: "useCreateKernelClientSocial",
                link: "/advanced/react-hooks/use-create-kernelclient-social",
              },
              {
                text: "useDisconnectKernelClient",
                link: "/advanced/react-hooks/use-disconnect-kernelclient",
              },
              {
                text: "useKernelClient",
                link: "/advanced/react-hooks/use-kernelclient",
              },
              {
                text: "useSendTransaction",
                link: "/advanced/react-hooks/use-send-transaction",
              },
              {
                text: "useSendTransactionWithSession",
                link: "/advanced/react-hooks/use-send-transaction-with-session",
              },
              {
                text: "useSendUserOperation",
                link: "/advanced/react-hooks/use-send-useroperation",
              },
              {
                text: "useSendUserOperationWithSession",
                link: "/advanced/react-hooks/use-send-useroperation-with-session",
              },
              { text: "useSessions", link: "/advanced/react-hooks/use-sessions" },
              {
                text: "useSessionKernelClient",
                link: "/advanced/react-hooks/use-session-kernelclient",
              },
              {
                text: "useSetKernelClient",
                link: "/advanced/react-hooks/use-set-kernelclient",
              },
              {
                text: "useSwitchChain",
                link: "/advanced/react-hooks/use-switch-chain",
              },
              {
                text: "useWalletConnect",
                link: "/advanced/react-hooks/use-wallet-connect",
              },
            ],
          },
        ],
      },
    ],
    "/resources": [
      {
        text: "Resources",
        collapsed: false,
        items: [
          {
            text: "Infrastructure",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/resources/infrastructure/intro" },
              {
                text: "Choose an Infra Provider",
                link: "/resources/infrastructure/choose-an-infra-provider",
              },
              {
                text: "ZeroDev infra",
                link: "/resources/infrastructure/zerodev",
              },
              {
                text: "Pimlico",
                link: "/resources/infrastructure/pimlico",
              },
              {
                text: "Coinbase",
                link: "/resources/infrastructure/coinbase",
              },
              {
                text: "Gas Policies",
                link: "/resources/infrastructure/gas-policies",
              },
              {
                text: "Custom Gas Policies",
                link: "/resources/infrastructure/custom-gas-policies",
              },
              {
                text: "Bundler & Paymaster RPCs",
                link: "/resources/infrastructure/rpcs",
              },
              {
                text: "Admin API",
                link: "/resources/infrastructure/api",
              },
            ],
          },
          {
            text: "Tools",
            collapsed: true,
            items: [
              { text: "UserOp Debugger", link: "/resources/tools/debugger" },
              {
                text: "Status & Uptime API",
                link: "/resources/tools/status",
              },
            ],
          },
          {
            text: "Presets",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/resources/presets/intro" },
              { text: "ZeroDev preset", link: "/resources/presets/zerodev" },
            ],
          },
          {
            text: "FAQs",
            collapsed: true,
            items: [
              {
                text: "Supported networks",
                link: "/resources/faqs/chains",
              },
              {
                text: "Audits",
                link: "/resources/faqs/audits",
              },
              {
                text: "Use with ethers.js",
                link: "/resources/faqs/use-with-ethers",
              },
              {
                text: "Use with React Native",
                link: "/resources/faqs/use-with-react-native",
              },
              {
                text: "Use with Gelato",
                link: "/resources/faqs/use-with-gelato",
              },
              {
                text: "Debug a UserOp",
                link: "/resources/faqs/debug-userop",
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
          { text: "ZeroDev", link: "/resources/infrastructure/intro" },
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
          { text: "What networks do you support?", link: "/sdk/v5_3_x/faqs/chains" },
          { text: "How to debug a UserOp?", link: "/sdk/v5_3_x/faqs/debug-userop" },
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
    { href: '/', text: 'Get Started', match: function(p) { return p === '/' || p.indexOf('/get-started') === 0; } },
    { href: '/smart-accounts/create-a-smart-account', text: 'Smart Accounts & Wallets', match: function(p) { return p.indexOf('/smart-accounts') === 0; } },
    { href: '/cross-chain/smart-routing-address', text: 'Cross-Chain Workflows', match: function(p) { return p.indexOf('/cross-chain') === 0; } },
    { href: '/advanced/migration', text: 'Advanced', match: function(p) { return p.indexOf('/advanced') === 0; } },
    { href: '/resources/infrastructure/intro', text: 'Resources', match: function(p) { return p.indexOf('/resources') === 0; } }
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
