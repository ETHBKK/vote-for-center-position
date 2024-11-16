import Image from 'next/image'

export default function ImageGallery() {
  const images = [
    { src: '/idols/1.webp', alt: 'Image 1' },
    { src: '/idols/2.webp', alt: 'Image 2' },
    { src: '/idols/3.webp', alt: 'Image 3' },
    { src: '/idols/4.webp', alt: 'Image 4' },
    { src: '/idols/5.webp', alt: 'Image 5' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-3 aspect-h-2">
            <Image
              src={image.src}
              alt={image.alt}
              objectFit="cover"
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