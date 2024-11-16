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

  // Map votes to image data
  const images = [
    { id: 1, src: "/idols/1.webp", alt: "Image 1", votes: vote1Data || 0 },
    { id: 2, src: "/idols/2.webp", alt: "Image 2", votes: vote2Data || 0 },
    { id: 3, src: "/idols/3.webp", alt: "Image 3", votes: vote3Data || 0 },
    { id: 4, src: "/idols/4.webp", alt: "Image 4", votes: vote4Data || 0 },
    { id: 5, src: "/idols/5.webp", alt: "Image 5", votes: vote5Data || 0 },
  ];

  // Sort images by vote count for specific order
  const sortedImages = [...images].sort((a, b) => Number(b.votes) - Number(a.votes));

  // Reorder for specific layout
  const finalImages = [
    sortedImages[3], // Fourth highest
    sortedImages[1], // Second highest
    sortedImages[0], // Highest
    sortedImages[2], // Third highest
    sortedImages[4], // Fifth highest
  ];

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
      <ImageGallery images={finalImages} />
    </section>
  );
}
