import React from "react";
import racer from "../assets/racer.jpg";
import racer2 from "../assets/racer2.jpg";
import racer3 from "../assets/racer3.jpg";


const Reviews = () => {
  const rating = 5;
  const clients = [
    {
      name: "Paul Walker",
      photo: racer3,
      description: "This was the best car i ever droved!",
      delay: 1000,
    },
    { name: "Neil Bonnett", photo: racer, description: "The service was amazing!", delay: 1500 },
    { name: "Maria de Villota", photo: racer2, description: "I will definitely come back to this car rental!", delay: 2000 },
  ];
  return (
    <div className="dark:bg-dark dark:text-white text-dark py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            data-aos-duration={1000}
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            What Our Clients Say About Us?
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration={1000}
            className="text-center sm:px-44 font-serif"
          >
            Just listen to what they have to say!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 text-black dark:text-primary">
          {clients.map((review) => (
            <div data-aos="fade-up" data-aos-duration={review.delay}
              key={review.name}
              className="grid rounded-xl bg-[#e5f3ff] dark:bg-black place-items-center sm:py-5 sm:space-y-6"
            >
              <img
                src={review.photo}
                alt="client"
                className="h-20 w-20 rounded-full"
              />
              <p>{review.description}</p>
              <div
                className="flex justify-center py-1"
              >
                {[...Array(rating)].map((star, index) => (
                  <div key={index} className="inline-block">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400 dark:text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="font-semibold text-center">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
