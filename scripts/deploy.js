async function main() {
  // gets the contract to deploy
  // ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
  // Box written below is a factory for instances of our box contract.
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box..");
  const box = await Box.deploy();
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Box deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
