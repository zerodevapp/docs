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
    { text: 'SDK', link: '/', match: '/sdk' },
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
            "text": "Yi vs Other Solutions",
            "link": "/sdk/yi-vs-others"
          },
          {
            "text": "Demo App",
            "link": "https://demo.yi.app/"
          },
          {
            "text": "Quickstart",
            "link": "/sdk/quickstart"
          },
        ],
      },
      {
        "text": "Setting up Yi",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/setting-up-yi"
          },
          {
            "text": "Social / email",
            "link": "/sdk/setting-up-yi/social"
          },
          {
            "text": "Passkeys",
            "link": "/sdk/setting-up-yi/passkeys"
          },
          {
            "text": "EOAs",
            "link": "/sdk/setting-up-yi/eoa"
          },
          {
            "text": "Third-party signers",
            "link": "/sdk/setting-up-yi/third-party-signers"
          },
        ],
      },
      {
        "text": "Using Yi",
        "collapsed": false,
        "items": [
          {
            "text": "Basic Usage",
            "link": "/sdk/using-yi/basic-usage"
          },
          {
            "text": "Chain Abstraction",
            "link": "/sdk/using-yi/chain-abstraction"
          },
          {
            "text": "Sponsoring gas",
            "link": "/sdk/using-yi/sponsoring-gas"
          },
          {
            "text": "Paying gas in ERC20s",
            "link": "/sdk/using-yi/paying-gas-in-erc20s"
          },
          {
            "text": "Batching transactions",
            "link": "/sdk/using-yi/batching-transactions"
          },
          {
            "text": "1-click trading",
            "link": "/sdk/using-yi/one-click-trading"
          },
          {
            "text": "Automating transactions",
            "link": "/sdk/using-yi/automating-transactions"
          },
        ],
      },
      {
        "text": "Using Yi with other accounts",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
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
      {
        "text": "Knowledge Base",
        "collapsed": false,
        "items": [
          {
            "text": "What is a smart account?",
            "link": "/sdk/interop"
          },
          {
            "text": "How does chain abstraction work?",
            "link": "/sdk/knowledge-base/chain-abstraction"
          },
          {
            "text": "What are capabilities (ERC-5792)?",
            "link": "/sdk/knowledge-base/capabilities"
          },
          {
            "text": "What are permissions (ERC-7715)?",
            "link": "/sdk/knowledge-base/permissions"
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
