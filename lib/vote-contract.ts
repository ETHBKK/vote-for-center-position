"use client";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdweb-client";
import { scrollDevnet } from "@/const/chains";
import { l2VoteContractAddress } from "@/const/contracts";

export const l2VoteContract = getContract({
  client,
  chain: scrollDevnet,
  address: l2VoteContractAddress,
  abi: [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_loadL1StorageAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "_loadDataFromL1",
      "inputs": [
        { "name": "_address", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "canVote",
      "inputs": [
        {
          "name": "_teamMemberId",
          "type": "uint8",
          "internalType": "enum Vote.TeamMemberID"
        }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "loadL1Storage",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract LoadL1Storage"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "memberIDToVotes",
      "inputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "enum Vote.TeamMemberID"
        }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenIDToVotedMemberID",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "enum Vote.TeamMemberID"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "vote",
      "inputs": [
        {
          "name": "_teamMemberId",
          "type": "uint8",
          "internalType": "enum Vote.TeamMemberID"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "VoteCast",
      "inputs": [
        {
          "name": "voter",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "teamMemberId",
          "type": "uint8",
          "indexed": false,
          "internalType": "enum Vote.TeamMemberID"
        }
      ],
      "anonymous": false
    }
  ],
});
