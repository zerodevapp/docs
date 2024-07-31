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
    { text: 'SDK', link: '/sdk', match: '/sdk' },
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
    "/sdk": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk"
          },
          {
            "text": "Demo App",
            "link": "/sdk"
          },
          {
            "text": "Quick Start",
            "link": "/sdk/quick-start"
          },
        ],
      },
      {
        "text": "Setting up Yi",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk"
          },
          {
            "text": "Authentication",
            "collapsed": false,
            "items": [
              {
                "text": "Social / email",
                "link": "/sdk"
              },
              {
                "text": "Passkeys",
                "link": "/sdk/quick-start"
              },
              {
                "text": "EOAs",
                "link": "/sdk/quick-start"
              },
              {
                "text": "Third-party signers",
                "link": "/sdk/quick-start"
              },
            ],
          },
          {
            "text": "Chain abstraction",
            "link": "/sdk/quick-start"
          }
        ],
      },
      {
        "text": "Using Yi",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/quick-start"
          },
          {
            "text": "Sponsoring gas",
            "link": "/sdk/quick-start"
          },
          {
            "text": "Paying gas in ERC20s",
            "link": "/sdk/quick-start"
          },
          {
            "text": "Batching transactions",
            "link": "/sdk/quick-start"
          },
          {
            "text": "1-click trading",
            "link": "/sdk/quick-start"
          },
          {
            "text": "Automating transactions",
            "link": "/sdk/quick-start"
          },
        ],
      },
      {
        "text": "Using Yi with other accounts",
        "collapsed": false,
        "items": [
          {
            "text": "Basic Usage",
            "link": "/sdk/interop"
          },
          {
            "text": "Kernel (ZeroDev)",
            "link": "/sdk/interop/kernel"
          },
          {
            "text": "Safe",
            "link": "/sdk/interop/safe"
          },
          {
            "text": "Biconomy",
            "link": "/sdk/interop/biconomy"
          },
          {
            "text": "Alchemy",
            "link": "/sdk/interop/alchemy"
          },
        ],
      },
    ],
    "/wallet": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/wallet"
          },
        ],
      },
    ],
  },
})
