import React from "react";
import {FaCameraRetro} from "react-icons/fa";
import {GiNotebook} from "react-icons/gi";
import {SlNote} from "react-icons/sl";

const WhyUs = () => {
  const skills = [
    {
      name: "Amazing prices",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black dark:group-hover:text-yellow-400 duration-300" />
      ),
      link: "#",
      description: 
      "Budget-friendly pricing options designed to cater to everyone's financial needs, ensuring accessibility for all pockets.",
      aosDelay: "0",
    },
    {
      name: "Fast and safe",
      icon: (
        <GiNotebook className="text-5xl text-primary group-hover:text-black dark:group-hover:text-yellow-400 duration-300" />
      ),
      link: "#",
      description: "Swift and secure, our services prioritize efficiency without compromising on safety, providing you with a seamless and protected experience.",
      aosDelay: "200",
    },
    {
      name: "Latest car models",
      icon: (
        <SlNote className="text-5xl text-primary group-hover:text-black dark:group-hover:text-yellow-400 duration-300" />
      ),
      link: "#",
      description: 
      "Explore our fleet featuring the newest and most cutting-edge car models, offering you the pinnacle of automotive innovation and style for an unparalleled driving experience.",
      aosDelay: "300",
    },
  ];

  return (
    <div className="py-14 bg-[#f0f9ff] dark:bg-dark dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={skill.aosDelay} className="card text-center group space-y-3 sm:space-y-2 p-4 sm:py-16 hover:bg-primary dark:bg-black dark:hover:bg-primary/50 bg-white rounded-lg">
              <div className="grid place-items-center">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
              <a href={skill.link}></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
