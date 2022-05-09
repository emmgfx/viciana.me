import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <section className="max-w-2xl font-normal text-lg leading-8">
      <SectionTitle>01. About me</SectionTitle>
      <div className="h-6" />
      <p>
        <del className="text-white/50">Barcelona</del> Remote Web and Android
        developer. I have collaborated on projects for both tiny and
        internationally renowned companies and organizations. I unlocked all the
        Sekiro achievements.
      </p>
      <div className="h-6" />
      <ul className="inline-grid gap-x-8 grid-cols-[repeat(2,auto)]">
        <li className="before:content-['>'] before:font-bold before:text-primary before:mr-2">
          JavaScript (ES6+)
        </li>
        <li className="before:content-['>'] before:font-bold before:text-primary before:mr-2">
          React
        </li>
        <li className="before:content-['>'] before:font-bold before:text-primary before:mr-2">
          WordPress
        </li>
        <li className="before:content-['>'] before:font-bold before:text-primary before:mr-2">
          SCSS
        </li>
        <li className="before:content-['>'] before:font-bold before:text-primary before:mr-2">
          Lumen
        </li>
        <li className="before:content-['>'] before:font-bold before:text-primary before:mr-2">
          PHP
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
