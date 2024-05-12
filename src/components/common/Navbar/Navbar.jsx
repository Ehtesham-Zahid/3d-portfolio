import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    // <div className="flex justify-center w-screen ">
    <div
      className={`text-white flex justify-center py-5 fixed w-screen bg-cyan-500 z-10 `}
    >
      <ul className="flex   justify-center w-full">
        <li className="mx-4  text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            // activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            // onSetActive={handleSetActive}
            className=" hover:border-b-4 border-cyan-500 cursor-pointer  "
          >
            <HomeIcon className="mx-1.5 mb-1 " />
            Home
          </Link>
        </li>
        <li className="mx-4  text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            // activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            // onSetActive={handleSetActive}
            className=" hover:border-b-4 border-cyan-500 cursor-pointer  "
          >
            <PersonIcon className="mx-1.5 mb-1 " />
            About
          </Link>
        </li>{" "}
        {/* <li className="mx-4  text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            // activeClass="active"
            to="services-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            // onSetActive={handleSetActive}
            className=" hover:border-b-4 border-cyan-500 cursor-pointer  "
          >
            <WorkIcon className="mx-1.5 mb-1 " />
            Services
          </Link>
        </li>{" "} */}
        <li className="mx-4  text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            // activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            // onSetActive={handleSetActive}
            className=" hover:border-b-4 border-cyan-500 cursor-pointer  "
          >
            <LocalPhoneIcon className="mx-1.5 mb-1 " />
            Contact
          </Link>
        </li>{" "}
      </ul>
    </div>
    // </div>
  );
};

export default Navbar;
