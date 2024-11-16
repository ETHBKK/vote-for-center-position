"use client";

import { useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";

import { useTwebContext } from "@/contexts/thirdweb";
import { client } from "@/lib/thirdweb-client";
import { scrollDevnet } from "@/const/chains";
import { l2VoteContractAddress } from "@/const/contracts";
import ImageGallery from "@/components/image-gallery";

const l2VoteContract = getContract({
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
      "name": "hasVoted",
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
      "type": "function",
      "name": "votes",
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
  ]
});

export default function Home() {

  const { loggedIn } = useTwebContext();

  const { data: vote1Data, isPending: isVote1DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "votes",
    params: [1],
  });

  const { data: vote2Data, isPending: isVote2DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "votes",
    params: [2],
  });

  const { data: vote3Data, isPending: isVote3DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "votes",
    params: [3],
  });

  const { data: vote4Data, isPending: isVote4DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "votes",
    params: [4],
  });

  const { data: vote5Data, isPending: isVote5DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "votes",
    params: [5],
  });

  console.log({ vote1Data, isVote1DataPending, vote2Data, isVote2DataPending, vote3Data, isVote3DataPending, vote4Data, isVote4DataPending, vote5Data, isVote5DataPending })


  if (!loggedIn) {
    return (
      <section>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Oops! Login to vote for your favourite Moo Deng member to stand in center!</h3>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-center my-6">Vote to select the girl group member for the center position</h1>
      <ImageGallery />
    </section>
  );
}
