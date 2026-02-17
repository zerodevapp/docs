# Parallel transactions

With an EOA, the nonce is sequential: 1, 2, 3,… This means that transactions get processed sequentially, and a transaction cannot be processed unless the previous transaction has completed.

With smart accounts, the nonce can be two-dimensional, enabling *parallel UserOps*. Imagine that your user wants to place three trades:

1. Swap 100 `USDC` to `DAI`
2. Swap 100 `DAI` to `USDT`
3. Swap 1WETH to `USDT`

In this example, assuming the user did not have DAI to start with, the first two trades are dependent, since the user needs to wait for the first trade to complete before they can do the second. However, the third trade doesn’t depend on either of the first two trades, so it ought to be able to be placed in parallel.

## How 2D nonces work

In a smart account, the nonce consists of two components: a “nonce key” and a “nonce value.”

UserOps with the same nonce key will be ordered sequentially. For example, by default, all UserOps use a nonce key of `0`, which is why all UserOps are ordered sequentially.

To send UserOps in parallel, assign each UserOps instance a different nonce key.

## React API

When sending UserOps with `useSendUserOperation` or `useSendUserOperationWithSession`, you can specify a `nonceKey`, which is a string.

```tsx
import { useSendUserOperation, useKernelClient } from '@zerodev/waas'
import { parseAbi } from 'viem'
 
function App() {
  const { write } = useSendUserOperation({
    nonceKey: '0'
  })
  const { address } = useKernelClient()
  const abi = parseAbi(['function mint(address _to) public'])
 
  return (
    <button
      onClick={() =>
        write([
          {
            address: '0x34bE7f35132E97915633BC1fc020364EA5134863',
            abi: abi,
            functionName: "mint",
            args: [address],
            value: 0n,
          },
        ])
      }
    >
      Send UserOp
    </button>
  )
}
```

UserOps with the same `nonceKey` will be ordered sequentially. UserOps with different `nonceKey`s will be ordered in parallel. All UserOps use a default nonceKey of `0`.

## Core API

:::info

Check out [a complete example here](https://github.com/zerodevapp/zerodev-examples/blob/main/send-transactions/with-2d-nonce.ts).

:::

To send parallel UserOps, use "nonce keys" to compute nonces:

```ts
const nonceKey = getCustomNonceKeyFromString(
  "nonce key",
  entryPoint,
)

const nonce = await account.getNonce({ key: nonceKey })

await kernelClient.sendUserOperation({
    callData,
    nonce: nonce,
})

// This UserOp won't wait for the previous one, because it uses
// a different nonce key.
const nonceKey2 = getCustomNonceKeyFromString(
  "nonce key 2",
  entryPoint,
)

const nonce2 = await account.getNonce({ key:nonceKey2 })


await kernelClient.sendUserOperation({
    callData,
    nonce: nonce2,
})
```

All UserOps using the same nonce key will be ordered sequentially. UserOps using different nonce keys will run in parallel.

For example, if you want to order all UserOps that interact with Uniswap, and order all UserOps that interact with AAVE, but you want the Uniswap UserOps and the AAVE UserOps to be parallel to each other, you can use the string "Uniswap" and "AAVE" as the nonce keys for their UserOps, respectively.