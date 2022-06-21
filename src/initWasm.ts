
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
  
    // Only for init.
    (window as any).Module = init;
    window.TW = require('@trustwallet/wallet-core').TW;
  })
}
