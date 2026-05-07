# Choosing an infra provider

ZeroDev is compatible with any account abstraction infra provider. Check out these guides for integrating with a specific provider:

- [ZeroDev](/meta-infra/intro)
- [Pimlico](/sdk/infra/pimlico)

Read on to learn how to integrate with a custom provider.

## Interop with Bundlers

For the most part, bundlers are perfectly interoperable between different providers. You simply specify the bundler RPC when you construct a Kernel client:

```typescript
import { createKernelAccountClient } from "@zerodev/sdk";
import { http } from "viem";

const kernelClient = createKernelAccountClient({
  // other options...

  bundlerTransport: http("BUNDLER_RPC"),
});
```

## Interop with Paymasters

If the Paymaster supports [ERC-7677](https://www.erc7677.xyz/) paymaster methods, you can simply pass the Paymaster RPC URL to `createZeroDevPaymasterClient`:

```typescript
import { createKernelAccountClient, createZeroDevPaymasterClient } from "@zerodev/sdk"

const paymasterClient = createZeroDevPaymasterClient({
  chain,
  transport: http('PAYMASTER_RPC'),
})

const kernelClient = createKernelAccountClient({
  // other options...

  paymaster: paymasterClient
})
```

To integrate with a paymaster which doesn't support [ERC-7677](https://www.erc7677.xyz/), you need to implement the `getPaymasterData` function:

```typescript
const kernelClient = createKernelAccountClient({
  // other options...

  paymaster: {
    getPaymasterData(userOperation) {
      // return `paymasterAndData` for `EntryPoint 0.6` or `paymaster` and `paymasterData` for `EntryPoint 0.7`
    }
  }
})
```