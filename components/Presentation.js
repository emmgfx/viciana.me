import Image from "next/image";

import me from "../public/images/me.webp";

const Presentation = () => {
  return (
    <div className="md:grid md:grid-cols-[70%_auto] lg:grid-cols-[50%_auto]">
      <div className="">
        <p className="font-mono text-primary">
          Hello world, my name is{" "}
          <span className="text-white">Josep Viciana</span> (a.k.a.&nbsp;emmgfx)
        </p>
        <div className="h-4" />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Web & Android senior <span className="text-primary">developer</span>
        </h1>
        <div className="h-4" />
        <p className="text-xl md:text-[26px] leading-8 md:leading-10">
          More than 15 years{" "}
          <span className="text-primary">doing what I love.</span>
        </p>
        <p className="text-xl md:text-[26px] leading-8 md:leading-10">
          Always willing to make a mistake if I can learn something new.
        </p>
        <div className="h-28" />
      </div>
      <div className="relative hidden lg:block">
        <Image
          src={me}
          width={560}
          height={560}
          className="absolute right-0 motion-safe:animate-floating-me select-none"
          layout="raw"
          alt=""
        />
      </div>
    </div>
  );
};

export default Presentation;
