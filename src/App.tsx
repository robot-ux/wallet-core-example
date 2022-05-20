import { initWasm } from './initWasm';

initWasm();

function App() {
  const handleCreateWallet = () => {
    const WalletCore = (window as any).Module;
    const wallet = new WalletCore.HDWallet.create(128, "");

    console.log(wallet.mnemonic())
  }

  return (
    <div>
      <button onClick={handleCreateWallet}>Create Wallet</button>
    </div>
  );
}

export default App;
