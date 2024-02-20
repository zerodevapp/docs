import * as React from 'react'
import { defineConfig } from 'vocs'

export default defineConfig({
  logoUrl: {
    dark: '/logo-white.svg',
    light: '/logo-black.svg'
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
    { text: 'SDK', link: '/', match: '/sdk' },
    { text: 'Infra', link: '/meta-infra/intro', match: '/meta-infra' },
    { text: 'Recovery', link: '/recovery-flow/intro', match: '/recovery-flow' },
    {
      link: 'https://docs-v4.zerodev.app/',
      text: 'Old Docs (v4)',
    },
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
            "text": "Quickstart",
            "link": "/sdk/getting-started/quickstart"
          },
          {
            "text": "Tutorial",
            "link": "/sdk/getting-started/tutorial"
          },
          {
            "text": "Code Examples",
            "link": "https://github.com/zerodevapp/zerodev-examples"
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
        "text": "Plugins",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/plugins/intro"
          },
          {
            "text": "Passkeys",
            "link": "/sdk/plugins/passkeys"
          },
          {
            "text": "ECDSA",
            "link": "/sdk/plugins/ecdsa"
          },
          {
            "text": "Weighted ECDSA",
            "link": "/sdk/plugins/weighted-ecdsa"
          },
          {
            "text": "Session Keys",
            "link": "/sdk/plugins/session-keys"
          },
          {
            "text": "Multisig",
            "link": "/sdk/plugins/multisig"
          },
          {
            "text": "Guardians",
            "link": "/sdk/plugins/guardians"
          },
          {
            "text": "Recovery",
            "link": "/sdk/plugins/recovery"
          },
        ],
      },
      {
        "text": "Signers",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/signers/intro"
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
            link: '/sdk/signers/magic',
            text: 'Magic',
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
        "text": "Presets",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/presets/intro"
          },
          {
            "text": "ZeroDev",
            "link": "/sdk/presets/zerodev"
          }
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
    "/recovery-flow": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/recovery-flow/intro"
          },
          {
            "text": "Recovery Setup",
            "link": "/recovery-flow/setup"
          },
          {
            "text": "Recovery Portal",
            "link": "/recovery-flow/portal"
          }
        ],
      }
    ],
  },
})