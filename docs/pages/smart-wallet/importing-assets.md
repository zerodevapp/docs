# Importing Assets

We make it easy to transfer assets from any chain into the DApp.

So if your user currently has say ETH on mainnet but your DApp requires USDC on Arbitrum, we make it easy to transfer (we take care of bridging).

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