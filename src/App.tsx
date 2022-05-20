import { useState } from 'react';

function App() {
  const [mnemonic, setMnemonic] = useState('')

  const handleCreateWallet = () => {
    const WalletCore = (window as any).Module;
    const wallet = new WalletCore.HDWallet.create(128, "");

    console.log(wallet.mnemonic());
    setMnemonic(wallet.mnemonic());
  }

  return (
    <div>
      <button onClick={handleCreateWallet}>Create Wallet</button>
      <div>Mnemonic: {mnemonic}</div>
    </div>
  );
}

export default App;
