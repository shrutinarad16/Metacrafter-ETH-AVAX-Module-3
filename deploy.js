const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const MyToken = await ethers.getContractFactory("MyToken");

  // Deploy the contract
  const myToken = await MyToken.deploy(1000000); // Replace with desired initial supply

  // Wait for the contract to be mined
  await myToken.deployed();

  // Log the contract address
  console.log("MyToken deployed to:", myToken.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });