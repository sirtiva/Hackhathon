const { ethers } = require("hardhat");

async function main() {
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so GuessNumber here is a factory for instances of our contract.
    */
    const GuessNumber = await ethers.getContractFactory("GuessNumber");

    // here we deploy the contract
    const deployedGuessNumber = await GuessNumber.deploy;
    // 10 is the Maximum number of whitelisted addresses allowed

    // Wait for it to finish deploying
    await deployedGuessNumber.deploy();

    // print the address of the deployed contract
    console.log("Contract Address:", deployedGuessNumber.address);
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });