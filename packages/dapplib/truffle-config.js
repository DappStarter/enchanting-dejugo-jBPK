require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss good clip outer solar'; 
let testAccounts = [
"0xb85895ee299c5355aa970f2e9ac5d4f032c56683297904b6a370cfcf091f212c",
"0x8fd17dc14d8f6d8cd2cacb47955aa63ea7f4c5a7d521df117afcbcbb2e1febe1",
"0x5014648d9b34618730aa13606a38eeb48547a336c6e816ae1ead82baddacfcf6",
"0x09f4fa698f78352849964e97930f81940549dae676b75cfe8bd1dcefd643b5ca",
"0xff9645e20876a647bcf5467977d0f6c38f7b1068b8957ce18c60d9e751cba8b7",
"0xd6ca6cb0af03ac3f021433630cc6a3820c4c45adf9e7e92a5c73a9f3369270b3",
"0xa9088eefb5d9651c738dee14ba7c3dc2f82b52e853e28e0ed86fc67f0b307e3e",
"0x45580dd0d530f19542ba2c863cfd0548a953a7b82f52d2abbfbbee93fcdc3a8e",
"0x0203793500c63cd092ff93fb6773133375b8dd2f1af588f9dd38fe9e4e155f74",
"0xb97e9bc6f06f2031de065589b09ef153993dda0703d10327a79813415e6eaa17"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


