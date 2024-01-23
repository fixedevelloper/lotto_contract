import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
  WagmiCore,
  WagmiCoreChains,
  WagmiCoreConnectors,
} from "https://unpkg.com/@web3modal/ethereum@2.5.0";

import { Web3Modal } from "https://unpkg.com/@web3modal/html@2.5.0";

// 0. Import wagmi dependencies
const { mainnet, polygon, avalanche, arbitrum } = WagmiCoreChains;
const { configureChains, createConfig,getAccount } = WagmiCore;

// 1. Define chains
const chains = [mainnet, polygon, avalanche, arbitrum];
const projectId = "2aca272d18deb10ff748260da5f78bfd";

// 2. Configure wagmi client
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ chains, version: 2, projectId }),
    new WagmiCoreConnectors.CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Infinix force",
      },
    }),
  ],
  publicClient,
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3Modal = new Web3Modal(
  {
    projectId,
    walletImages: {
      safe: "https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg",
    },
  },
  ethereumClient
);
const account = getAccount()
console.log("************************************")
statusRegister(account)
function statusRegister(account){
    var user = document.getElementById("user_id");
    user.innerText=account.address;
    if (account.isConnected){
        var userID = document.getElementById("newuserID");
        var element = document.getElementById("wallet_connect");
        element.classList.remove("list-group-item-danger");
        element.classList.add("list-group-item-success");
        element.innerText="Wallet connected"
        userID.value=account.address
    }else {
        var element = document.getElementById("wallet_connect");
        element.classList.remove("list-group-item-success");
        element.classList.add("list-group-item-danger");
        element.innerText="Wallet not connected"
    }
    if (account.isConnected){
        var element = document.getElementById("wallet_connect");
        element.classList.remove("list-group-item-danger");
        element.classList.add("list-group-item-success");
    }else {
        var element = document.getElementById("wallet_connect");
        element.classList.remove("list-group-item-success");
        element.classList.add("list-group-item-danger");
    }
}
/**
 * address: undefined
 ​
 connector: undefined
 ​
 isConnected: false
 ​
 isConnecting: true
 ​
 isDisconnected: false
 ​
 isReconnecting: false
 ​
 status: "connecting"
 */
console.log(account)
