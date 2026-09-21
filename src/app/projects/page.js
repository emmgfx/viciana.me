import Link from "next/link";

import { Intro, IntroText, IntroTitle } from "@/components/Intro";

export const metadata = {
  title: "Projects",
  description:
    "Things I have built that made it to the finish line: a self-hosted music player, a video converter for the TV, a game recommender and a few React packages.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
  },
};

// Newest first.
const FEATURED = [
  {
    name: "Carta",
    startYear: 2026,
    description:
      "A macOS app that gets downloaded videos ready to play on a TV. It probes every track in the MKV and remuxes to MP4, stream copying H.264 video and AAC or AC3 audio untouched, transcoding only what the TV cannot decode, and demuxing text subtitles to .srt.",
    stack: ["Rust", "Tauri"],
    githubHref: "https://github.com/emmgfx/carta",
    downloadHref: "https://github.com/emmgfx/carta/releases/latest",
  },
  {
    name: "Devicelost",
    startYear: 2026,
    description:
      "A self-hosted music player: your own library instead of a subscription, running off a Raspberry Pi 4 at home. Invite-only, with passkeys or a password to get in. Three clients over the same library: a web app, a native Android client in Kotlin, and Android Auto in the car. Mine holds over two weeks of uninterrupted music.",
    stack: ["Next.js", "PostgreSQL", "Kotlin"],
    githubHref: "https://github.com/emmgfx/devicelost",
  },
  {
    name: "Stadiaffinity",
    startYear: 2022,
    endYear: 2024,
    description:
      "A recommender for Google Stadia: you rated the games you had played and it suggested what to play next, based on what people with similar taste enjoyed. It ran until Google shut Stadia down.",
    stack: ["Next.js", "PostgreSQL"],
    href: "https://www.stadiaffinity.com",
    githubHref: "https://github.com/emmgfx/stadiaffinity.com",
    articleSlug: "2024-08-11-the-technology-behind-stadiaffinity",
  },
];

// Newest first.
const PACKAGES = [
  {
    name: "@emmgfx/scroll-hint",
    startYear: 2026,
    description:
      "Scroll edge indicators for React. Shows shadows or solid lines on the edges of a scrollable container to hint there is more content, using IntersectionObserver instead of scroll events.",
    demoHref: "https://scroll-hint.vercel.app",
    githubHref: "https://github.com/emmgfx/scroll-hint",
    npmHref: "https://www.npmjs.com/package/@emmgfx/scroll-hint",
  },
  {
    name: "@emmgfx/logger",
    startYear: 2026,
    description:
      "Color coded logger for JavaScript and TypeScript that works the same in the browser and in Node, with buffers and source persistence to keep the noise down without losing context.",
    githubHref: "https://github.com/emmgfx/logger",
    npmHref: "https://www.npmjs.com/package/@emmgfx/logger",
  },
  {
    name: "@emmgfx/activity-tabs",
    startYear: 2025,
    description:
      "Headless tabs for React built on the Activity API, so hidden panels keep their state instead of unmounting. Switch away from a tab and come back: scroll position and inputs are still there.",
    demoHref: "https://react-activity-tabs.vercel.app/",
    githubHref: "https://github.com/emmgfx/activity-tabs",
    npmHref: "https://www.npmjs.com/package/@emmgfx/activity-tabs",
  },
];

export default function Projects() {
  return (
    <>
      <Intro>
        <IntroTitle>Projects</IntroTitle>
        <IntroText>
          Things I have built that made it to the finish line. Some are still
          alive, some are not, but all of them worked.
        </IntroText>
      </Intro>

      <div className="space-y-16">
        {FEATURED.map((item) => (
          <Featured key={item.githubHref} {...item} />
        ))}
      </div>

      <div className="h-20" />

      <h2 className="text-sm font-semibold text-slate-300">Packages</h2>
      <div className="h-2" />
      <p className="text-sm text-slate-400">
        Small things I extracted from my own projects and published on npm.
      </p>
      <div className="h-10" />

      <div className="space-y-12">
        {PACKAGES.map((item) => (
          <Package key={item.githubHref} {...item} />
        ))}
      </div>
    </>
  );
}

// A closed range means the project is over. An open one is still alive, so it
// only shows when it started: a trailing year would just track the last commit.
const formatYears = (startYear, endYear) =>
  endYear ? `${startYear} — ${endYear}` : `${startYear}`;

const Featured = ({
  name,
  startYear,
  endYear,
  description,
  stack,
  href,
  downloadHref,
  githubHref,
  articleSlug,
}) => {
  const years = formatYears(startYear, endYear);

  return (
    <article className="grid md:grid-cols-4 md:gap-8">
      <div className="md:col-span-3 order-1">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold text-slate-100">{name}</h2>
          {endYear && (
            <span className="text-xs text-slate-400 border border-slate-800 rounded-full px-2 py-0.5">
              Discontinued
            </span>
          )}
        </div>
        <div className="md:hidden">
          <div className="h-3" />
          <span className="text-slate-400 text-sm font-semibold">{years}</span>
        </div>
        <div className="h-4" />
        <p className="text-slate-400 leading-relaxed">{description}</p>
        <div className="h-4" />
        <p className="text-xs text-slate-500">{stack.join(" · ")}</p>
        <div className="h-4" />
        <Links
          href={href}
          downloadHref={downloadHref}
          githubHref={githubHref}
          articleSlug={articleSlug}
        />
      </div>
      <span className="order-0 text-slate-400 text-sm font-semibold mt-2 hidden md:block">
        {years}
      </span>
    </article>
  );
};

const Package = ({
  name,
  startYear,
  endYear,
  description,
  demoHref,
  githubHref,
  npmHref,
}) => {
  const years = formatYears(startYear, endYear);

  return (
    <article className="grid md:grid-cols-4 md:gap-8">
      <div className="md:col-span-3 order-1">
        <h3 className="font-semibold text-slate-100">{name}</h3>
        <div className="md:hidden">
          <div className="h-2" />
          <span className="text-slate-400 text-sm font-semibold">{years}</span>
        </div>
        <div className="h-3" />
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        <div className="h-4" />
        <Links
          demoHref={demoHref}
          githubHref={githubHref}
          npmHref={npmHref}
        />
      </div>
      <span className="order-0 text-slate-400 text-sm font-semibold mt-1 hidden md:block">
        {years}
      </span>
    </article>
  );
};

const Links = ({
  href,
  demoHref,
  downloadHref,
  npmHref,
  githubHref,
  articleSlug,
}) => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-pink-500">
      {href && <ExternalItem href={href}>Website</ExternalItem>}
      {demoHref && <ExternalItem href={demoHref}>Demo</ExternalItem>}
      {downloadHref && <ExternalItem href={downloadHref}>Download</ExternalItem>}
      {npmHref && <ExternalItem href={npmHref}>npm</ExternalItem>}
      <ExternalItem href={githubHref}>GitHub</ExternalItem>
      {articleSlug && (
        <Link href={`/articles/${articleSlug}`} className="hover:underline">
          Read the article
        </Link>
      )}
    </div>
  );
};

const ExternalItem = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:underline"
    >
      {children}
    </a>
  );
};
