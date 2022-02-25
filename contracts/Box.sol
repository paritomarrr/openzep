//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// auth from access-control
// import "./access-control/Auth.sol";

// importing ownable contract from openzep contract lib
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;

    //emit when the value gets change
    event valueChanged(uint256 value);

    // The onlyOwner modifier restricts who can call the store function
    function store(uint256 value) public onlyOwner {
        _value = value;
        emit valueChanged(value);
    }

    // read the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
