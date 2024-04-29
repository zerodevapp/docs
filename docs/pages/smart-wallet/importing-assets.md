# Importing Assets

Generally there are two ways to get assets into the smart wallet:

- Fiat onramp
- Importing assets from another wallet

ZeroDev works with any fiat onramp solution -- you simply specify the smart wallet address as the destination address.

In this doc, we describe how to use ZeroDev's routing function to help users transfer their assets from another wallet (presumably an EOA) into the smart account.  We support both same-chain and cross-chain transfers.

## SDK

```ts
const assetList = listAssets(eoa)

const manager = makeImportManager({
  sourceAsset: '0x',
  sourceChain: '',
})
```

## Hooks

- Pick source assets
- Pick target assets
- Execute