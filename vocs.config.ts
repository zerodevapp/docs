import { defineConfig } from 'vocs'

export default defineConfig({
  logoUrl: {
    dark: '/logo-white.svg',
    light: '/logo-black.svg'
  },
  title: 'ZeroDev',
  topNav: [
    { text: 'SDK', link: '/', match: '/kerneljs' },
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
            "link": "/kerneljs/getting-started/quickstart"
          }
        ],
      },
      {
        "text": "Core API",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/kerneljs/core-api/intro"
          },
          {
            "text": "Create a Smart Account",
            "link": "/kerneljs/core-api/create-account"
          },
          {
            "text": "Send Transactions",
            "link": "/kerneljs/core-api/send-transactions"
          },
          {
            "text": "Sponsor Gas",
            "link": "/kerneljs/core-api/sponsor-gas"
          },
          {
            "text": "Pay Gas in ERC20s",
            "link": "/kerneljs/core-api/pay-gas-in-erc20s"
          },
          {
            "text": "Batch Transactions",
            "link": "/kerneljs/core-api/batch-transactions"
          },
          {
            "text": "Deploy Contracts",
            "link": "/kerneljs/core-api/deploy-contract"
          },
          {
            "text": "Sign & Validate Messages",
            "link": "/kerneljs/core-api/sign-and-validate-messages"
          },
          {
            "text": "Delegatecall",
            "link": "/kerneljs/core-api/delegatecall"
          }
        ],
      },
      {
        "text": "Plugins",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/kerneljs/plugins/intro"
          },
          {
            "text": "ECDSA",
            "link": "/kerneljs/plugins/ecdsa"
          },
          {
            "text": "Passkey",
            "link": "/kerneljs/plugins/passkey"
          },
          {
            "text": "Multisig",
            "link": "/kerneljs/plugins/multisig"
          },
          {
            "text": "Session Keys",
            "link": "/kerneljs/plugins/session-keys"
          },
          {
            "text": "Recovery",
            "link": "/kerneljs/plugins/recovery"
          }
        ],
      },
      {
        "text": "FAQs",
        "collapsed": false,
        "items": [
          {
            "text": "How to debug a UserOp?",
            "link": "/kerneljs/getting-started/intro"
          },
          {
            "text": "Can I use Ethers.js?",
            "link": "/kerneljs/getting-started/intro"
          }
        ],
      },
      {
        "text": "Signers",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/kerneljs/signers/intro"
          },
          {
            link: '/kerneljs/signers/dynamic',
            text: 'Dynamic',
          },
          {
            link: '/kerneljs/signers/privy',
            text: 'Privy',
          },
          {
            link: '/kerneljs/signers/magic',
            text: 'Magic',
          },
          {
            link: '/kerneljs/signers/web3auth',
            text: 'Web3Auth',
          },
          {
            link: '/kerneljs/signers/fireblocks',
            text: 'Fireblocks',
          },
          {
            link: '/kerneljs/signers/portal',
            text: 'Portal',
          },
          {
            link: '/kerneljs/signers/capsule',
            text: 'Capsule',
          },
          {
            link: '/kerneljs/signers/particle',
            text: 'Particle Network',
          },
          {
            link: '/kerneljs/signers/arcana',
            text: 'Arcana Auth',
          },
          {
            link: '/kerneljs/signers/dfns',
            text: 'Dfns',
          },
          {
            link: '/kerneljs/signers/lit-protocol',
            text: 'Lit Protocol',
          },
          {
            link: '/kerneljs/signers/turnkey',
            text: 'Turnkey',
          },
          {
            link: '/kerneljs/signers/eoa',
            text: 'Externally Owned Account (EOA)',
          },
        ],
      },
      {
        "text": "Presets",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/kerneljs/presets/intro"
          },
          {
            "text": "ZeroDev",
            "link": "/kerneljs/presets/zerodev"
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