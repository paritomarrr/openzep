//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Boxx {
    uint256 private _value;

    //emit when the value gets change
    event valueChanged(uint256 value);

    // The onlyOwner modifier restricts who can call the store function
    function store(uint256 value) public {
        _value = value;
        emit valueChanged(value);
    }

    // read the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
