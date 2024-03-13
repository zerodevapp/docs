# Stackup

[Stackup](https://stackup.sh/) is a leading AA infra provider with impressive reliability.

## Using Stackup bundler

Simply specify Stackup's bundler RPC when [constructing a Kernel client](/sdk/core-api/create-account#standard-api):

```typescript
import { createKernelAccountClient } from "@zerodev/sdk"
import { http } from "viem"

const kernelClient = createKernelAccountClient({
  // other options...

  transport: http('STACKUP_BUNDLER_RPC'),
})
```

## Using Stackup paymaster

Construct the Kernel client with Stackup's paymaster client:

```typescript
import { http } from "viem"
import { polygonMumbai } from 'viem/chains'
import { createKernelAccountClient } from "@zerodev/sdk"
import { createStackupPaymasterClient } from "permissionless/clients/stackup"

const kernelClient = createKernelAccountClient({
  account,
  chain: polygonMumbai,
  transport: http('STACKUP_BUNDLER_RPC'),
  sponsorUserOperation: async ({ userOperation }) => {
    const paymaster = createStackupPaymasterClient({
      chain: polygonMumbai,
      transport: http('STACKUP_PAYMASTER_RPC'),
    })
    return paymaster.sponsorUserOperation({
      userOperation
    })
  }
})
```