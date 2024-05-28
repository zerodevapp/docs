# One-click Trading

Signing every transaction gets annoying if you expect users to do frequent trades.  The solution is "1-click trading" aka 1CT.

## How 1CT Works

The reason why transactions normally need to be confirmed is that each transaction has *unlimited permissions* -- any transaction can do anything.  That's why the user needs to look at each transaction and confirm it.

ZeroDev enables 1CT through *session keys*.  Session keys are **temporary keys with limited permissions**.  For example, you might create a session key that:

- Lasts 24 hours.
- Can only interact with Uniswap.
- Can only spend up to 100 USDC.

Since the session key cannot do *everything*, but rather only do specific things, there's no need for the user to confirm every transaction.  The user would only confirm the *permissions* when the session key is created.

## Capabilities API

With [the capabilities API](/smart-wallet/quickstart-capabilities), you can create a "session" with the wallet by requesting permissions.  Then, transactions can be sent within those permissions, without asking the user for further confirmations.

First, request permissions from the connected wallet using Viem:

```ts
```

Now, every time you want to send a transaction with this session, use the `permissions` capability and include the `permissionsContext` in the `sendCalls` request:

```ts
```

## React API

:::info
Check out [a complete code example here](https://github.com/zerodevapp/waas-examples/tree/main/session-keys).
:::

### Creating Sessions

Use [the `useCreateSession` hook](/react/use-create-session) to create a session.  When you create a session, ZeroDev generates a random session key and stores it in local storage.  The key is then assigned with a list of policies.  [Learn more about policies here.](/smart-wallet/permissions/intro)

```tsx
import { useCreateSession } from '@zerodev/waas';
 
function App() {
  const { write } = useCreateSession();
  
  return (
    <button onClick={() => {
      write({
        policies: [
          expiresIn24Hours,
          onlyCallUniswap,
          // more policies...
        ],
      })
    }}>
      Create Session
    </button>
  )
}
```

### Using Sessions

Now, you can send transactions with [`useSendUserOperationWithSession`](/react/use-send-useroperation-with-session):

```tsx
import { useSendUserOperationWithSession, useKernelClient } from '@zerodev/waas';
import { parseAbi } from 'viem';
 
function App() {
  const { write } = useSendUserOperationWithSession();
  const { address } = useKernelClient();
 
  return (
    <button 
      onClick={() =>
        write([
          // transactions...
        ])
      }
    >
      Send UserOp With Session
    </button>
  )
}
```

Sessions are automatically stored inside local storage, so they will persist even after your user closes their tab, until they expire due to policies.

## Core API

Refer to [Permissions docs](/smart-wallet/permissions/intro).