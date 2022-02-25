const { ethers } = require("hardhat");

async function main() {
  // retrieve acc from the local node
  //   const accounts = await ethers.provider.listAccounts();
  //   console.log(accounts);

  // setting up ethers contract
  // representing the box instance
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const Box = await ethers.getContractFactory("Box");
  const box = await Box.attach(address);

  // transaction to store a new val in the box
  await box.store(23);

  // retrieve stored value
  const value = await box.retrieve();
  console.log("Box value is", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
