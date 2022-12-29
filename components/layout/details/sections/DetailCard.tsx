import React from "react";
import ReactStars from "react-stars";
import { CartIcon } from "../../../icons";

const DetailCard = () => {
  return (
    <div>
      <span className="md:text-2xl font-medium block ">
        Lipotropic B12 Homekit w/ Telehealth Physician Consultation
      </span>
      <div className="md:w-[40%] flex justify-between mt-2 items-center">
        <span className="text-lg font-bold">$299.00</span>
        <span className="line-through text-[#9098B1]">$320.00</span>
        <span className="text-[#33A0FF] font-bold">24% Off</span>
      </div>
      <div className="flex space-x-3 mt-2">
        <ReactStars
          count={5}
          value={4.5}
          edit={false}
          size={15}
          color2={"#EBD300"}
        />
        <span className="text-[#949494] font-medium">0 Reviews</span>
      </div>
      <div className="border-b pb-5">
        <button className="px-6 py-2 tracking-widest font-semibold text-white bg-pink1 my-8 rounded-full">
          START MY ONLINE VISIT OR REFILL
        </button>
        <div className="tracking-widest md:w-[80%] sm:text-sm md:text-base ">
          <h3>Home Kit Includes:</h3>
          <span>
            25 Activated NAD+ Injections (Nicotinamide Adenine Dinucleotide
            20,000 mcg per dose) 25 Sub-Q Syringes Alcohol Pads Physician
            Consultation [online]
          </span>
        </div>
      </div>
      <div className="py-5 flex w-[90%] justify-between">
        <div className="flex items-center space-x-2">
          <button className="px-1 py-1">-</button>
          <span className="flex justify-center h-7 w-7 items-center  shadow-[2.78px_2.78px_9.73px_rgba(0,0,0,0.1)]">
            1
          </span>
          <button className="px-1 py-1">+</button>
        </div>
        <div className=" flex md:flex-row sm:flex-col sm:space-y-3 md:space-y-0 md:space-x-16">
          <button className="flex font-medium items-center space-x-4 px-3 py-1 border border-black rounded-md">
            <CartIcon className="h-6 stroke-black" />
            HomeKits
          </button>
          <button className="flex font-medium whitespace-nowrap items-center space-x-4 px-3 py-1 border border-black rounded-md">
            <CartIcon className="h-6 stroke-black" />
            Office Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
