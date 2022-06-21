
export const initWasm = () => {
  return new Promise<void>(resolve => {
    const init = {
      preRun: [],
      postRun: [],
      onRuntimeInitialized: () => {
        console.info('wallet-core wasm loaded');
        resolve();
      }
    };
  
    (window as any).Module = init;
    const { TW } = require('@trustwallet/wallet-core');
    (window as any).TW = TW;
  })
}
