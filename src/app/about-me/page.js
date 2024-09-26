import { Intro, IntroTitle, IntroText } from "@/components/Intro";
import { SocialLinks } from "@/components/SocialLinks";
import Image from "next/image";

export default async function AboutMe() {
  return (
    <>
      <Intro>
        <IntroTitle>About me</IntroTitle>
        <IntroText>
          <em>&laquo;Un poco más de esto nuestro&raquo;</em>
        </IntroText>
      </Intro>
      <div className="grid md:grid-cols-[7fr_3fr] gap-12">
        <div className="order-2 md:order-1">
          <Description />
        </div>
        <div className="md:order-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

const Description = () => {
  return (
    <div className="space-y-8 text-slate-400">
      <p>
        I&apos;m Josep Viciana, frontend developer. Previously, and in side
        projects, I&apos;ve done stuff for backend and Android. Based in
        Barcelona, working remotely.
      </p>
      <p>
        I have collaborated on projects for both tiny and internationally
        renowned companies and organizations. I&apos;m the co-founder of Marmota
        and most important: I&apos;ve unlocked all the Sekiro achievements,
        twice.
      </p>
      <p>
        I spent my time mainly on my family and work, as everyone. In my limited
        free time I do things like this site, reading some book or playing games
        on <span className="line-through">Xbox</span>{" "}
        <span className="line-through" title="Ouch... 😅">
          Stadia*
        </span>{" "}
        PS5.
      </p>
      <p>I need some more lines to fill the designed area, so, here we go:</p>
      <p>
        Pellentesque tristique, orci tincidunt porttitor consectetur, magna
        lacus elementum orci, id euismod ex nibh at orci. Fusce consectetur
        pulvinar convallis. Duis sodales et nunc eu dignissim. Vivamus in libero
        laoreet, rhoncus felis quis, vestibulum neque. Fusce nec ornare magna.
        Quisque nec metus elit. In eget commodo diam. Donec ex neque, efficitur
        euismod porttitor a, scelerisque quis ante. Integer luctus neque ante,
        quis finibus leo tincidunt a.
      </p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="grid grid-cols-[40fr_60fr] sm:grid-cols-[20fr_80fr] items-center gap-4 sm:gap-8 md:flex md:flex-col md:items-start">
      <div className="shrink">
        <Image
          src="/avatar.jpeg"
          alt="Josep Viciana"
          width="460"
          height="460"
          className="rounded-2xl rotate-2 w-full max-w-xs mx-auto"
        />
      </div>
      <SocialLinks className="flex-col shrink-0" withTitles />
    </div>
  );
};
