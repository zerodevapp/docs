import * as React from 'react'
import { defineConfig } from 'vocs'

export default defineConfig({
  logoUrl: {
    dark: '/logo-white.svg',
    light: '/logo-black.svg'
  },
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
    { text: 'Recovery Flow', link: '/recovery-flow/intro', match: '/recovery-flow' },
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
          }
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
            "text": "Pay Gas in ERC20s",
            "link": "/sdk/core-api/pay-gas-in-erc20s"
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
            "text": "Sign & Validate Messages",
            "link": "/sdk/core-api/sign-and-validate-messages"
          },
          {
            "text": "Delegatecall",
            "link": "/sdk/core-api/delegatecall"
          }
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
            "text": "ECDSA",
            "link": "/sdk/plugins/ecdsa"
          },
          {
            "text": "Passkey",
            "link": "/sdk/plugins/passkey"
          },
          {
            "text": "Multisig",
            "link": "/sdk/plugins/multisig"
          },
          {
            "text": "Session Keys",
            "link": "/sdk/plugins/session-keys"
          },
          {
            "text": "Recovery",
            "link": "/sdk/plugins/recovery"
          }
        ],
      },
      {
        "text": "FAQs",
        "collapsed": false,
        "items": [
          {
            "text": "How to debug a UserOp?",
            "link": "/sdk/getting-started/intro"
          },
          {
            "text": "Can I use Ethers.js?",
            "link": "/sdk/getting-started/intro"
          }
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
            link: '/sdk/signers/fireblocks',
            text: 'Fireblocks',
          },
          {
            link: '/sdk/signers/portal',
            text: 'Portal',
          },
          {
            link: '/sdk/signers/capsule',
            text: 'Capsule',
          },
          {
            link: '/sdk/signers/particle',
            text: 'Particle Network',
          },
          {
            link: '/sdk/signers/arcana',
            text: 'Arcana Auth',
          },
          {
            link: '/sdk/signers/dfns',
            text: 'Dfns',
          },
          {
            link: '/sdk/signers/lit-protocol',
            text: 'Lit Protocol',
          },
          {
            link: '/sdk/signers/turnkey',
            text: 'Turnkey',
          },
          {
            link: '/sdk/signers/eoa',
            text: 'Externally Owned Account (EOA)',
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
      }
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