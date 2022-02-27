const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    // signer represents an eth acc
    // here we are getting a list of the accs in the hardhat network
    const [owner] = await ethers.getSigners();

    // contractfactory is abstraction used to deploy new smart contract
    // Token, here is a factory for instances of our token contract
    const Token = await ethers.getContractFactory("Token");

    // deploy() will start the deployment
    // returns a promise that resolves to a contract
    const hardhatToken = await Token.deploy();

    // balanceof() to get the balance of the owner acc
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    // totalsupply() returns the token's supply amt
    // checking it equal to ownerBalance
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
