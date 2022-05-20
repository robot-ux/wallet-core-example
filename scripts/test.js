const { WalletCore, TW } = require('@trustwallet/wallet-core');


const demo = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const wallet = new WalletCore.HDWallet.create(256, Buffer.from("password"));
  console.log(wallet.mnemonic());
}
demo();


