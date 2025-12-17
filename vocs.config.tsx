import { defineConfig } from "vocs";
import dotenv from "dotenv";

dotenv.config();

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
  topNav: [
    { text: "SDK", link: "/", match: "/sdk" },
    {
      text: "Smart Routing",
      link: "/smart-routing-address",
      match: "/smart-routing-address",
    },
    { text: "API", link: "https://zerodev-api.readme.io" },
    {
      link: "https://dashboard.zerodev.app/",
      text: "Dashboard",
    },
    {
      link: "https://calendly.com/zerodev/30min",
      text: "Contact Us",
    },
    { text: "Blog", link: "/blog", match: "/blog" },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/zerodevapp",
    },
    {
      icon: "discord",
      link: "https://discord.gg/KS9MRaTSjx",
    },
    {
      icon: "x",
      link: "https://twitter.com/zerodev_app",
    },
  ],
  sidebar: {
    "/": [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/",
          },
          {
            text: "Quickstart",
            link: "/sdk/getting-started/quickstart",
          },
          {
            text: "Tutorial",
            link: "/sdk/getting-started/tutorial",
          },
          {
            text: "Tutorial — Passkeys",
            link: "/sdk/getting-started/tutorial-passkeys",
          },
          {
            text: "Code Examples",
            link: "https://github.com/zerodevapp/zerodev-examples",
          },
          {
            text: "Migration Guide",
            link: "/sdk/getting-started/migration",
          },
          {
            text: "Docs for SDK v5.3.x",
            link: "/sdk/v5_3_x/",
          },
        ],
      },
      {
        text: "EIP-7702",
        collapsed: false,
        items: [
          {
            text: "Quickstart",
            link: "/sdk/getting-started/quickstart-7702",
          },
          {
            text: "Examples",
            link: "https://7702.zerodev.app/",
          },
        ],
      },
      {
        text: "Core API",
        collapsed: false,
        items: [
          {
            text: "Create a Smart Account",
            link: "/sdk/core-api/create-account",
          },
          {
            text: "Using Plugins",
            link: "/sdk/core-api/using-plugins",
          },
          {
            text: "Send Transactions",
            link: "/sdk/core-api/send-transactions",
          },
          {
            text: "Sponsor Gas",
            link: "/sdk/core-api/sponsor-gas",
          },
          {
            text: "Pay Gas with ERC20s",
            link: "/sdk/core-api/pay-gas-with-erc20s",
          },
          {
            text: "Batch Transactions",
            link: "/sdk/core-api/batch-transactions",
          },
          {
            text: "Deploy Contracts",
            link: "/sdk/core-api/deploy-contract",
          },
          {
            text: "Delegatecall",
            link: "/sdk/core-api/delegatecall",
          },
          {
            text: "Sign and Verify Messages",
            link: "/sdk/core-api/sign-and-verify",
          },
        ],
      },
      {
        text: "Advanced",
        collapsed: false,
        items: [
          {
            text: "Chain Abstraction",
            link: "/sdk/advanced/chain-abstraction",
          },
          {
            text: "Passkeys",
            link: "/sdk/advanced/passkeys",
          },
          {
            text: "Social Login",
            link: "/sdk/advanced/social-login",
          },
          {
            text: "Session Keys",
            link: "/sdk/advanced/session-keys",
          },
          {
            text: "Multisig",
            link: "/sdk/advanced/multisig",
          },
          {
            text: "Recovery",
            link: "/sdk/advanced/recovery",
          },
          {
            text: "Multi-chain Signing",
            link: "/sdk/advanced/multi-chain-signing",
          },
          {
            text: "Key Storage",
            link: "/sdk/advanced/key-storage",
          },
          {
            text: "DeFi Integrations",
            link: "/sdk/advanced/defi",
          },
          {
            text: "Parallel Transactions (2D Nonces)",
            link: "/sdk/advanced/parallel-orders",
          },
          {
            text: "Connect Wallet with Other DApps",
            link: "/sdk/advanced/wallet-connect",
          },
          {
            text: "Fallback Providers",
            link: "/sdk/advanced/fallback-providers",
          },
          {
            text: "Track deployed smart accounts",
            link: "/sdk/advanced/run-solidity-code-on-init",
          },
          {
            text: "Upgrading Kernel",
            link: "/sdk/advanced/upgrade-kernel",
          },
          {
            text: "Go SDK",
            link: "/sdk/advanced/go-sdk",
          },
          {
            text: "UserOp Builder API",
            link: "/sdk/advanced/userop-builder-api",
          },
        ],
      },
      {
        text: "Permissions (Session Keys)",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/sdk/permissions/intro",
          },
          // {
          //   "text": "Tutorial: 1-Click Trading",
          //   "link": "/sdk/permissions/1-click-trading"
          // },
          {
            text: "Tutorial: Transaction Automation",
            link: "/sdk/permissions/transaction-automation",
          },
          {
            text: "Install Permissions with initConfig",
            link: "/sdk/permissions/install-with-init-config",
          },
          {
            text: "Signers",
            collapsed: false,
            items: [
              {
                text: "ECDSA",
                link: "/sdk/permissions/signers/ecdsa",
              },
              {
                text: "Passkeys",
                link: "/sdk/permissions/signers/passkeys",
              },
              {
                text: "Multisig",
                link: "/sdk/permissions/signers/multisig",
              },
              {
                text: "Build your own signer",
                link: "/sdk/permissions/signers/build-your-own",
              },
            ],
          },
          {
            text: "Policies",
            collapsed: false,
            items: [
              {
                text: "Sudo policy",
                link: "/sdk/permissions/policies/sudo",
              },
              {
                text: "Call policy",
                link: "/sdk/permissions/policies/call",
              },
              {
                text: "Gas policy",
                link: "/sdk/permissions/policies/gas",
              },
              {
                text: "Signature policy",
                link: "/sdk/permissions/policies/signature",
              },
              {
                text: "Rate Limit policy",
                link: "/sdk/permissions/policies/rate-limit",
              },
              {
                text: "Timestamp policy",
                link: "/sdk/permissions/policies/timestamp",
              },
              {
                text: "Build your own policy",
                link: "/sdk/permissions/policies/build-your-own",
              },
            ],
          },
          {
            text: "Actions",
            collapsed: true,
            items: [
              {
                text: "Build your own action",
                link: "/sdk/permissions/actions/build-your-own",
              },
            ],
          },
        ],
      },
      {
        text: "Auth Providers",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/sdk/signers/intro",
          },
          {
            link: "/sdk/signers/dynamic",
            text: "Dynamic",
          },
          {
            link: "/sdk/signers/privy",
            text: "Privy",
          },
          {
            link: "/sdk/signers/magic",
            text: "Magic",
          },
          {
            link: "/sdk/signers/web3auth",
            text: "Web3Auth",
          },
          {
            link: "/sdk/signers/smart-wallet",
            text: "Smart Wallet",
          },
          {
            link: "/sdk/signers/portal",
            text: "Portal",
          },
          {
            link: "/sdk/signers/turnkey",
            text: "Turnkey",
          },
          {
            link: "/sdk/signers/fireblocks",
            text: "Fireblocks",
          },
          {
            link: "/sdk/signers/capsule",
            text: "Capsule",
          },
          {
            link: "/sdk/signers/lit-protocol",
            text: "Lit Protocol",
          },
          {
            link: "/sdk/signers/particle",
            text: "Particle Network",
          },
          {
            link: "/sdk/signers/dfns",
            text: "Dfns",
          },
          {
            link: "/sdk/signers/arcana",
            text: "Arcana Auth",
          },
          {
            link: "/sdk/signers/eoa",
            text: "EOA Wallets (e.g. MetaMask)",
          },
          {
            link: "/sdk/signers/custom-signer",
            text: "Custom Signer Integration",
          },
        ],
      },
      {
        text: "Infra",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/sdk/infra/intro",
          },
          {
            text: "ZeroDev",
            link: "/meta-infra/intro",
          },
          {
            text: "Pimlico",
            link: "/sdk/infra/pimlico",
          },
          {
            text: "Coinbase",
            link: "/sdk/infra/coinbase",
          },
        ],
      },
      {
        text: "FAQs",
        collapsed: false,
        items: [
          {
            text: "What networks do you support?",
            link: "/sdk/faqs/chains",
          },
          {
            text: "How to debug a UserOp?",
            link: "/sdk/faqs/debug-userop",
          },
          {
            text: "Can I use a KernelClient with ethers.js?",
            link: "/sdk/faqs/use-with-ethers",
          },
          {
            text: "Can you use ZeroDev with React Native?",
            link: "/sdk/faqs/use-with-react-native",
          },
          {
            text: "Is ZeroDev Audited?",
            link: "/sdk/faqs/audits",
          },
          {
            text: "How to use ZeroDev with Gelato",
            link: "/sdk/faqs/use-with-gelato",
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
          // {
          //   "text": "Tutorial: 1-Click Trading",
          //   "link": "/sdk/v5_3_x/permissions/1-click-trading"
          // },
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
          {
            text: "Introduction",
            link: "/sdk/v5_3_x/signers/intro",
          },
          {
            link: "/sdk/v5_3_x/signers/dynamic",
            text: "Dynamic",
          },
          {
            link: "/sdk/v5_3_x/signers/privy",
            text: "Privy",
          },
          {
            link: "/sdk/v5_3_x/signers/magic",
            text: "Magic",
          },
          {
            link: "/sdk/v5_3_x/signers/web3auth",
            text: "Web3Auth",
          },
          {
            link: "/sdk/v5_3_x/signers/portal",
            text: "Portal",
          },
          {
            link: "/sdk/v5_3_x/signers/turnkey",
            text: "Turnkey",
          },
          {
            link: "/sdk/v5_3_x/signers/fireblocks",
            text: "Fireblocks",
          },
          {
            link: "/sdk/v5_3_x/signers/capsule",
            text: "Capsule",
          },
          {
            link: "/sdk/v5_3_x/signers/lit-protocol",
            text: "Lit Protocol",
          },
          {
            link: "/sdk/v5_3_x/signers/particle",
            text: "Particle Network",
          },
          {
            link: "/sdk/v5_3_x/signers/dfns",
            text: "Dfns",
          },
          {
            link: "/sdk/v5_3_x/signers/arcana",
            text: "Arcana Auth",
          },
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
          {
            text: "Introduction",
            link: "/sdk/v5_3_x/infra/intro",
          },
          {
            text: "ZeroDev",
            link: "/meta-infra/intro",
          },
          {
            text: "Pimlico",
            link: "/sdk/v5_3_x/infra/pimlico",
          },
          {
            text: "Coinbase",
            link: "/sdk/v5_3_x/infra/coinbase",
          },
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
          {
            text: "Is ZeroDev Audited?",
            link: "/sdk/v5_3_x/faqs/audits",
          },
          {
            text: "How to use ZeroDev with Gelato",
            link: "/sdk/v5_3_x/faqs/use-with-gelato",
          },
        ],
      },
    ],
    "/meta-infra": [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/meta-infra/intro",
          },
          {
            text: "Gas Policies",
            link: "/meta-infra/gas-policies",
          },
          {
            text: "Custom Gas Policies",
            link: "/meta-infra/custom-gas-policies",
          },
          {
            text: "Bundler & Paymaster RPCs",
            link: "/meta-infra/rpcs",
          },
          {
            text: "Admin API",
            link: "/meta-infra/api",
          },
        ],
      },
    ],
    "/react": [
      {
        text: "Getting Started",
        link: "/react/getting-started",
      },
      {
        text: "Code Examples",
        link: "https://github.com/zerodevapp/waas-examples",
      },
      {
        text: "Hooks",
        collapsed: false,
        items: [
          {
            text: "useBalance",
            link: "/react/use-balance",
          },
          {
            text: "useChainId",
            link: "/react/use-chainid",
          },
          {
            text: "useChains",
            link: "/react/use-chains",
          },
          {
            text: "useCreateBasicSession",
            link: "/react/use-create-basic-session",
          },
          {
            text: "useCreateSession",
            link: "/react/use-create-session",
          },
          {
            text: "useCreateKernelClientEOA",
            link: "/react/use-create-kernelclient-eoa",
          },
          {
            text: "useCreateKernelClientPasskey",
            link: "/react/use-create-kernelclient-passkey",
          },
          {
            text: "useCreateKernelClientSocial",
            link: "/react/use-create-kernelclient-social",
          },
          {
            text: "useDisconnectKernelClient",
            link: "/react/use-disconnect-kernelclient",
          },
          {
            text: "useKernelClient",
            link: "/react/use-kernelclient",
          },
          {
            text: "useSendTransaction",
            link: "/react/use-send-transaction",
          },
          {
            text: "useSendTransactionWithSession",
            link: "/react/use-send-transaction-with-session",
          },
          {
            text: "useSendUserOperation",
            link: "/react/use-send-useroperation",
          },
          {
            text: "useSendUserOperationWithSession",
            link: "/react/use-send-useroperation-with-session",
          },
          {
            text: "useSessions",
            link: "/react/use-sessions",
          },
          {
            text: "useSessionKernelClient",
            link: "/react/use-session-kernelclient",
          },
          {
            text: "useSetKernelClient",
            link: "/react/use-set-kernelclient",
          },
          {
            text: "useSwitchChain",
            link: "/react/use-switch-chain",
          },
          {
            text: "useWalletConnect",
            link: "/react/use-wallet-connect",
          },
        ],
      },
    ],
  },
  vite: {
    plugins: [
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
