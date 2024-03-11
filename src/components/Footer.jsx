import React from "react";
import { PiSteeringWheelBold } from "react-icons/pi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full dark:bg-black bg-primary py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <PiSteeringWheelBold className="text-4xl sm:text-5xl dark:text-white" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-black dark:text-white">Call : +123 456 789</h3>
          <h3 className="py-2 text-black dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </h3>
          <h3 className="py-2 text-[#363A3D] dark:text-white">Email: andrei.negrea.contact@gmail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#E9F8F3] dark:bg-primary rounded-xl">
              <FaFacebookF size={25} className="text-[#3a7fc0] dark:text-[#000000]" />
            </div>
            <div className="p-4 bg-[#E9F8F3] dark:bg-primary rounded-xl">
              <FaLinkedinIn size={25} className="text-[#3a7fc0] dark:text-[#000000]" />
            </div>
            <div className="p-4 bg-[#E9F8F3] dark:bg-primary rounded-xl">
              <FaInstagram size={25} className="text-[#3a7fc0] dark:text-[#000000]" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white">Explore</h3>
          <ul className="py-6 text-black dark:text-white">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Course</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white">Category</h3>
          <ul className="py-6 text-black dark:text-white">
            <li className="py-2">Design</li>
            <li className="py-2">Development</li>
            <li className="py-2">Marketing</li>
            <li className="py-2">Business</li>
            <li className="py-2">Lifestyle</li>
            <li className="py-2">Photography</li>
            <li className="py-2">Music</li>
          </ul>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#3a7fc0] dark:bg-primary text-white dark:text-dark font-medium">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
