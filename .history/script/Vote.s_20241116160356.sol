// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Vote} from "../src/Vote.sol";
import {LoadL1Storage} from "../src/LoadL1Storage.sol";

contract VoteScript is Script {
    Vote public vote;
    LoadL1Storage public loadl1;

    address constant L1_NFT_ADDRESS =
        0xd68F2585797AeC710e2759Fe8c2ea69128337DE4;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        loadl1 = new LoadL1Storage(address(L1_NFT_ADDRESS));

        vote = new Vote(address(loadl1));

        vm.stopBroadcast();
    }
}
