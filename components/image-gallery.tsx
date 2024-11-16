import Image from 'next/image'
import VoteButton from '@/components/vote-button';

export type ImageData = {
  id: number;
  src: string;
  alt: string;
  votes: number | bigint; // Adjust based on the expected type of vote data
};

export default function ImageGallery({ images }: { images: ImageData[] }) {
  const handleVoteClick = (index: number) => {
    // TODO: call smart contract to vote
    console.log('Vote button clicked!', index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-md font-semibold text-center my-2">
              {((image.votes !== images[0].votes) && index === 2) ? "👑" : "🗳️"} {Number(image.votes)}
            </div>
            <div className="aspect-w-3 aspect-h-2">
              <Image
                src={image.src}
                alt={image.alt}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                height={300}
                width={300}
              />
            </div>
            <div className="flex justify-center my-6">
              <VoteButton onClick={() => handleVoteClick(image.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}