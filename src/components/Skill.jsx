import React from "react";

function Skill() {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 70 },
    { name: "JavaScript", percentage: 75 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Redux Toolkit", percentage: 60 },
    { name: "Node Js ", percentage: 60 },
    { name: "Express Js ", percentage: 70 },
    { name: "Mongodb ", percentage: 75 },
    { name: "React Native", percentage: 80 },
    { name: "Python", percentage: 50 },
    { name: "Figma", percentage: 60 },
  ];
  return (
    <section id="skill" className="py-16 px-10 md:px-36 bg-black">
      <div className="  text-center">
        <h3 className="text-3xl font-bold mb-12 text-yellow-500">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg hover:scale-105 duration-1000 delay-75 bg-white shadow-sm shadow-red-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-black font-bold text-lg">{skill.name}</h3>
                <span className="text-yellow-500 font-bold text-lg">
                  {skill.percentage}%
                </span>
              </div>
              <div className="h-4 bg-black rounded-full">
                <div
                  className="h-4 bg-yellow-500 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
