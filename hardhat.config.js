require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");

const { extendEnvironment } = require("hardhat/config");
const { MNEMONIC, PRIVATE_KEY, INFURA_API_KEY, ETHERSCAN_API_KEY } = require('./secrets.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  },
  defaultNetwork: "hardhat", // <-- change here for other network, default use hardhat network.
  networks: {
  	hardhat: {
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 1,
      // accounts: {MNEMONIC: MNEMONIC}
      accounts: [PRIVATE_KEY]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 3,
      gasPrice: 20000000000,
      // accounts: {MNEMONIC: MNEMONIC}
      accounts: [PRIVATE_KEY]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 4,
      gasPrice: 20000000000,
      // accounts: {MNEMONIC: MNEMONIC}
      accounts: [PRIVATE_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 5,
      gasPrice: 20000000000,
      // accounts: {MNEMONIC: MNEMONIC}
      accounts: [PRIVATE_KEY]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 1000000000,
      // accounts: {MNEMONIC: MNEMONIC}
      accounts: [PRIVATE_KEY]
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      chainId: 97,
      // accounts: {MNEMONIC: MNEMONIC}
      accounts: [PRIVATE_KEY]
    },
  },
  solidity: {
  version: "0.8.16",
  settings: {
    optimizer: {
      enabled: false
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 200000
  }
};
