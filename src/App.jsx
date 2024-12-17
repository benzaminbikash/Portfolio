import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { FaChevronCircleUp } from "react-icons/fa";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [show, setShow] = useState(false);
  const ScrollFunction = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollFunction);
    return () => window.removeEventListener("scroll", ScrollFunction);
  }, []);

  const topScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Service />
      <Contact />
      <button
        onClick={() => topScroll()}
        className={`fixed bottom-10 md:right-10  right-2   
        ${
          show
            ? "opacity-100 bottom-10 duration-700 transition-all  translate-y-0"
            : " opacity-0 -translate-y-20  duration-700 transition-all   "
        } `}
      >
        <FaChevronCircleUp color="orange" size={40} />
      </button>

      <SocialMedia />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
