# Importing Assets

Generally there are two ways to get assets into the smart wallet:

- Fiat onramp
- Importing assets from another wallet

ZeroDev works with any fiat onramp solution -- you simply specify the smart wallet address as the destination address.

In this doc, we describe how to use ZeroDev's routing function to help users transfer their assets from another wallet (presumably an EOA) into the smart account.  We support both same-chain and cross-chain transfers.

## Installation
:::code-group

```bash [npm]
npm install @zerodev/defi
```

```bash [pnpm]
pnpm add @zerodev/defi
```

```bash [yarn]
yarn add @zerodev/defi
```

```bash [bun]
bun install @zerodev/defi
```

:::

## React API

### Same Chain
```tsx
import { useKernelClient } from "@zerodev/waas"
import { createKernelDefiClient, baseTokenAddresses } from "@zerodev/defi"
import { useSendTransaction, useAccount, useChainId } from "wagmi"

function App() {
  // eoa state
  const chainId = useChainId()
  const { address: eoaAddress } = useAccount()
  const { sendTransactionAsync } = useSendTransaction()
  // smart account state
  const { kernelClient, address: smartAccountAddress } = useKernelClient()

  const onClickImportAsset = async () => {
    if (!kernelClient || !eoaAddress || !smartAccountAddress) return

    const defiClient = createKernelDefiClient(kernelClient, ZERODEV_PROJECT_ID)
    const importTxData = await defiClient.getSwapData({ 
      chainId: chainId,
      fromAddress: eoaAddress,
      toAddress: smartAccountAddress,
      fromToken: baseTokenAddresses[chainId].USDC,
      toToken: baseTokenAddresses[chainId].DAI,
      fromAmount: 10000000n,
    })
    await sendTransactionAsync({
      to: importTxData.targetAddress,
      value: BigInt(importTxData.value),
      data: importTxData.callData
    })
  }

  return (
    <button onClick={() => onClickImportAsset()}>
      Import Assets
    </button>
  )
}
```

### Cross Chain

Please see the [example](#same-chain) above for guidance on skipping imports and using hooks.

```tsx
/// skip some import...
import { createKernelDefiClient, baseTokenAddresses } from "@zerodev/defi"

function App() {  
  /// hooks to get account state...

  const onClickImportAsset = async () => {
    const defiClient = createKernelDefiClient(kernelClient, ZERODEV_PROJECT_ID)
    const importTxData = await defiClient.getSwapDataCrossChain({ // [!code focus]
      fromChainId: chainId, // [!code focus]
      toChainId: TO_CHAIN_ID, // [!code focus]
      fromAddress: eoaAddress, // [!code focus]
      toAddress: smartAccountAddress, // [!code focus]
      fromToken: baseTokenAddresses[chainId].USDC, // [!code focus]
      toToken: baseTokenAddresses[TO_CHAIN_ID].DAI, // [!code focus]
      fromAmount: 10000000n, // [!code focus]
    }) // [!code focus]
    /// send transactions
  }

  return (
    <button onClick={() => onClickImportAsset()}>
      Import Assets
    </button>
  )
}
```

## Core API

### Same Chain

Refer to the [page](/smart-wallet/creating-wallets#creating-wallets) for instructions on how to construct a kernel client.

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { createKernelDefiClient, baseTokenAddresses } from "@zerodev/defi"

/// construct kernel client...
const defiClient = createKernelDefiClient(kernelClient, ZERODEV_PROJECT_ID)
const chain = defiClient.chain

// construct the wallet used to import assets
const account = privateKeyToAccount(PRIVATE_KEY) 
const walletClient = createWalletClient({
  account: account,
  chain: chain,
  transport: http()
})

const importTxData = await defiClient.getSwapData({
  chainId: defiClient.chain.id,
  fromAddress: account.address,
  toAddress: defiClient.account.address,
  fromToken: baseTokenAddresses[chain.id].USDC,
  toToken: baseTokenAddresses[chain.id].DAI,
  fromAmount: BigInt(10000000),
})
await walletClient.sendTransaction({
  to: importTxData.targetAddress,
  value: BigInt(importTxData.value),
  data: importTxData.callData
})

```

### Cross Chain

Please see the [example](#same-chain-1) above for guidance on skipping imports and constructing wallets.

```ts
/// skip some import ...
import { createKernelDefiClient, baseTokenAddresses } from "@zerodev/defi"

/// constuct wallet and kernel client...

const defiClient = createKernelDefiClient(kernelClient, ZERODEV_PROJECT_ID)
const importTxData = await defiClient.getSwapDataCrossChain({ // [!code focus]
  fromChainId: FROM_CHAIN_ID, // [!code focus]
  toChainId: chain.id, // [!code focus]
  fromAddress: account.address, // [!code focus]
  toAddress: defiClient.account.address, // [!code focus]
  fromToken: baseTokenAddresses[FROM_CHAIN_ID].USDC, // [!code focus]
  toToken: baseTokenAddresses[chain.id].DAI, // [!code focus]
  fromAmount: 10000000n, // [!code focus]
}) // [!code focus]

/// send transaction...
```