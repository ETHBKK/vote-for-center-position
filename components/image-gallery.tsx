import Image from 'next/image'

export type ImageData = {
  id: number;
  src: string;
  alt: string;
  votes: number | bigint; // Adjust based on the expected type of vote data
};

export default function ImageGallery({ images }: { images: ImageData[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-3 aspect-h-2">
            <Image
              src={image.src}
              alt={image.alt}
              style={{ objectFit: "cover" }} 
              className="rounded-lg"
              height={300}
              width={300}
            />
          </div>
        ))}
      </div>
    </div>
  )
}