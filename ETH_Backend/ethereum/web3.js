import Web3 from "web3";

let web3;

if (typeof typeof window.ethereum !== "undefined" && window !== "undefined") {
  // Metamask is running on the browser.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // The user might not be using Metamask or not connected to server browser yet.
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/3653f37327c24afeb256c5e417a9d98e"
  );
  web3 = new Web3(provider);
}

export default web3;
