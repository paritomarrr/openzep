//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
    uint256 private _value;

    //emit when the value gets change
    event valueChanged(uint256 value);

    // stores new value in the contract
    function store(uint256 value) public {
        value = _value;
        emit valueChanged(value);
    }

    // read the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
