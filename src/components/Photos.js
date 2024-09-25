import Image from "next/image";

export const Photos = () => {
  return (
    <div className="flex flex-nowrap gap-4 overflow-scroll -mx-8 px-8 md:grid md:grid-cols-4 md:overflow-visible xl:-mx-24 snap-x snap-mandatory scroll-p-8">
      <Image
        src="/photos/75029068_2541358066133164_155330168215164162_n.jpg"
        width={400}
        height={300}
        alt=""
        className="w-48 md:w-auto aspect-square rounded-xl object-cover snap-start"
      />

      <Image
        src="/photos/IMG20230831155951.jpg"
        width={400}
        height={300}
        alt=""
        className="w-48 md:w-auto aspect-square rounded-xl object-cover snap-start"
      />

      <Image
        src="/photos/IMG20220626233939~2.jpg"
        width={400}
        height={300}
        alt=""
        className="w-48 md:w-auto aspect-square rounded-xl object-cover snap-start"
      />

      <Image
        src="/photos/IMG_20211017_132310.jpg"
        width={400}
        height={300}
        alt=""
        className="w-48 md:w-auto aspect-square rounded-xl object-cover snap-start"
      />
    </div>
  );
};
