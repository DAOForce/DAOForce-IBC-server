import { ethers } from "ethers";

/**
 * Method call transaction sender
 */

export const varNameToString = (varObj) => Object.keys(varObj)[0]; // extract variable name string from variable object.

export const sendTransaction = (promise, methodPromiseName) => {
  promise.then(function (transaction) {
    console.log("=======================================================");
    console.log("[output]", methodPromiseName, "\n");
    console.log(transaction);

    // BigNumber to Ether format
    if (transaction instanceof ethers.BigNumber) {
      console.log(">>> Ether format: ", ethers.utils.formatEther(transaction));
    }
  });
};
