import { twMerge } from "tailwind-merge";

import {
  GithubLogo,
  LinkedinLogo,
  MetaLogo,
  TelegramLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

export const SocialLinks = ({ className, withTitles = false }) => {
  return (
    <ul className={twMerge("flex gap-4 text-slate-400", className)}>
      <li>
        <a
          href="https://x.com/josep_viciana"
          target="_blank"
          className="hover:text-slate-100 flex gap-3 items-center"
        >
          <XLogo className="size-7" />
          {withTitles && "Profile on X"}
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/emmgfx"
          className="hover:text-slate-100 flex gap-3 items-center"
        >
          <GithubLogo className="size-7" />
          {withTitles && "Profile on GitHub"}
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/josep-viciana"
          target="_blank"
          className="hover:text-slate-100 flex gap-3 items-center"
        >
          <LinkedinLogo className="size-7" />
          {withTitles && "Profile on LinkedIn"}
        </a>
      </li>
      <li>
        <a
          href="https://t.me/emmgfx"
          target="_blank"
          className="hover:text-slate-100 flex gap-3 items-center"
        >
          <TelegramLogo className="size-7" />
          {withTitles && "Talk on Telegram"}
        </a>
      </li>
      <li>
        <a
          href="https://horizon.meta.com/profile/112215254850306/"
          target="_blank"
          className="hover:text-slate-100 flex gap-3 items-center"
        >
          <MetaLogo className="size-7" />
          {withTitles && "Talk on Telegram"}
        </a>
      </li>
    </ul>
  );
};
