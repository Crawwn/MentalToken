require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    polygon: {
      url: "https://polygon-rpc.com", // ana ağ RPC
      accounts: [ process.env.PRIVATE_KEY ],
      // gasPrice gerekirse elle sabitleyebilirsin (örn 30 Gwei):
      // gasPrice: 30_000_000_000
    }
  },
  etherscan: {
  apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
