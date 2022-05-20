
export const initWasm = () => {
  return new Promise<void>(resolve => {
    const init = {
      preRun: [],
      postRun: [],
      onRuntimeInitialized: () => {
        console.info('wallet-core is ready....');
        resolve();
      },
      totalDependencies: 0,
      monitorRunDependencies: (t: string) => console.log('monitorRunDependencies: ', t)
    };
  
    (window as any).Module = init;
    require('@trustwallet/wallet-core');
  })
}
