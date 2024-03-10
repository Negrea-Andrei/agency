import React from "react";
import rent_Audi from "../assets/rent_Audi.png"
import rent_BMW from "../assets/rent_BMW.png"
import rent_Camaro from "../assets/rent_Camaro.png"

const Cars = () => {
  const carsModels = [
    {
        name: "BMW",
        price: 150,
        image: rent_BMW,
        aosDelay: "1000",
    },
    {
        name: "Audi",
        price: 85,
        image: rent_Audi,
        aosDelay: "1200",
    },
    {
        name: "Camaro",
        price: 250,
        image: rent_Camaro,
        aosDelay: "1400",
    },
  ];
  return (
    <div className="pb-24 pt-12 sm:min-h-[600px] dark:bg-black dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Take a look at our cars
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          At Rent a'Car, we present a curated selection of ready-to-rent models.
        </p>
        <div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 dap-16">
            {carsModels.map((car) => (
              <div data-aos="fade-up" data-aos-duration={car.aosDelay} className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                <div className="w-full h-[120px]">
                    <img className="w-full h-[120px] object-contain sm:translate-x-1 group-hover:sm:translate-x-3 duration-200" src={car.image} alt={car.name} />
                </div>
                <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{car.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                        <p>${car.price}/Day</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
