import { abi } from "../abi/tokenABI.js";
import { varNameToString, sendTransaction } from "./utils/transactionSender.js";
import { ethers } from "ethers";
import "../env.js";

console.log('process.env.RpcProviderUrl', process.env.RpcProviderUrl);
const provider = new ethers.providers.JsonRpcProvider(process.env.RpcProviderUrl);

const privateKey = process.env.PRIVATE_KEY; // IBC server account private key

console.log('privateKey', privateKey);

const wallet = new ethers.Wallet(privateKey, provider);

function addVotingPower(account_address, token_address, amount) {
  const our_token_address = '0xf165029bfc1a40a93E5EC3F4d0148066ABA542fd'
  console.log('our_token_address', our_token_address);
  console.log('wallet', wallet);
  const contract = new ethers.Contract(our_token_address, abi, wallet);
  console.log('account_address[0]', account_address[0]);
  console.log('amount[0]', amount[0]);
  const addIBCVotingPowerPromise = contract.addIBCVotingPower(
    account_address[0],
    amount[0]
  );
  sendTransaction(
    addIBCVotingPowerPromise,
    varNameToString({ addIBCVotingPowerPromise })
  )
}

function subtractVotingPower(account_address, token_address, amount) {
  console.log('subtract', account_address[0], amount[0])
  const contract = new ethers.Contract(token_address, abi, wallet);
  const subtractIBCVotingPowerPromise = contract.subtractIBCVotingPower(
    account_address[0],
    amount[0]
  );
  sendTransaction(
    subtractIBCVotingPowerPromise,
    varNameToString({ subtractIBCVotingPowerPromise })
  );
}

export { addVotingPower, subtractVotingPower };
