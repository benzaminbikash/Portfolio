import React from "react";
import Facebook from ".././image/facebook.svg";
import Instagram from ".././image/instagram.svg";
import Linkedin from ".././image/linkedin.svg";
import Twitter from ".././image/twitter.svg";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function Footer() {
  return (
    <section className="bg-black py-16 px-10 md:px-36">
      <div className="text-white list-none justify-center flex flex-wrap gap-2   font-bold">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:underline hover:text-yellow-500 cursor-pointer "
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:underline hover:text-yellow-500 cursor-pointer "
        >
          About
        </Link>
        <Link
          to="skill"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:underline hover:text-yellow-500 cursor-pointer  "
        >
          Skill
        </Link>
        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:underline hover:text-yellow-500  cursor-pointer "
        >
          Service
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:underline hover:text-yellow-500 cursor-pointer "
        >
          Contact
        </Link>
      </div>
      <h3 className="text-sm   mt-2 text-white text-center">
        ©2024 benzaminbikash | All Right Reserverd
      </h3>
      <div className="flex flex-row gap-2 justify-center items-center py-2">
        <a href="https://www.facebook.com/nepalibikash04/">
          <Facebook className="w-[20px]  h-[20px] " />
        </a>
        <a href="https://www.instagram.com/bikashthedev/">
          <Instagram className="w-[30px]  h-[30px] " />
        </a>
        <a href="https://www.linkedin.com/in/bikash-nepali-4478b0310/">
          <Linkedin className="w-[20px] h-[20px]" />
        </a>
        <a href="https://x.com/ssbikashss">
          <Twitter className="w-[20px]  h-[20px] bg-white rounded-full " />
        </a>
      </div>
    </section>
  );
}

export default Footer;
