/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle"); // needed to resolve hre.ethers

// Use a file called ".env" next to this file for private info such as keys, eg:
// PRIVATE_KEY = "<privatekey>"
// .gitignore is set up so the .env file will not be in your commit
require('dotenv').config();
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    compilers: [
      { version: "0.6.12" }
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://rpc.ftm.tools`,
        blockNumber: 31160361
      }
    },
    avax: {
      chainId: 43114,
      url: `https://api.avax.network/ext/bc/C/rpc`,
      accounts: { mnemonic: `` },
    },
    polygon: {
        chainId: 137,
        url: `https://polygon-rpc.com`,
        blockNumber: 22769100,
        accounts: { mnemonic: `test test test test test test test test` },
    },
    arbitrum: {
      chainId: 42161,
      url: `https://arb1.arbitrum.io/rpc`,
      accounts: [ `0x${PRIVATE_KEY}` ],
    },
    fantom: {
      chainId: 250,
      url: `https://rpc.ftm.tools`,
      accounts: [ `0x${PRIVATE_KEY}` ],
    },
    harmony: {
      chainId: 1666600000,
      url: `https://api.harmony.one`,
      accounts: [ `0x${PRIVATE_KEY}` ],
    },
    harmonytest: {
      url: `https://api.s0.b.hmny.io`,
      gas: 210000000,
      gasPrice: 8000000000,
    }
  },
  mocha: {
    timeout: 60000
  }
};