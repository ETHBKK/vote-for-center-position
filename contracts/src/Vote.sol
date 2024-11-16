// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./LoadL1Storage.sol";

contract Vote {
    LoadL1Storage public loadL1Storage;

    uint256 constant L1_BALANCE_STORAGE_SLOT = 3;

    uint256 constant L1_OWNWESHIP_STORAGE_SLOT = 6;

    // in our caseeach user just allow to mint one NFT
    uint256 constant USER_TOKEN_INDEX = 0;

    // Enum for TeamMemberID
    enum TeamMemberID {
        NONE,
        ALICE,
        BOB,
        CAROL,
        DAVE,
        EVE
    }

    constructor(address _loadL1StorageAddress) {
        loadL1Storage = LoadL1Storage(_loadL1StorageAddress);
    }

    // Mapping from CandidateId to vote count
    mapping(TeamMemberID => uint256) public memberIDToVotes;

    // Mapping to track if an address has voted
    mapping(uint256 => TeamMemberID) public tokenIDToVotedMemberID;

    // Event to emit when a vote is cast
    event VoteCast(address voter, TeamMemberID teamMemberId);

    // Function to vote for a candidate
    function vote(TeamMemberID _teamMemberId) public {
        require(canVote(_teamMemberId), "You have already voted");

        memberIDToVotes[_teamMemberId]++;

        emit VoteCast(msg.sender, _teamMemberId);
    }

    // Function to check if caller can vote
    function canVote(TeamMemberID _teamMemberId) public returns (bool) {
        uint256 tokenId = _loadDataFromL1(msg.sender);
        if (tokenIDToVotedMemberID[tokenId] == TeamMemberID.NONE) {
            tokenIDToVotedMemberID[tokenId] = _teamMemberId;
            return true;
        }
        return false;
    }

    // Function to check if caller can vote
    function _loadDataFromL1(address _address) public view returns (uint256) {
        // check balance
        uint256 balance = loadL1Storage.retrieveL1AddressToMapping(
            L1_BALANCE_STORAGE_SLOT,
            _address
        );
        require(balance == 1, "You don't have any balance");

        // get token_id from L1
        uint256 tokenId = loadL1Storage.retrieveL1AddressToNestMapping(
            L1_OWNWESHIP_STORAGE_SLOT,
            _address,
            USER_TOKEN_INDEX
        );
        return tokenId;
    }
}
