const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Box", function () {
  let deployedContract;

  beforeEach(async function () {
    // deploy a new box contract for each test
    const signers = await ethers.getSigners();
    // console.log(ethers.ContractFactory);
    const BoxFactory = await ethers.getContractFactory("Boxx");
    // console.log("BoxFactory");
    deployedContract = await BoxFactory.deploy();
  });

  // Test case
  it("retrieve returns a value previously stored", async function () {
    // console.log("Address", deployedContract.address);
    // store a val
    await deployedContract.store(42);
    // Test if the returned val is same
    expect((await deployedContract.retrieve()).toString()).to.equal("42");
  });
});
