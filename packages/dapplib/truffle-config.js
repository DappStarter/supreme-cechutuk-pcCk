require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note mirror property half produce bubble struggle'; 
let testAccounts = [
"0x931cc18a51bbfd3695921c685a778d6a80fbab831ec3838c7b3922918f5e3ccc",
"0x553852db3a42a6f6ae6861670b0eed729810beac5e8610671bd41a9922e9fa1c",
"0xb0d6c177997741b025e70422f338bf9794868b8f1884b09cfa79e31ef41416c4",
"0xa269914aa551b0e7929501bf766e6ce2c3ae1bfa23558c0ba62cca934e0a687f",
"0xac6bccf067699504a628306d8a9d22ac4b23c2bc3d24228cee162b41ab372780",
"0x5a78261e9ea31d8282bc984196f8aae93334c2488cf598ca01b9e7160377052c",
"0xea46138c0e5f1f45a8553a31aa6bfa783a5c7f8e3e2d07a72b887c313dd97348",
"0x804b4efdeef24fed1b67e59f1a4c59f3eb8e532cb100be8487b4a6ce25591adf",
"0xdcd3d2919eb3587a4c43d55e013cbdbf69f9808570db0bc150df7be68482725e",
"0x0c43ed262e33dd87d6752def3294e7a72dcf409fec3d35e2fdcfae2d9360b4c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

