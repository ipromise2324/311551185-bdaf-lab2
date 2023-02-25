# 311551185-bdaf-lab2(Vanity address generator)
## Requirements
- Input a string `_pre`, output a mnemonic that would create a public key with `_pre` being its prefix. e.g. input “1234”, output a mnemonic that has a public key with `0x1234.....567`
- One should obtain the exact public key by inputing the generated mnemonic into Metamask.
    - Alternatively, this can be checked with other tools such as `hardhat` or `truffle` (input mnemonic and they will provide the available public keys)
- For HDWallet path, use `m/44’/60’/0’/0/`
- Use **Javascript/NodeJS** to implement
## How to
- The general flow of generating a wallet should be:
    - Input target prefix
    - Obtain entropy
    - Convert entropy to seed
    - Use seed to obtain hdwallet
- The flow to obtain a vanity address would be repeating the above until you find an address that matches the prefix.
## 結果展示
![](https://i.imgur.com/8Yzq3of.jpg)

- 先請使用者輸入TargetPrefix(不需要輸入0x，此Program會自動幫使用者添加上去)
- 輸入完成後，開始尋找符合TargetPrefix的Address，成功搜尋到後印出Find it!!!，並回傳助記詞，和地址
- 印出符合TargetPrefix的助記詞和地址
## 執行方式
- 可以直接Download Zip file，即可直接執行
- 或是使用311551185_Lab2.js的code，並把packge安裝好，也可以執行
## 需要安裝的packge
![](https://i.imgur.com/ueYtS3I.png)
npm install bip39


![](https://i.imgur.com/7NPALbR.png)
npm install ethereumjs-wallet

![](https://i.imgur.com/IEkTMkm.png)
npm install prompt-sync


## Reference
1. https://github.com/ethereumjs/ethereumjs-wallet
2. https://github.com/bitcoinjs/bip39
3. https://medium.com/taipei-ethereum-meetup/%E8%99%9B%E6%93%AC%E8%B2%A8%E5%B9%A3%E9%8C%A2%E5%8C%85-%E5%BE%9E-bip32-bip39-bip44-%E5%88%B0-ethereum-hd-%EF%BD%97allet-a40b1c87c1f7
4. https://medium.com/coinmonks/hd-wallets-in-ethers-js-e173190e4858
