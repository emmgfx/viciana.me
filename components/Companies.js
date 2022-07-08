import SectionTitle from "./SectionTitle";

import LogoParker from "../public/images/logos/parker.svg";
import LogoAmazon from "../public/images/logos/amazon.svg";
import LogoBuzzFeed from "../public/images/logos/buzzfeed.svg";
import LogoKec from "../public/images/logos/kec.svg";

const Companies = () => {
  return (
    <section>
      <SectionTitle>03. I’ve worked in projects for...</SectionTitle>
      <div className="h-4" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-items-center">
        <LogoKec />
        <LogoParker />
        <LogoAmazon />
        <LogoBuzzFeed />
      </div>
    </section>
  );
};

export default Companies;
