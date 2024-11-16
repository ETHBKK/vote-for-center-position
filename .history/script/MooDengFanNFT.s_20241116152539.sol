// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MooDengFan} from "../src/MooDengFanNFT.sol";

contract MooDengFanNFTScript is Script {
    MooDengFan public mooDengFan;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        mooDengFan = new MooDengFan(address(this));

        vm.stopBroadcast();
    }
}
