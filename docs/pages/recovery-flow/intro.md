# Recovery Flow

ZeroDev provides a set of pre-built UIs to quickly integrate account recovery into your project.  These are collectively referred to as "recovery flow."

The recovery flow works with Kernel accounts that have set up recovery using the official recovery plugin.  There are two ways to set up recovery:

- [Using our pre-built recovery setup UI.](/recovery-flow/setup)
  - This is super easy to integrate with.

- [Using Kernel.js.](/kerneljs/plugins/recovery)
  - This is harder to integrate with but allows you to customize your user experience.

In either case, once an account has been set up for recovery, the guardian (which may be the user themselves) can recover the user's account through [the recovery portal](/recovery-flow/portal).