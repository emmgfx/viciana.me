import { Link } from "react-scroll";

const Header = () => {
  return (
    <header
      id="top"
      className="my-8 flex flex-col sm:flex-row justify-between items-center gap-5"
    >
      <h1 className="text-[28px] font-bold uppercase">
        Josep <span className="text-[#FF0B56]">Viciana</span>
      </h1>
      <nav>
        <ul className="flex gap-8 sm:gap-16 text-sm font-mono">
          <li>
            <Link
              to="top"
              href="#top"
              smooth={true}
              className="hover:underline"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="work"
              href="#work"
              smooth={true}
              className="hover:underline"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="get-in-touch"
              href="#get-in-touch"
              smooth={true}
              className="hover:underline"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
