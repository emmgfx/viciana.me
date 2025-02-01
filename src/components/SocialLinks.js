import { twMerge } from "tailwind-merge";

import {
  GithubLogo,
  LinkedinLogo,
  MetaLogo,
  TelegramLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  {
    title: "Profile on LinkedIn",
    href: "https://www.linkedin.com/in/josep-viciana",
    Icon: LinkedinLogo,
  },
  {
    title: "Profile on X",
    href: "https://x.com/josep_viciana",
    Icon: XLogo,
  },
  {
    title: "Talk on Telegram",
    href: "https://t.me/emmgfx",
    Icon: TelegramLogo,
  },
  {
    title: "Profile on GitHub",
    href: "https://www.github.com/emmgfx",
    Icon: GithubLogo,
  },
];

export const SocialLinks = ({ className, withTitles = false }) => {
  return (
    <ul className={twMerge("text-sm flex gap-4 text-slate-400", className)}>
      {LINKS.map(({ title, href, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            className="hover:text-slate-100 flex gap-3 items-center focus-visible:text-slate-100 focus-visible:bg-slate-700 focus-visible:outline-4 outline-slate-700 outline-offset-0 rounded-sm"
          >
            <Icon className="size-7" />
            {withTitles ? title : <span className="sr-only">{title}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
};
