import React from "react";
import blue_car from "../assets/blue_car.png";
import black_car from "../assets/black_car.png";

const Hero = ({ theme }) => {
  return (
    <div className="bg-[#aadefc] dark:bg-dark dark:text-white relative -z-20">
      <div className="container min-h-[800px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div data-aos="zoom-in" className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? blue_car : black_car}
              alt="car"
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="dark:text-[#1E90FF] text-[#000000] text-2xl font-serif"
            >
              Drive safe
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-5xl font-semibold lg:text-7xl font-serif"
            >
              Rent a'Car
            </h1>
            <p data-aos="fade-up" data-aos-delay="1500">
              Embark on a seamless journey with Rent a'Car - where every road
              becomes an opportunity to explore. Offering a diverse fleet of the
              latest car models, our reliable and convenient rental services
              ensure you experience the freedom of the open road. Whether it's
              for business or leisure, Rent a'Car takes you there in comfort and
              style, making your travel dreams a reality.
            </p>
            <button
              className="btn bg-primary text-black px-6 py-2 rounded-md duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="2000"
            >
              Let's GO!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
