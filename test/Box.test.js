const { expect } = require("chai");

const { accounts, contract } = require("@openzeppelin/test-environment");

// load compiled artifacts
const Box = contract.fromArtifact("Box");

describe("Box", function () {
  const [owner] = accounts;

  beforeEach(async function () {
    // deploy a new box contract for each test
    this.contract = await Box.new({ from: owner });
  });

  // Test case
  it("retrieve returns a value previously stored", async function () {
    // store a val
    await this.box.store(42);

    // Test if the returned val is same
    expect((await this.box.retrieve()).toString()).to.equal("42");
  });
});
