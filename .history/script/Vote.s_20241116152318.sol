// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Vote} from "../src/Vote.sol";
import {LoadL1Storage} from "../src/LoadL1Storage.sol";

contract VoteScript is Script {
    Vote public vote;
    LoadL1Storage public loadl1;

    const L1_NFT_ADDRESS = 0x0000000000000000000000000000000000000000;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        vote = new Vote();

        loadl1 = new LoadL1Storage();

        vm.stopBroadcast();
    }
}
