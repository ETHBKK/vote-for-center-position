// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Test.sol";
import "../src/Vote.sol";
import "../src/LoadL1Storage.sol";
import "../src/MooDengFanNFT.sol";

contract VoteTest is Test {
    Vote public vote;
    LoadL1Storage public loadL1Storage;
    MooDengFan public mooDengFan;

    address public alice = address(0x1);
    address public bob = address(0x2);

    // Storage slots from Vote contract
    uint256 constant L1_BALANCE_STORAGE_SLOT = 3;
    uint256 constant L1_OWNWESHIP_STORAGE_SLOT = 6;

    function setUp() public {
        // Deploy MooDengFan first
        mooDengFan = new MooDengFan();
        // Deploy LoadL1Storage
        loadL1Storage = new LoadL1Storage(address(mooDengFan));
        // Deploy Vote contract with LoadL1Storage address
        vote = new Vote(address(loadL1Storage));

        // Setup mock data for alice
        vm.mockCall(
            address(loadL1Storage),
            abi.encodeWithSelector(
                LoadL1Storage.retrieveL1AddressToMapping.selector,
                L1_BALANCE_STORAGE_SLOT,
                alice
            ),
            abi.encode(1) // Balance of 1
        );

        vm.mockCall(
            address(loadL1Storage),
            abi.encodeWithSelector(
                LoadL1Storage.retrieveL1AddressToNestMapping.selector,
                L1_OWNWESHIP_STORAGE_SLOT,
                alice,
                0
            ),
            abi.encode(1) // Token ID 1
        );
    }

    function testVoteSuccess() public {
        vm.prank(alice);
        vote.vote(Vote.TeamMemberID.ALICE);

        assertEq(
            uint256(vote.tokenIDToVotedMemberID(1)),
            uint256(Vote.TeamMemberID.ALICE)
        );
        assertEq(vote.memberIDToVotes(Vote.TeamMemberID.ALICE), 1);
    }

    function testCannotVoteTwice() public {
        vm.startPrank(alice);

        vote.vote(Vote.TeamMemberID.ALICE);

        vm.expectRevert("You have already voted");
        vote.vote(Vote.TeamMemberID.BOB);

        vm.stopPrank();
    }

    function testCannotVoteWithoutBalance() public {
        // Setup mock data for bob with 0 balance
        vm.mockCall(
            address(loadL1Storage),
            abi.encodeWithSelector(
                LoadL1Storage.retrieveL1AddressToMapping.selector,
                L1_BALANCE_STORAGE_SLOT,
                bob
            ),
            abi.encode(0)
        );

        // Add mock for token ID data
        vm.mockCall(
            address(loadL1Storage),
            abi.encodeWithSelector(
                LoadL1Storage.retrieveL1AddressToNestMapping.selector,
                L1_OWNWESHIP_STORAGE_SLOT,
                bob,
                0
            ),
            abi.encode(2) // Token ID 2 for bob
        );

        vm.prank(bob);
        vm.expectRevert("You don't have any balance to vote");
        vote.vote(Vote.TeamMemberID.BOB);
    }

    function testVoteEmitsEvent() public {
        vm.prank(alice);

        vm.expectEmit(true, true, false, true);
        emit Vote.VoteCast(alice, Vote.TeamMemberID.ALICE);

        vote.vote(Vote.TeamMemberID.ALICE);
    }
}
