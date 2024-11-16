// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {LoadL1Storage} from "../src/LoadL1Storage.sol";

contract LoadL1StorageScript is Script {
    LoadL1Storage public loadL1;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        loadL1 = new LoadL1Storage();

        vm.stopBroadcast();
    }
}
