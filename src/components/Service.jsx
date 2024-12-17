import React from "react";

function Service() {
  return (
    <section id="service" className="py-16 px-10 md:px-36 bg-black">
      <div className=" text-center">
        <h3 className="text-3xl font-bold mb-12 text-yellow-500">
          My Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Frontend Development</h4>
            <p className="">
              Developing visually appealing and responsive user interfaces for
              seamless user experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Backend Development</h4>
            <p className="">
              Creating robust and scalable server-side applications to support
              your business needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Mobile Development</h4>
            <p className="">
              Building modern and efficient mobile applications to enhance user
              engagement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">UI/UX Design</h4>
            <p className="">
              Designing intuitive and user-friendly interfaces to enhance user
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
