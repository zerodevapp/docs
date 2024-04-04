---
authors:
    - "[derek](https://twitter.com/decentrek)"
date: 2024-03-27
layout: minimal
---

# Who, when, what — a framework for thinking about plugins, and 7579 vs 6900

::authors

In our [last blog post](https://docs.zerodev.app/blog/why-7579-over-6900), we argued in favor of ERC-7579 over ERC-6900 as a standard for modular smart accounts.  The blog generated a lot of healthy debate, including [a detailed response](https://mirror.xyz/probablynoam.eth/ZM8k-YoVbC-ih13zPMPZ5q4iZ7wEHuWEcRbQNrRiURU) from Noam at Alchemy.

But you might wonder, *why* do 7579 and 6900 differ at all?  That is, why would two groups of rational and intelligent people disagree so strongly on a technical issue?  Shouldn’t everyone be arriving at the same, *correct* conclusion?

In this post, we will show that 7579 and 6900 differ due to a fundamental difference in *philosophy*.  That is, there’s no strict right and wrong — it’s a matter of your perspective.  Yes, just like most things in life.

To begin, let’s examine the most fundamental question: what does a smart account plugin even do?

# Who, when, what

Every use case of smart account plugins must answer three questions: who, when, and what.

- *Who* is authorized to perform this action?
- *When* (i.e. under what condition) can they perform this action?
- *What* exactly is this action?

Here are some examples of viewing use cases through this lens:

- NFT subscription: the DApp (who) can mint an NFT for me (what) once every month (when).
- Limit orders: the DApp (who) can send a trade for me (what) when the price reaches a given point (when).
- Social recovery: a set of guardians (who) can change the account signer for me (what) at any time (when).

In modular smart account parlance, *who* is the *validator*, *when* is the *hook* (we also call it “policy” in Kernel), and *what* is the *executor*.  Though note that the line is not cleanly defined — for example, a validator could be implemented in such a way that it answers both *who* and *when.*  But generally we believe that a well-designed plugin will answer only one of these three questions, to keep the scope small and clean.

# Who puts the pieces together?

This leads us to ask: if a plugin only answers one of these three questions, who is responsible for putting three plugins together to solve a use case?

Therein lies the key difference between 7579’s and 6900’s design philosophy:

- ERC-6900 believes that it’s the plugin developer’s responsibility to decide how plugins fit together.
- ERC-7579 believes that it’s the plugin user’s responsibility to decide how plugins fit together.

When you develop a plugin in 6900, you specify a “manifest” that lists the dependencies between plugins.  For example, if you are developing a social recovery plugin, you might specify in the manifest that the executor that updates the account signer (what) must be validated through the guardians plugin (who).

In 7579, no such dependencies need to be specified when plugins are developed.  So the plugin developer would develop the executor (what), and another developer may develop the validator (who), and it’s only when the user installs the plugins that they specify that the executor must be validated through the validator.  Note that when we say “plugin user” here, we don’t mean the end user (human) — in practice it’s usually the DApp that is the “plugin user” that puts different plugins together for the user to install onto their account.

That’s why you might hear the statement that “ERC-6900 is ERC-7579 plus permissions,” which is not far from the truth.  The “permissions” part refers to how plugins are tied together, i.e. how execution plugins are associated with validation plugins.  ERC-6900 is opinionated about permissions, whereas ERC-7579 leaves permissions out of scope.

# Which approach is reasonable?

It depends on what you prioritize.  When each plugin specifies its own dependencies, you achieve higher portability because the DApp doesn’t need to decide how plugins fit together.  However, plugins become less composable, since you can’t mix-and-match different “who,” “when,” and “what” plugins given their hardcoded dependencies.

With Kernel, we opt for composable plugins, because we believe that:

- It makes plugin developers’s lives easier since they can develop smaller, simpler plugins.
- It gives more power to users & DApps because they can mix-and-match plugins to solve use cases **that the original plugin developers may not have thought of**.

For example, consider Kernel’s [signers](https://github.com/zerodevapp/kernel/tree/dev/src/validator/modularPermission/signers) (who) and [policies](https://github.com/zerodevapp/kernel/tree/dev/src/validator/modularPermission/policies) (when) plugins.  You can match whichever signer with whichever policies, so the number of use cases that you can enable is exponential.  E.g.:

- Use a ECDSA signer with a gas policy.
- Use a WebAuthn signer with a gas policy.
- Use a ECDSA signer with a gas policy + contract policy.
- Use a WebAuthn signer with a execution policy.
- …

By not hardcoding any dependencies between plugins, we allow DApp & wallet developers to compose plugins at will.  Using the ZeroDev SDK, the code looks like this:

```tsx
const account = await toKernelAccount({
    signer: webauthnSigner,
    policies: [contractPolicy, gasPolicy]
})
```

In other words, with Kernel & ERC-7579, you get to compose plugins at “run time” (when plugins are used), as opposed to at “compile time” (when plugins were built). 

# Last words

It’s important to note that both ERC-6900 and ERC-7579 are actively evolving, so some of the details in this article may be outdated by the time you read it.  That said, we do believe that the difference in philosophy will likely persist, which will drive the design decisions that each side makes as they continue to improve the standards.

In a way, this very debate proves the point that the “proper” way to design smart accounts is far from settled, so there is a sense in which it’s not even clear whether enforcing a standard at this point is helpful at all.  That’s why we push for smaller standards like ERC-7579 over bigger standards such as ERC-6900, so that we preserve room for projects to experiment and innovate, which ultimately will result in better smart accounts for the next billion Web3 users.
