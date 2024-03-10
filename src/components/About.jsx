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
              At Rent a'Car, we offer more than just vehicles; we provide a gateway to effortless travel. With a fleet of contemporary models, our commitment to seamless experiences ensures your journey is as memorable as the destination itself.
              </p>
              <p data-aos="fade-up">
              As your trusted rental partner, Rent a'Car combines convenience with customer-centric service. Discover the freedom of the road with us – where every ride becomes an opportunity for adventure, and every traveler is met with personalized care and reliability.
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
