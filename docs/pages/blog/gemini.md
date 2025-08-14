---
date: 2025-08-14
layout: minimal
---

# How Gemini Built a Universal Smart Wallet Using the ZeroDev WebAuthn Validator

At ZeroDev, we believe in the power of open standards and modular architecture. That's why we built [Kernel](https://github.com/zerodevapp/kernel), our flagship smart account, on top of [ERC-7579](https://erc7579.com/) - the modular smart account standard that's rapidly becoming the foundation for next-generation wallets across the Ethereum ecosystem.

ERC-7579 defines a standardized way to build modular smart accounts with interchangeable components - validators for signature verification, executors for transaction execution, hooks for custom logic, and more. This modularity means that innovations in one component can benefit the entire ecosystem. When we build a new validator, any ERC-7579-compatible wallet can use it. When someone improves an executor, every Kernel account can leverage that improvement.

This philosophy of open, composable infrastructure is what enabled Gemini to rapidly develop their new smart wallet. Instead of building custom signature verification from scratch, Gemini could simply derive security from ZeroDev's open-source and audited WebAuthn validator plugin.

## Gemini's Challenge: One Wallet, Every Chain

When Gemini set out to build their next-generation smart wallet, they had ambitious requirements:

- **Universal address** - Users should have the same address on every EVM chain
- **Biometric authentication** - Leverage WebAuthn for Face ID, Touch ID, and Windows Hello
- **Optimal gas costs** - Take advantage of chain-specific optimizations where available

And here's how ZeroDev WebAuthn Validator achieved all three:

## The Secret Sauce: ZeroDev's WebAuthn Validator

[The ZeroDev WebAuthn validator](https://github.com/zerodevapp/kernel-7579-plugins/tree/master/validators/webauthn), implements an innovative "duo mode" passkey verification:

```solidity
address constant DAIMO_VERIFIER = 0xc2b78104907F722DABAc4C69f826a522B2754De4;
address constant PRECOMPILED_VERIFIER = 0x0000000000000000000000000000000000000100;
```

To put it simply, the validator verifies passkey signatures with native RIP-7212 (more on this later) when available, and falls back to [Daimo's passkey implementation](https://github.com/daimo-eth/daimo) if RIP-7212 is not available.  Here's how it looks like in code:

```solidity
function verifySignatureAllowMalleability(
    bytes32 message_hash,
    uint256 r,
    uint256 s,
    uint256 x,
    uint256 y,
    bool usePrecompiled
) internal view returns (bool) {
    bytes memory args = abi.encode(message_hash, r, s, x, y);
    
    if (usePrecompiled) {
        // Use RIP-7212 precompiled for gas-efficient verification
        (bool success, bytes memory ret) = PRECOMPILED_VERIFIER.staticcall(args);
        if (success == false || ret.length == 0) {
            return false;
        }
        return abi.decode(ret, (uint256)) == 1;
    } else {
        // Fall back to Daimo verifier for universal compatibility
        (, bytes memory ret) = DAIMO_VERIFIER.staticcall(args);
        return abi.decode(ret, (uint256)) == 1;
    }
}
```

## WebAuthn + RIP-7212: The Perfect Combination

RIP-7212 is a "rollup improvement proposal" implemented by most rollups today.  On chains supporting RIP-7212, the precompiled contract at `0x0100` provides:

- **10-100x gas savings** over Solidity implementations
- **Native performance** for P256 operations
- **Standardized interface** across chains

Thanks to the "duo mode" implemented by the ZeroDev WebAuthn Validator, Gemini wallets will work on every chain, but they will enjoy the improved performance from RIP-7212 when the underlying chain supports it.  Furthermore, a wallet can be deployed on a chain with no support for 7212, and it will automatically start saving gas when the underlying chain adds support for RIP-7212.

## Universal address with duo-mode validator

Since the ZeroDev WebAuthn Validator implements both validation modes inside the same codebase with smart fallbacks, Gemini wallets can use the same exact plugin on both chains that support RIP-7212 and those who don't.  As a result, these wallets share a universal address across all EVM chains, ensuring that Gemini users get the best interoperability and UX whether they are on an "old chain" like Ethereum or newer rollups.

## Getting Started with ZeroDev

Inspired by Gemini's smart wallets?  [Start building with ZeroDev's modular smart accounts today](https://docs.zerodev.app), with a whole ecosystem of powerful smart account plugins at your disposal.

