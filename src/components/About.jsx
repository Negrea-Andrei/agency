import React from "react";
import about_car from "../assets/about_car.png";

const About = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 sm:grid sm:place-items-center sm:min-h-[600px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-once="false">
            <img src={about_car} alt="" />
          </div>
          <div>
            <div className="space-y-5 sm:p-15 pb-6">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">
                About us
              </h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button data-aos="fade-up"
                className="button-outline"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
