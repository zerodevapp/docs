import { defineConfig } from "vocs";
import dotenv from "dotenv";
import { redirects } from "./redirects.config.js";

dotenv.config();

// Lookup table for the dev-server redirect middleware below. The redirect list
// lives in redirects.config.js (single source of truth); in production the same
// list is applied by server.mjs (the Render web service).
const REDIRECT_MAP: Record<string, string> = Object.fromEntries(
  redirects.map((r) => [r.from, r.to]),
);

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
    // Embedded Wallet.
    "/wallets": [
      {
        text: "Embedded Wallet",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/wallets",
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
            text: "React Native",
            collapsed: true,
            items: [
              {
                text: "Expo Quickstart",
                link: "/wallets/react-native/quickstart",
              },
              {
                text: "Configuration",
                link: "/wallets/react-native/configuration",
              },
              {
                text: "Google OAuth",
                link: "/wallets/react-native/google-oauth",
              },
              {
                text: "Domain Association",
                link: "/wallets/react-native/domain-association",
              },
              {
                text: "Magic Link",
                link: "/wallets/react-native/magic-link",
              },
              {
                text: "Passkeys",
                link: "/wallets/react-native/passkeys",
              },
              {
                text: "Export Wallet",
                link: "/wallets/react-native/export-wallet",
              },
              {
                text: "React Native Web",
                link: "/wallets/react-native/web",
              },
            ],
          },
          {
            text: "Authentication",
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
              {
                text: "Session Management",
                link: "/wallets/session-management",
              },
            ],
          },
          {
            text: "Wallet API",
            collapsed: true,
            items: [
              {
                text: "Send a Transaction",
                link: "/wallets/wallet-api/send-transaction",
              },
              {
                text: "Batch Transactions",
                link: "/wallets/wallet-api/batch-transactions",
              },
              {
                text: "Sign a Message",
                link: "/wallets/wallet-api/sign-message",
              },
              {
                text: "Sign a Typed Message",
                link: "/wallets/wallet-api/sign-typed-message",
              },
              {
                text: "useAuthenticators",
                link: "/wallets/hooks/use-authenticators",
              },
              {
                text: "useAuthenticateOAuthWithExpoWebBrowser",
                link: "/wallets/hooks/use-authenticate-oauth-with-expo-web-browser",
              },
              {
                text: "ZeroDevExportWebView",
                link: "/wallets/hooks/export-web-view",
              },
            ],
          },
          {
            text: "Wallet UI Kit",
            link: "/wallets/auth/wallet-ui-kit",
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
            const target = REDIRECT_MAP[url.pathname];
            if (target) {
              res.statusCode = 307;
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

  /* Pillar bar: horizontal nav directly below the top header. Inserted in-flow
     right after Vocs's gutterTop; pinned fixed on desktop (below), in-flow on
     mobile (see media query). */
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
    /* Start the bar AFTER the sidebar gutter instead of spanning full width.
       Vocs's leftGutterWidth var is scoped to .vocs_DocsLayout (not visible on
       body), so recompute the same max() here. Anchoring left to it keeps the
       bar from overlapping the fixed sidebar (gutterLeft, z-index 14) — the
       pillar bar's z-index 50 would otherwise paint over the sidebar's top. */
    left: max(
      calc((100vw - var(--vocs-content_width)) / 2),
      var(--vocs-sidebar_width)
    );
    padding-left: 0;
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

  /* On narrow viewports Vocs makes the top nav position:initial (in normal flow)
     and shows a sticky section curtain below it. The bar is inserted in-flow
     right after the top nav, so drop the fixed positioning and let it stack
     naturally — a fixed bar would float over and hide that curtain. No sidebar
     gutter here either, so span full width. */
  @media (max-width: 1080px) {
    .zd-pillar-bar {
      position: static;
      padding-left: 8px;
      /* Match the mobile top nav / curtain background (both use backgroundDark). */
      background: var(--vocs-color_backgroundDark);
    }
    /* Top nav is in-flow on mobile, so content needs no extra top padding;
       the in-flow bar already occupies its own space. */
    .vocs_DocsLayout_content { padding-top: 0 !important; }
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
    { href: '/wallets', text: 'Wallets', match: function(p) { return p.indexOf('/wallets') === 0; } },
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
    // Insert as a sibling right after Vocs's top-nav container so the bar lives
    // in normal document flow. On desktop (>=1081px) the CSS pins it with
    // position:fixed (DOM position irrelevant). On mobile (<=1080px) Vocs makes
    // the top nav position:initial (in-flow) and shows a sticky section curtain;
    // an in-flow bar here sits correctly below the nav instead of a fixed bar
    // floating over and hiding that curtain.
    var gutterTop = document.querySelector('.vocs_DocsLayout_gutterTop');
    if (!gutterTop || !gutterTop.parentNode) return;
    var bar = build();
    gutterTop.parentNode.insertBefore(bar, gutterTop.nextSibling);
    updateActive();
  }

  // Re-insert whenever React's layout lacks the bar. mount() is a no-op when the
  // bar already exists, so our own insertion can't loop the observer.
  function watch() {
    var observer = new MutationObserver(function() {
      mount();
      updateActive();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Mount only AFTER React has hydrated. Inserting our node into Vocs's
  // server-rendered subtree before hydration makes the real DOM diverge from the
  // server HTML, so React reports a hydration mismatch and regenerates the whole
  // tree — wiping the bar (the visible flicker). Waiting for 'load' + two rAFs
  // lets hydration finish first; the observer then keeps it mounted across
  // React's own re-renders and SPA navigations.
  function start() {
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        mount();
        updateActive();
        watch();
      });
    });
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

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start);
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

  // Run only AFTER React hydrates. Marking anchors earlier writes
  // data-zd-external-checked / target / rel onto the server-rendered HTML, so
  // React sees attributes the server didn't emit and reports a hydration
  // mismatch. 'load' + two rAFs lets hydration finish; the MutationObserver
  // then handles every anchor React renders afterward.
  function deferredStart() {
    requestAnimationFrame(function() {
      requestAnimationFrame(start);
    });
  }

  if (document.readyState === 'complete') {
    deferredStart();
  } else {
    window.addEventListener('load', deferredStart);
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
