console.log("311551185_Lab2:");
//import package we need
const prompt = require('prompt-sync')();
const bip39 = require('bip39');
const { default: EthereumHDKey } = require('ethereumjs-wallet/dist/hdkey');
const ethereumjsUtil = require('ethereumjs-util');

// Find an address that matches the prefix
async function vanityAddressGenerater(targetPrefix) {
  let mnemonic, seed, hdWallet, address;
  while (true) {
    
    mnemonic = bip39.generateMnemonic();// Create mnemonic code(entropy)
    /*
      Create HD Wallet
    */
    seed = await bip39.mnemonicToSeed(mnemonic);// Transform mnemonic code to binary seed
    hdWallet = EthereumHDKey.fromMasterSeed(seed);//Master key
    /*
        Create Eth Address
    */
    const path = "m/44'/60'/0'/0/0";// HDWallet path
    const keyPair = hdWallet.derivePath(path);// Create keypair
    const wallet = keyPair.getWallet();// Use keypair to create wallet object
    address = `0x${wallet.getAddress().toString('hex')}`;// Get address
    // Check whether the address matches the prefix or not.
    if (address.startsWith(targetPrefix)) {
      // If address start wtih targetPrefix , then it can break and return ans
      console.log("Find it!!!")
      console.log(address)
      break;
    }
    console.log(address)
    
  }

  // Return Mnemonic phrase and Address
  return { mnemonic, address };
}

// Ask user to input prefix string , program will attach 0x before prefix string
var input = prompt("Input ths _pre string (program will attach 0x for you): ");
const targetPrefix = "0x"+input;//attach 0x before prefix string
console.log("Find address start with : 0x"+input+"...\n");
console.log("Start findin1g : ");
vanityAddressGenerater(targetPrefix)
  .then(({ mnemonic, address }) => {
    console.log(`Mnemonic phrase: ${mnemonic}`);
    console.log(`Address: ${address}`);
  });
