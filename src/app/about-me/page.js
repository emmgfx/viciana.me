import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { Intro, IntroTitle, IntroText } from "@/components/Intro";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata = {
  title: "About me",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-12-07T21:43:00-01:00",
  dateModified: "2025-08-26T08:11:00-01:00",
  mainEntity: {
    "@type": "Person",
    name: "Josep Viciana",
    alternateName: "emmgfx",
    description: "Software developer",
    image: "https://www.viciana.me/avatar.jpeg",
    sameAs: [
      "https://www.viciana.me",
      "https://www.emm-gfx.net",
      "https://x.com/josep_viciana",
      "https://www.linkedin.com/in/josep-viciana/",
      "https://github.com/emmgfx",
    ],
  },
};

export default async function AboutMe() {
  return (
    <>
      <Script
        id="about-me-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Intro>
        <IntroTitle>About me</IntroTitle>
        {/* <IntroText>
          <em>&laquo;Un poco más de esto nuestro&raquo;</em>
        </IntroText> */}
      </Intro>
      <div className="grid md:grid-cols-[6fr_3fr] gap-12">
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
        I&apos;m Josep Viciana, a frontend developer based in the outskirts of
        Barcelona and working remotely.
      </p>
      <p>
        I have collaborated on projects for both tiny and internationally
        renowned companies and organizations. I&apos;m the co-founder of Marmota
        and most important: I&apos;ve unlocked all the Sekiro achievements,
        twice 😏.
      </p>
      <p>
        Around twenty working with web technologies and a small incursion in
        Android development, that&apos;s my baggage. I&apos;m and currently
        learning about XR technologies.
      </p>
      <p>
        I&apos;ve studied about MongoDB, Lumen microservices, Leadership and
        Communication, Java, Kotlin, Android... You can check{" "}
        <Link
          title="Josep Viciana's LinkedIn profile"
          href="https://www.linkedin.com/in/josep-viciana/"
          className="underline"
          target="_blank"
        >
          my LinkedIn profile
        </Link>{" "}
        for more details.
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
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="grid grid-cols-[140px_auto] sm:grid-cols-[200px_auto] items-center gap-4 sm:gap-8 md:flex md:flex-col md:items-start">
      <Image
        src="/avatar.jpeg"
        alt="Josep Viciana"
        width="460"
        height="460"
        className="rounded-2xl rotate-2 w-full max-w-xs mx-auto aspect-square bg-white"
      />
      <SocialLinks className="flex-col shrink-0 gap-3" withTitles />
    </div>
  );
};
