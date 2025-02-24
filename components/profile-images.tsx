import Image from "next/image";

export function ProfileImages() {
  const images = [
    "/img/img-01.jpg",
    "/img/img-02.jpg",
    "/img/img-03.jpg",
    "/img/img-07.jpg",
    "/img/img-05.jpg",
    "/img/img-08.jpg",
  ];

  return (
    <div className="flex justify-center gap-4 overflow-x-auto pb-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={src}
            alt={`Profile ${i + 1}`}
            width={128}
            height={128} // Ensure all images have the same height
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
