const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  // Update the values with your own
  'monkey always hungry still design barely believe outside ready harbor food away',
  'https://rinkeby.infura.io/v3/15c1d33656994b88a92d8d9e987e441b'

);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  // console.log('Sending transaction...');
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '100000', from: accounts[0] });
  console.log('Contract has been deployed to', result.options.address);
  // console.log('Contract address:', result.options.address);
  provider.engine.stop();
};
deploy();
