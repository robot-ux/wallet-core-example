import { TW, WalletCore } from '@trustwallet/wallet-core'

declare global {
  interface Window {
    Module: typeof WalletCore;
    TW: typeof TW;
  }
}
