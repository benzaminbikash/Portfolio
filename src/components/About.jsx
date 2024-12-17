import React from "react";
import about from "../image/about.png";

function About() {
  return (
    <section id="about" className="bg-black py-16 px-10 md:px-36">
      <h3 className="text-3xl font-bold mb-12 text-yellow-500 text-center">
        About Me
      </h3>
      <div className=" grid md:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            src={about}
            alt="randomImage"
            className="rounded-lg hover:scale-125 duration-500 transition-all"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Hello! I am Bikash Nepali
          </h3>

          <h4 className="text-3xl font-bold mt-4 text-white">
            I'm a Full Stack Developer in Lalitpur, Nepal
          </h4>
          <p className="mt-6 text-gray-400 leading-relaxed">
            I'm very passionate and dedicated to my work. With 1 years
            experience as a professional Full Stack Developer, I have acquired
            the skills necessary to build great and premium websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
