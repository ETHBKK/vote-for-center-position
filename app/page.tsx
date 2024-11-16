"use client";

import { useReadContract } from "thirdweb/react";

import { useTwebContext } from "@/contexts/thirdweb";
import ImageGallery from "@/components/image-gallery";
import { l2VoteContract } from "@/lib/vote-contract";


export default function Home() {

  const { loggedIn } = useTwebContext();

  const { data: vote1Data, isPending: isVote1DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "memberIDToVotes",
    params: [1],
  });

  const { data: vote2Data, isPending: isVote2DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "memberIDToVotes",
    params: [2],
  });

  const { data: vote3Data, isPending: isVote3DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "memberIDToVotes",
    params: [3],
  });

  const { data: vote4Data, isPending: isVote4DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "memberIDToVotes",
    params: [4],
  });

  const { data: vote5Data, isPending: isVote5DataPending } = useReadContract({
    contract: l2VoteContract,
    method: "memberIDToVotes",
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
