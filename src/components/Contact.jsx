import React from "react";

const Contact = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14">
      <div className="container">
        <div className="grid dark:bg-black dark:text-white grid-cols-1 sm:grid-cols-3 gap-6 bg-[#e5f3ff] py-5 px-6">
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold dark:text-white text-black">
              You have the map, we have the wheels!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Contact us and lets talk about your dream car!
            </p>
          </div>
          <div className="grid place-items-center">
            <a
              className="inline-block bg-primary font-semibold py-2 px-6 gb-primary rounded-lg tracking-wider dark:text-gray-800 hover:bg-primary/80 duration-200"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
