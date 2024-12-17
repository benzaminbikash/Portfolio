import React from "react";
import out1 from "../image/out1.png";

function Hero() {
  return (
    <section
      id="hero"
      className="h-[450px] md:h-screen bg-cover bg-[url('https://media.istockphoto.com/id/583998708/photo/drops-of-water.jpg?s=612x612&w=0&k=20&c=6QLU3nbA09qvHWyn-BlAi77RnQZl1ZwII3nfND0Bxbs=')] bg-no-repeat"
    >
      <div className="px-10 md:px-36 w-full h-full  flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-5 pt-10 md:pt-0 ">
        <div className="w-full md:w-1/2  order-2 md:order-1  ">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
            Hey, I'm Bikash Nepali
          </h1>
          <h2 className="text-2xl md:text-5xl font-extrabold text-yellow-500 mt-4 text-center md:text-left">
            Full Stack
          </h2>
          <h2 className="text-2xl md:text-5xl font-extrabold text-yellow-500 mt-4 text-center md:text-left">
            Developer.
          </h2>
        </div>

        <div className="w-full md:w-1/2  flex justify-center relative order-1 md:order-2">
          <div className="hidden md:block bg-yellow-500 rounded-full w-[300px] h-[300px] shadow-md shadow-red-300"></div>
          <img
            src={out1}
            alt="randomImage"
            className="brightness-75 w-[180px] h-[180px] md:w-[290px] md:h-[290px] md:absolute bg-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
