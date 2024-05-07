import * as React from 'react'
import { defineConfig } from 'vocs'

export default defineConfig({
  logoUrl: {
    dark: '/logo-white.svg',
    light: '/logo-black.svg'
  },
  ogImageUrl: {
    '/': 'https://vocs-og-rouge.vercel.app/api/og?title=%title&description=%description',
  },
  editLink: {
    pattern: 'https://github.com/zerodevapp/docs/edit/main/docs/pages/:path',
    text: 'Edit on GitHub',
  },
  titleTemplate: '%s – ZeroDev',
  description: "Build amazing Web3 UX with ZeroDev's smart account platform.",
  head: (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ZeroDev -- Simple & Powerful Account Abstraction" />
      <meta property="og:url" content="https://zerodev.app" />
      <meta property="og:description" content="Build a Web3 experience that feels like Web2, using account abstraction through ZeroDev.  Say goodbye to gas, seed phrases, transaction prompts, and more." />
    </>
  ),
  topNav: [
    { text: 'Smart Wallet', link: '/', match: '/smart-wallet' },
    { text: 'SDK', link: '/sdk/intro', match: '/sdk' },
    { text: 'React', link: '/react/getting-started', match: '/react' },
    // { text: 'Kernel', link: '/', match: '/kernel' },
    { text: 'Infra', link: '/meta-infra/intro', match: '/meta-infra' },
    {
      link: 'https://dashboard.zerodev.app/',
      text: 'Dashboard',
    },
    { text: 'Blog', link: '/blog', match: '/blog' },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/zerodevapp',
    },
    {
      icon: "discord",
      link: "https://discord.gg/KS9MRaTSjx"
    },
    {
      icon: 'x',
      link: 'https://twitter.com/zerodev_app',
    }
  ],
  sidebar: {
    "/": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/"
          },
          {
            "text": "Quickstart: React",
            "link": "/smart-wallet/quickstart-react"
          },
          {
            "text": "Quickstart: Core SDK",
            "link": "/smart-wallet/quickstart-core"
          },
          {
            "text": "Setting up ZeroDev Projects",
            "link": "/smart-wallet/setting-up-zerodev-projects"
          },
        ],
      },
      {
        "text": "Onboarding",
        "collapsed": false,
        "items": [
          {
            "text": "Creating Wallets",
            "link": "/smart-wallet/creating-wallets"
          },
          {
            "text": "Importing Assets",
            "link": "/smart-wallet/importing-assets"
          },
        ],
      },
      {
        "text": "Gas",
        "collapsed": false,
        "items": [
          {
            "text": "Sponsoring Gas",
            "link": "/smart-wallet/sponsoring-gas"
          },
          {
            "text": "Paying Gas in ERC20s",
            "link": "/smart-wallet/pay-gas-in-erc20s"
          },
        ],
      },
      {
        "text": "Transacting",
        "collapsed": false,
        "items": [
          {
            "text": "Sending Transactions",
            "link": "/smart-wallet/sending-transactions"
          },
          {
            "text": "Batching Transactions",
            "link": "/smart-wallet/batching-transactions"
          },
          {
            "text": "One-click Trading",
            "link": "/smart-wallet/one-click-trading"
          },
          {
            "text": "Transaction Automation",
            "link": "/smart-wallet/transaction-automation"
          },
          {
            "text": "Delegatecall",
            "link": "/smart-wallet/delegatecall"
          },
          {
            "text": "Parallel Transactions",
            "link": "/smart-wallet/parallel-transactions"
          },
          {
            "text": "DeFi Integrations",
            "link": "/smart-wallet/defi-integrations"
          },
          {
            "text": "Using the Wallet on Other Apps",
            "link": "/smart-wallet/wallet-connect"
          },
        ],
      },
      {
        "text": "Security",
        "collapsed": false,
        "items": [
          {
            "text": "Account Recovery",
            "link": "/smart-wallet/account-recovery"
          },
          {
            "text": "Multisig",
            "link": "/smart-wallet/multisig"
          },
        ],
      },
      {
        "text": "Reliability",
        "collapsed": false,
        "items": [
          {
            "text": "Infra Fallbacks",
            "link": "/smart-wallet/infra-fallbacks"
          },
        ],
      },
      {
        "text": "Permissions (Session Keys)",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/smart-wallet/permissions/intro"
          },
          // {
          //   "text": "Tutorial: 1-Click Trading",
          //   "link": "/sdk/permissions/1-click-trading"
          // },
          {
            "text": "Tutorial: Transaction Automation",
            "link": "/smart-wallet/permissions/transaction-automation"
          },
          {
            "text": "Signers",
            "collapsed": false,
            "items": [
              {
                "text": "ECDSA",
                "link": "/smart-wallet/permissions/signers/ecdsa"
              },
              {
                "text": "Passkeys",
                "link": "/smart-wallet/permissions/signers/passkeys"
              },
              {
                "text": "Multisig",
                "link": "/smart-wallet/permissions/signers/multisig"
              },
              {
                "text": "Build your own signer",
                "link": "/smart-wallet/permissions/signers/build-your-own"
              },
            ],
          },
          {
            "text": "Policies",
            "collapsed": false,
            "items": [
              {
                "text": "Sudo policy",
                "link": "/smart-wallet/permissions/policies/sudo"
              },
              {
                "text": "Call policy",
                "link": "/smart-wallet/permissions/policies/call"
              },
              {
                "text": "Gas policy",
                "link": "/smart-wallet/permissions/policies/gas"
              },
              {
                "text": "Signature policy",
                "link": "/smart-wallet/permissions/policies/signature"
              },
              {
                "text": "Rate Limit policy",
                "link": "/smart-wallet/permissions/policies/rate-limit"
              },
              {
                "text": "Timestamp policy",
                "link": "/smart-wallet/permissions/policies/timestamp"
              },
              {
                "text": "Build your own policy",
                "link": "/smart-wallet/permissions/policies/build-your-own"
              },
            ],
          },
          {
            "text": "Actions",
            "collapsed": true,
            "items": [
              {
                "text": "Build your own action",
                "link": "/smart-wallet/permissions/actions/build-your-own"
              },
            ],
          },
        ],
      },
    ],
    "/sdk": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/"
          },
          {
            "text": "Quickstart",
            "link": "/sdk/getting-started/quickstart"
          },
          {
            "text": "Tutorial",
            "link": "/sdk/getting-started/tutorial"
          },
          {
            "text": "Tutorial — Passkeys",
            "link": "/sdk/getting-started/tutorial-passkeys"
          },
          {
            "text": "Code Examples",
            "link": "https://github.com/zerodevapp/zerodev-examples"
          },
          {
            "text": "Migration from 5.1.x",
            "link": "/sdk/getting-started/migration"
          },
        ],
      },
      {
        "text": "Core API",
        "collapsed": false,
        "items": [
          {
            "text": "Create a Smart Account",
            "link": "/sdk/core-api/create-account"
          },
          {
            "text": "Using Plugins",
            "link": "/sdk/core-api/using-plugins"
          },
          {
            "text": "Send Transactions",
            "link": "/sdk/core-api/send-transactions"
          },
          {
            "text": "Sponsor Gas",
            "link": "/sdk/core-api/sponsor-gas"
          },
          {
            "text": "Pay Gas with ERC20s",
            "link": "/sdk/core-api/pay-gas-with-erc20s"
          },
          {
            "text": "Batch Transactions",
            "link": "/sdk/core-api/batch-transactions"
          },
          {
            "text": "Deploy Contracts",
            "link": "/sdk/core-api/deploy-contract"
          },
          {
            "text": "Delegatecall",
            "link": "/sdk/core-api/delegatecall"
          },
          {
            "text": "Sign and Verify Messages",
            "link": "/sdk/core-api/sign-and-verify"
          },
        ],
      },
      {
        "text": "Advanced",
        "collapsed": false,
        "items": [
          {
            "text": "Passkeys",
            "link": "/sdk/advanced/passkeys"
          },
          {
            "text": "Session Keys",
            "link": "/sdk/advanced/session-keys"
          },
          {
            "text": "Multisig",
            "link": "/sdk/advanced/multisig"
          },
          {
            "text": "Recovery",
            "link": "/sdk/advanced/recovery"
          },
          {
            "text": "Key Storage",
            "link": "/sdk/advanced/key-storage"
          },
          {
            "text": "DeFi Integrations",
            "link": "/sdk/advanced/defi"
          },
          {
            "text": "Parallel Transactions (2D Nonces)",
            "link": "/sdk/advanced/parallel-orders"
          },
          {
            "text": "Connect Wallet with Other DApps",
            "link": "/react/use-wallet-connect"
          },
          {
            "text": "Fallback Providers",
            "link": "/sdk/advanced/fallback-providers"
          },
        ],
      },
      {
        "text": "Permissions (Session Keys)",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/permissions/intro"
          },
          // {
          //   "text": "Tutorial: 1-Click Trading",
          //   "link": "/sdk/permissions/1-click-trading"
          // },
          {
            "text": "Tutorial: Transaction Automation",
            "link": "/sdk/permissions/transaction-automation"
          },
          {
            "text": "Signers",
            "collapsed": false,
            "items": [
              {
                "text": "ECDSA",
                "link": "/sdk/permissions/signers/ecdsa"
              },
              {
                "text": "Passkeys",
                "link": "/sdk/permissions/signers/passkeys"
              },
              {
                "text": "Multisig",
                "link": "/sdk/permissions/signers/multisig"
              },
              {
                "text": "Build your own signer",
                "link": "/sdk/permissions/signers/build-your-own"
              },
            ],
          },
          {
            "text": "Policies",
            "collapsed": false,
            "items": [
              {
                "text": "Sudo policy",
                "link": "/sdk/permissions/policies/sudo"
              },
              {
                "text": "Call policy",
                "link": "/sdk/permissions/policies/call"
              },
              {
                "text": "Gas policy",
                "link": "/sdk/permissions/policies/gas"
              },
              {
                "text": "Signature policy",
                "link": "/sdk/permissions/policies/signature"
              },
              {
                "text": "Rate Limit policy",
                "link": "/sdk/permissions/policies/rate-limit"
              },
              {
                "text": "Timestamp policy",
                "link": "/sdk/permissions/policies/timestamp"
              },
              {
                "text": "Build your own policy",
                "link": "/sdk/permissions/policies/build-your-own"
              },
            ],
          },
          {
            "text": "Actions",
            "collapsed": true,
            "items": [
              {
                "text": "Build your own action",
                "link": "/sdk/permissions/actions/build-your-own"
              },
            ],
          },
        ],
      },
      {
        "text": "Auth Providers",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/signers/intro"
          },
          {
            link: '/sdk/signers/magic',
            text: 'Magic',
          },
          {
            link: '/sdk/signers/dynamic',
            text: 'Dynamic',
          },
          {
            link: '/sdk/signers/privy',
            text: 'Privy',
          },
          {
            link: '/sdk/signers/web3auth',
            text: 'Web3Auth',
          },
          {
            link: '/sdk/signers/portal',
            text: 'Portal',
          },
          {
            link: '/sdk/signers/turnkey',
            text: 'Turnkey',
          },
          {
            link: '/sdk/signers/fireblocks',
            text: 'Fireblocks',
          },
          {
            link: '/sdk/signers/capsule',
            text: 'Capsule',
          },
          {
            link: '/sdk/signers/lit-protocol',
            text: 'Lit Protocol',
          },
          {
            link: '/sdk/signers/particle',
            text: 'Particle Network',
          },
          {
            link: '/sdk/signers/dfns',
            text: 'Dfns',
          },
          {
            link: '/sdk/signers/arcana',
            text: 'Arcana Auth',
          },
          {
            link: '/sdk/signers/eoa',
            text: 'EOA Wallets (e.g. MetaMask)',
          },
          {
            link: '/sdk/signers/custom-signer',
            text: 'Custom Signer Integration',
          }
        ],
      },
      {
        "text": "Infra",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/infra/intro"
          },
          {
            "text": "ZeroDev",
            "link": "/meta-infra/intro"
          },
          {
            "text": "Pimlico",
            "link": "/sdk/infra/pimlico"
          },
          {
            "text": "Stackup",
            "link": "/sdk/infra/stackup"
          },
        ],
      },
      {
        "text": "FAQs",
        "collapsed": false,
        "items": [
          {
            "text": "What networks do you support?",
            "link": "/sdk/faqs/chains"
          },
          {
            "text": "How to debug a UserOp?",
            "link": "/sdk/faqs/debug-userop"
          },
          {
            "text": "Can I use a KernelClient with ethers.js?",
            "link": "/sdk/faqs/use-with-ethers"
          },
          {
            "text": "Can you use ZeroDev with React Native?",
            "link": "/sdk/faqs/use-with-react-native"
          },
          {
            "text": "Is ZeroDev Audited?",
            "link": "/sdk/faqs/audits"
          },
          {
            "text": "How to use ZeroDev with Gelato",
            "link": "/sdk/faqs/use-with-gelato"
          },
        ],
      },
    ],
    "/meta-infra": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/meta-infra/intro"
          },
          {
            "text": "Gas Policies",
            "link": "/meta-infra/gas-policies"
          },
          {
            "text": "Custom Gas Policies",
            "link": "/meta-infra/custom-gas-policies"
          },
          {
            "text": "Bundler & Paymaster RPCs",
            "link": "/meta-infra/rpcs"
          },
          {
            "text": "Admin API",
            "link": "/meta-infra/api"
          }
        ],
      }
    ],
    "/react": [
      {
        "text": "Getting Started",
        "link": "/react/getting-started",
      },
      {
        "text": "Code Examples",
        "link": "https://github.com/zerodevapp/waas-examples"
      },
      {
        "text": "Hooks",
        "collapsed": false,
        "items": [
          {
            "text": "useBalance",
            "link": "/react/use-balance",
          },
          {
            "text": "useCreateBasicSession",
            "link": "/react/use-create-basic-session",
          },
          {
            "text": "useCreateSession",
            "link": "/react/use-create-session",
          },
          {
            "text": "useCreateKernelClientEOA",
            "link": "/react/use-create-kernelclient-eoa"
          },
          {
            "text": "useCreateKernelClientPasskey",
            "link": "/react/use-create-kernelclient-passkey"
          },
          {
            "text": "useDisconnectKernelClient",
            "link": "/react/use-disconnect-kernelclient",
          },
          {
            "text": "useKernelClient",
            "link": "/react/use-kernelclient",
          },
          {
            "text": "useSendUserOperation",
            "link": "/react/use-send-useroperation",
          },
          {
            "text": "useSendUserOperationWithSession",
            "link": "/react/use-send-useroperation-with-session",
          },
          {
            "text": "useSessions",
            "link": "/react/use-sessions",
          },
          {
            "text": "useSessionKernelClient",
            "link": "/react/use-session-kernelclient",
          },
          {
            "text": "useSetKernelClient",
            "link": "/react/use-set-kernelclient",
          },
          {
            "text": "useWalletConnect",
            "link": "/react/use-wallet-connect",
          }
        ]
      }
    ]
  },
})
