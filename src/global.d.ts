import { TW, WalletCore } from "@trustwallet/wallet-core";

declare global {
  interface Window {
    WalletCore: typeof WalletCore;
    TW: typeof TW;
  }
}
