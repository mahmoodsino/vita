import React from "react";
import { BorderButton, FillButton } from "../../../buttons";
import { HomeCard } from "../../../card";

const HomeHeader = () => {
  return (
    <div className="px-7 pb-10">
      <div className="flex mt-3">
        <div className="w-[50%]  ml-5  col-span-1 pt-20">
          <h1 className="font-medium text-6xl">Feels Good</h1>
          <span className="block mt-7 mr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed
            lobortis tortor, nunc, purus risus, elementum. Morbi accumsan, quis
            sagittis tellus montes.
          </span>
          <div className="mt-9 space-x-5">
            <FillButton title="In-Office Visit" />
            <BorderButton title="Buy Products" />
          </div>
          <div className="flex   mt-20 gap-5">
            <div className="flex flex-col justify-end">
              <HomeCard />
            </div>
            <div className="flex flex-col justify-end">
              <HomeCard shown="hidden h-0" />
            </div>
            <div className="flex flex-col justify-end">
              <HomeCard shown="hidden h-0" />
            </div>
          </div>
        </div>

        <div className="w-[50%] ">
          <img src="/main.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
