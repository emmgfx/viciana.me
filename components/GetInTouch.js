import SectionTitle from "./SectionTitle";

import IconGithub from "../public/images/icons/icon-github.svg";
import IconWordpress from "../public/images/icons/icon-wordpress.svg";
import IconLinkedIn from "../public/images/icons/icon-linkedin.svg";
import IconStackOverflow from "../public/images/icons/icon-stack-overflow.svg";

const GetInTouch = () => {
  return (
    <section
      id="get-in-touch"
      className="text-center max-w-2xl mx-auto text-lg mb-24 leading-8"
    >
      <SectionTitle>04. Get in touch</SectionTitle>
      <div className="h-6" />
      <p>
        Fortunately, it&apos;s been a long time since I quit social media, so
        you could have some troubles contacting me through Twitter, Instagram or
        any other. If you want to contact me, the best options are to write me a{" "}
        <a
          href="https://t.me/emmgfx"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary"
        >
          Telegram
        </a>{" "}
        or an email to{" "}
        <a href="mailto: josep@viciana.me" className="text-primary">
          josep@viciana.me.
        </a>
      </p>
      <div className="h-6" />

      <ul className="flex justify-center gap-6 sm:gap-12">
        <SocialLink url="https://www.emm-gfx.net" title="Wordpress">
          <IconWordpress />
        </SocialLink>
        <SocialLink url="https://www.github.com/emmgfx" title="GitHub">
          <IconGithub />
        </SocialLink>
        <SocialLink url="https://www.linkedin.com/in/emmgfx" title="Linked In">
          <IconLinkedIn />
        </SocialLink>
        <SocialLink
          url="https://stackoverflow.com/users/1378408/emmgfx"
          title="Stack Overflow"
        >
          <IconStackOverflow />
        </SocialLink>
      </ul>
    </section>
  );
};

const SocialLink = ({ children, url, title = null }) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="block hover:text-primary"
        title={title}
      >
        <children.type
          width={32}
          height={32}
          className="block ease-in-out duration-100 m-2"
          {...children.props}
        />
      </a>
    </li>
  );
};

export default GetInTouch;
