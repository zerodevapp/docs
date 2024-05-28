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

:::info
Check out [a complete code example here](https://github.com/zerodevapp/capabilities-examples/tree/main/session-keys).
:::

With [the capabilities API](/smart-wallet/quickstart-capabilities), you can create a "session" with the wallet by requesting permissions.  Then, transactions can be sent within those permissions, without asking the user for further confirmations.

First, request permissions from the connected wallet using Viem:

```tsx
import { parseAbi } from "viem"
import { walletActionsErc7715 } from "viem/experimental"
import { useWalletClient } from "wagmi"

function App() {
  const {data: walletClient} = useWalletClient()

  const handleIssuePermissions = async () => {
    const session = await walletClient?.extend(walletActionsErc7715()).issuePermissions({
      permissions: [
        {
          type: "contract-call",
          data: {
            permissions: [
                onlyMintToken
                // more policies...
            ]
          }
        },
      ],
      expiry: Math.floor(Date.now().valueOf() / 1000) + 3600,
    })
  }

  return (
    <button disabled={!walletClient}  onClick={() => handleIssuePermissions()}>
      Create Session
    </button>
  );
}
```

Now, every time you want to send a transaction with this session, use the `permissions` capability and include the `permissionsContext` in the `sendCalls` request:

```tsx
import { useSendCalls } from "wagmi/experimental"

function App() {
  const { data, sendCalls } = useSendCalls();
  
  return (
    <button
      onClick={() => {
        sendCalls({
          calls: [
            MintTokenCall
          ],
          capabilities: {
            // paymasterService...  
            permissions: {
              sessionId: session.permissionsContext
            }
          }
        });
      }}
    >
      Mint With Session
    </button>
  );
}
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