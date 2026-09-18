import Image from "next/image";

const PHOTOS = [
  "/photos/75029068_2541358066133164_155330168215164162_n.jpg",
  "/photos/IMG20230831155951.jpg",
  "/photos/IMG20220626233939~2.jpg",
  "/photos/IMG_20211017_132310.jpg",
];

export const Photos = () => {
  return (
    <div className="flex flex-nowrap gap-4 overflow-scroll -mx-4 px-4 md:grid md:grid-cols-4 md:overflow-visible xl:-mx-24 snap-x snap-mandatory scroll-p-8">
      {PHOTOS.map((src, index) => (
        <Image
          key={src}
          src={src}
          width={400}
          height={300}
          alt=""
          className="w-48 md:w-auto aspect-square rounded-xl object-cover snap-start"
          // The first one is the LCP element: preload it and skip lazy
          // loading. Marking the rest would only make them compete for
          // bandwidth with it.
          priority={index === 0}
        />
      ))}
    </div>
  );
};
