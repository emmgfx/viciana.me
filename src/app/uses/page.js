import { Intro, IntroTitle, IntroText } from "@/components/Intro";
import { GamepadIcon, LaptopMinimalIcon } from "lucide-react";

export default async function Uses() {
  return (
    <>
      <Intro>
        <IntroTitle>Uses</IntroTitle>
        <IntroText>
          Things I use in my day to day life and I recommend
        </IntroText>
      </Intro>
      <h2 className="font-semibold flex items-center gap-2">
        <LaptopMinimalIcon /> Desktop
      </h2>
      <div className="h-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Thing
          name='Macbook Pro 13" M1'
          subtitle="2020, 16GB RAM, 512GB SSD"
          href="https://amzn.to/3ZBVIEx"
        ></Thing>
        <Thing
          name="Dell U2414H"
          subtitle='23.8", IPS, 1920x1080, DisplayPort 1.2'
          href="https://amzn.to/3ZOi4m6"
        ></Thing>
        <Thing
          name="Logitech MX Anywhere 2"
          subtitle="With or without Unifying"
          href="https://amzn.to/3ZOi4m6"
        ></Thing>
        <Thing
          name="Phoenix Helios Pro"
          href="https://amzn.to/3MZkM0K"
          subtitle="Light bar with remote control"
        ></Thing>
        <Thing
          name="Sony WH-1000XM5"
          href="https://amzn.to/4en3ere"
          subtitle="Midnight Blue"
        ></Thing>
        <Thing
          name="Flexispot EF1"
          href="https://amzn.to/4ejVo1v"
          subtitle="Automatic standing desk with memory"
        ></Thing>
      </div>
      <div className="h-16" />
      <h2 className="font-semibold flex items-center gap-2">
        <GamepadIcon /> Gaming
      </h2>
      <div className="h-8" />
      <div className="grid grid-cols-2 gap-4">
        <Thing
          name="Sony Playstation 5"
          subtitle="With disk drive, always"
          href="https://amzn.to/47RxSa0"
        ></Thing>
        <Thing
          name="Meta Quest 2"
          href="https://amzn.to/4ejmjuE"
          subtitle="256GB + Case"
        ></Thing>
      </div>
    </>
  );
}

const Thing = ({ name, subtitle, href, children }) => {
  return (
    <article className="relative py-4 px-5 rounded-md border border-slate-800 has-[a]:hover:bg-slate-800">
      <h3 className="text-slate-300">
        {href ? (
          <a href={href} target="_blank">
            {name || ""}
            <span className="absolute inset-0"></span>
          </a>
        ) : (
          name || ""
        )}
      </h3>
      <span className="text-xs text-slate-500">{subtitle}</span>
      <div className="h-2" />
      {children && <p className="text-sm">{children}</p>}
      {href && (
        <div className="text-right text-xs text-pink-500">Know more</div>
      )}
    </article>
  );
};
