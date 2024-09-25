import Image from "next/image";

export const Photos = () => {
  return (
    <div className="relative w-screen left-1/2 -ml-[50vw] overflow-x-clip">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 gap-4 -mx-24">
          {/* <Image
        src="/photos/IMG_20200131_080142~2.jpg"
        width={400}
        height={300}
        alt=""
        className="aspect-square rounded-xl object-cover -rotate-6"
      /> */}

          {/* <Image
        src="/photos/71920137_199917761023739_1203205556724377818_n.jpg"
        width={400}
        height={300}
        alt=""
        className="aspect-square rounded-xl object-cover -rotate-6"
      /> */}

          <Image
            src="/photos/75029068_2541358066133164_155330168215164162_n.jpg"
            width={400}
            height={300}
            alt=""
            className="aspect-square rounded-xl object-cover -rotate-6"
          />

          <Image
            src="/photos/IMG20230831155951.jpg"
            width={400}
            height={300}
            alt=""
            className="aspect-square rounded-xl object-cover -rotate-3"
          />

          {/* <Image
        src="/photos/IMG20220626233939~2.jpg"
        width={400}
        height={300}
        alt=""
        className="aspect-square rounded-xl object-cover rotate-3"
      /> */}

          <Image
            src="/photos/IMG20220626233939~2.jpg"
            width={400}
            height={300}
            alt=""
            className="aspect-square rounded-xl object-cover rotate-3"
          />

          <Image
            src="/photos/IMG_20211017_132310.jpg"
            width={400}
            height={300}
            alt=""
            className="aspect-square rounded-xl object-cover rotate-6"
          />
        </div>
      </div>
    </div>
  );
};
