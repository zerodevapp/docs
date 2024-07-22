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
    { text: 'Build a DApp', link: '/dapp', match: '/dapp' },
    { text: 'Build a Wallet', link: '/wallet', match: '/wallet' },
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
    "/dapp": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/dapp"
          },
          {
            "text": "Demo App",
            "link": "/dapp"
          },
        ],
      },
      {
        "text": "Onboarding",
        "collapsed": false,
        "items": [
          {
            "text": "Setting up the Yi Connector",
            "link": "/dapp/onboarding/yi-connector-setup"
          },
          {
            "text": "Styling the Yi Connector",
            "link": "/dapp/onboarding/yi-connector-styling"
          },
        ],
      },
      {
        "text": "Using your app",
        "collapsed": false,
        "items": [
          {
            "text": "Sponsoring Gas",
            "link": "/dapp/using-your-app/sponsor-gas"
          },
          {
            "text": "Batching Transactions",
            "link": "/dapp/using-your-app/batching-transactions"
          },
          {
            "text": "Removing Confirmations",
            "link": "/dapp/using-your-app/removing-confirmations"
          },
          {
            "text": "Transaction Automation",
            "link": "/dapp/using-your-app/transaction-automation"
          },
          {
            "text": "Chain Abstraction",
            "link": "/dapp/using-your-app/chain-abstraction"
          },
        ],
      },
      {
        "text": "Interop",
        "collapsed": false,
        "items": [
          {
            "text": "Using embedded account in Yi Wallet",
            "link": "/dapp/interop/using-yi-wallet"
          },
          {
            "text": "Importing an account into Yi Wallet",
            "link": "/dapp/interop/importing-account-into-yi-wallet"
          },
        ],
      },
      {
        "text": "Knowledge Base",
        "collapsed": false,
        "items": [
          {
            "text": "What are capabilities (ERC-5792)?",
            "link": "/dapp/knowledge/capabilities"
          },
          {
            "text": "What is ERC-7702?",
            "link": "/dapp/knowledge/7702"
          },
          {
            "text": "What are permissions (ERC-7715)?",
            "link": "/dapp/knowledge/permissions"
          },
          {
            "text": "What are subaccounts?",
            "link": "/dapp/knowledge/subaccounts"
          },
          {
            "text": "What is chain abstraction?",
            "link": "/dapp/knowledge/chain-abstraction"
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
