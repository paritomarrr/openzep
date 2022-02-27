//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    // name variable to identify the token
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    // fixed amt of token stored
    uint256 public totalSupply = 1000000;

    // var to store ethereum accs
    address public owner;

    // mapping used to store each acc balance
    mapping(address => uint256) balances;

    // contract initialization
    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    // func to transfer tokens
    // 'external' modifier makes func only callable from outside of contract
    function transfer(address to, uint256 amount) external {
        console.log("Sender balance is %s tokens", balances[msg.sender]);
        console.log("Trying to send %s tokens to %s", amount, to);

        // check balance
        require(balances[msg.sender] >= amount, "Not enough Tokens");

        // transfer the amt
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    // read-only func to retrieve token balance of a given acc
    // view -> view only, cannot modify the contract's state
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
