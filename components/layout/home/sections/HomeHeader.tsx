import React from "react";
import { BorderButton, FillButton } from "../../../buttons";
import { HomeCard } from "../../../card";

const HomeHeader = () => {
  return (
    <div className="md:px-7 sm:px-4 pb-10">
      <div className="flex mt-3">
        <div className="lg:w-[50%] md:ml-5  col-span-1 pt-20">
          <h1 className="font-medium sm:text-4xl md:text-6xl">Feels Good</h1>
          <span className="block sm:text-sm md:text-base mt-7 md:mr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed
            lobortis tortor, nunc, purus risus, elementum. Morbi accumsan, quis
            sagittis tellus montes.
          </span>
          <div className="mt-9  sm:space-y-3 md:space-y-0 md:space-x-5">
            <FillButton title="In-Office Visit" />
            <BorderButton title="Buy Products" />
          </div>
          <div className="md:flex  mt-20  gap-5 sm:hidden">
            <div className="flex flex-col justify-end sm:mt-5 md:mt-0">
              <HomeCard />
            </div>
            <div className="flex flex-col justify-end sm:mt-5 md:mt-0">
              <HomeCard shown="hidden h-0" />
            </div>
            <div className="flex flex-col justify-end sm:mt-5 md:mt-0">
              <HomeCard shown="hidden h-0" />
            </div>
          </div>
        </div>

        <div className="w-[50%] sm:hidden lg:block">
          <img src="/main.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
