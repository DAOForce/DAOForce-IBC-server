const { abi } = require('../abi/tokenABI');
const { rpcProviderUrl } = require('./utils/deployInfo');
const { varNameToString, sendTransaction } = require('./utils/transactionSender');
const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);

const privateKey = process.env.DEPLOY_PRIVATE_KEY;  // IBC server account private key

const wallet = new ethers.Wallet(privateKey,provider);

function addVotingPower(account_address, token_address, amount) {
  const contract = new ethers.Contract(token_address,abi,wallet);
  const addIBCVotingPowerPromise = contract.addIBCVotingPower(account_address, amount);
  sendTransaction(addIBCVotingPowerPromise, varNameToString({ addIBCVotingPowerPromise }));
}

function subtractVotingPower(account_address, token_address, amount) {
  const contract = new ethers.Contract(token_address,abi,wallet);
  const subtractIBCVotingPowerPromise = contract.subtractIBCVotingPower(account_address, amount);
  sendTransaction(subtractIBCVotingPowerPromise, varNameToString({ subtractIBCVotingPowerPromise }));
}

export {addVotingPower, subtractVotingPower};