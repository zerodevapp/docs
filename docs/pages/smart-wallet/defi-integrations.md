# DeFi Integrations

ZeroDev partners with [Enso](https://www.enso.finance/) to support seamless token swaps and DeFi integrations, even across chains.

The API deals with two types of tokens:

- **Base tokens** are normal tokens that do not represent a DeFi position.  Examples are ETH, USDC, etc. 
- **DeFi tokens** are ERC20 tokens that represent a DeFi position, such as in a [ERC-4626 vault](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/).  For example, depositing ETH into Lido gets you `stETH` that represents staked ETH.

By allowing you to swap between base tokens and DeFi tokens, you can easily:

- Swap between any token pairs.
- Entering and exiting DeFi positions (staking, lending, etc.)

ZeroDev leverages [batching](/sdk/core-api/batch-transactions) and [delegatecall](/sdk/core-api/delegatecall) internally to ensure that even complex routes are executed in one atomic UserOp, providing the user with low latency, low gas cost, and high safety.

## Supported Tokens

See the full lists of supported base tokens and DeFi tokens:

- [Base tokens](/sdk/advanced/supported-base-tokens)
- [DeFi tokens (protocols)](/sdk/advanced/supported-defi-tokens)

## Installation

:::code-group

```bash [npm]
npm i @zerodev/defi
```

```bash [yarn]
yarn add @zerodev/defi
```

```bash [pnpm]
pnpm i @zerodev/defi
```

```bash [bun]
bun add @zerodev/defi
```

:::

## Core API 

:::info
Check out [these code examples](https://github.com/zerodevapp/zerodev-examples/tree/main/defi).
:::

### Creating a DeFi client

All DeFi APIs are exposed through a "DeFi client":

```ts
import { createKernelDefiClient } from "@zerodev/defi"

const defiClient = createKernelDefiClient(kernelClient, projectId)
```

Where:

- `kernelClient` is the [account client](/sdk/core-api/create-account#create-an-account-client) object.
- `projectId` is your ZeroDev project ID, obtained from the dashboard.

### Swapping Tokens

Suppose you want to swap 100 USDC to USDT:

```ts
import { baseTokenAddresses } from "@zerodev/defi"
import { parseUnits } from "viem"
import { arbitrum } from "viem/chains"

// Replace this with your network
const chain = arbitrum

const userOpHash = await defiClient.sendSwapUserOp({
  fromToken: baseTokenAddresses[chain.id].USDC,
  fromAmount: parseUnits('100', 6),  // USDC uses 6 decimals

  toToken: baseTokenAddresses[chain.id].USDT,

  gasToken: 'sponsored',
})
```

Where:

- `fromToken` is the input token.
- `fromAmount` is a `bigint` representing the input token amount.  Note that this uses the smallest unit for the token, e.g. Wei for Ether.
- `toToken` is the output token.
- `toAddress`: defaults to the account's own address. If specified, it will send the output token to that address instead.
- `gasToken`: [see below.](#gas-tokens)

### Entering / Exiting DeFi positions

Entering a DeFi position simply means swapping a token into a DeFi token.

You can get a DeFi token address through the `defiTokenAddresses` constant, which is a map with three keys: `chainId => tokenName => protocolName`.  For example, the DeFi token representing the USDC vault on AAVE v3 on Arbitrum would be `defiTokenAddresses[arbitrum.id]['USDC']['aave-v3']`.  So, to enter the vault:

```ts
import { defiTokenAddresses } from "@zerodev/defi"
import { arbitrum } from "viem/chains"

const chain = arbitrum

const userOpHash = await defiClient.sendSwapUserOp({
  fromToken: baseTokenAddresses[chain.id].USDC,
  fromAmount: 1_000_000,

  toToken: defiTokenAddresses[chain.id]['USDC']['aave-v3'],

  gasToken: 'sponsored',
})
```

Similarly, exiting a DeFi position is just swapping a DeFi token into another token.

### Cross-chain Swaps

To swap tokens across chains, use `sendSwapUserOpCrossChain`.  For example, to swap USDC on Arbitrum to DAI on Polygon:

```ts
// Convert mainnet DAI to USDC, and lend it through AAVE on Arbitrum
const userOpHash = await defiClient.sendSwapUserOpCrossChain({
  fromToken: baseTokenAddresses[mainnet.id].DAI,
  fromAmount: 1_000_000,

  toToken: defiTokenAddresses[arbitrum.id]['USDC']['aave-v3'],
  toChainId: arbitrum.id,

  // Pay gas with input token
  gasToken: "fromToken"
})
```

Where:

- `fromToken` is the input token.
- `fromAmount` is a `bigint` representing the input token amount.  Note that this uses the smallest unit for the token, e.g. Wei for Ether.
- `toToken` is the output token.
- `toChainId`: the chain for `toToken`,
- `toAddress`: defaults to the account's own address. If specified, it will send the output token to that address instead.
- `gasToken`: [see below.](#gas-tokens)

### Listing Tokens

You can list all ERC20 tokens an account owns with the `listTokenBalances` function:

```ts
const accountBalances = await defiClient.listTokenBalances({
  account: account.address,
  chainId: chain.id,
})
```

### Gas Tokens

The `gasToken` flag specifies how gas is paid for the UserOp.  It can be one of the following values:

- `sponsored`: sponsor the UserOp.
- `fromToken`: pays gas in the input token, using a [ERC20 paymaster](/sdk/core-api/pay-gas-with-erc20s).
- `toToken`: pays gas in the output token, using a [ERC20 paymaster](/sdk/core-api/pay-gas-with-erc20s).
- `native`: pays gas in the native token, using the account's balance.
- You can also specify an `Address` for a ERC20 token, to pay gas with that token using a [ERC20 paymaster](/sdk/core-api/pay-gas-with-erc20s).

### Getting the UserOp without sending

If you want to just construct a UserOp but not send it immediately (perhaps because you want to show the user a gas estimate), use:

- `getSwapUserOp` instead of `sendSwapUserOp`
- `getSwapUserOpCrossChain` instead of `sendSwapUserOpCrossChain`

The functions above will get a signed UserOp but not sending it.  If you want to get an unsigned UserOp, use:

- `getSwapData`, [like this](https://github.com/zerodevapp/zerodev-examples/blob/8cd83fd5e588a11414d1eb946622eda864e2b044/defi/get-swap-data.ts#L67-L84).

If you want to get regular transaction data instead of UserOps (presumably because you want to send the transaction through a EOA), use:

- `getSwapUserOpCrossChain`

## React API

TODO
