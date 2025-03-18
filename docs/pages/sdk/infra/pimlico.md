# Pimlico

You can use the ZeroDev SDK with Pimlico bundlers.

## Using Pimlico bundler

Simply specify Pimlico's bundler RPC when [constructing a Kernel client](/sdk/core-api/create-account#standard-api):

```typescript
import { createKernelAccountClient } from "@zerodev/sdk"
import { http } from "viem"

const kernelClient = createKernelAccountClient({
  // other options...

  transport: http('PIMLICO_BUNDLER_RPC'),
})
```

## Using Pimlico paymaster

Construct the Kernel client with Pimlico's paymaster client:

```typescript
import { http } from "viem"
import { polygonMumbai } from 'viem/chains'
import { createKernelAccountClient } from "@zerodev/sdk"
import { createPaymasterClient } from 'viem/account-abstraction'

const paymaster = createPaymasterClient({
  chain: polygonMumbai,
  transport: http('PIMLICO_PAYMASTER_RPC'),
})

const kernelClient = createKernelAccountClient({
  account,
  chain: polygonMumbai,
  bundlerTransport: http('PIMLICO_BUNDLER_RPC'),
  paymaster
})
```
