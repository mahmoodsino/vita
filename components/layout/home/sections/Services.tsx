import React from "react";
import { BorderButton } from "../../../buttons";

const Services = () => {
  return (
    <div className="mt-5 bg-gray3 lg:px-20 sm:px-5 py-16 relative">
      <h3 className="text-gray2 font-medium text-xl">About Our Services</h3>
      <span className="block text-primary font-semibold text-2xl mt-2">
        WHAT DO WE PROVIDE
      </span>
      <span className="lg:w-[45%] block mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum duis
        netus id augue massa ut sagittis. Sit eros, aliquet nisi sed ut. Velit
        interdum lacus, odio tincidunt pretium morbi enim lorem tincidunt. Morbi
        sit egestas sit elementum. Netus porttitor lacus, volutpat habitasse ut
        neque. Sagittis laoreet accumsan augue luctus. Donec pharetra commodo
        tristique est neque. Posuere vel at tellus pretium nunc, mauris.
      </span>
      <div className="mt-5">
        <BorderButton title="EXPLORE" />
      </div>
      <div className="sm:hidden lg:block">
        <div className="bg-[#FFEF5F] flex justify-center w-[190px] h-[190px] text-center absolute rounded-full top-[10%] right-[30%]">
          <span className=" m-auto text-lg font-semibold block px-3">
            IN-OFFICE INJECTIONS
          </span>
        </div>
        <div className="bg-[#FF79DA] flex justify-center w-[180px] h-[180px] text-center absolute rounded-full top-[5%] right-[15%]">
          <span className=" m-auto text-lg font-semibold block px-3">
            INJECTIONS HOMEKITS
          </span>
        </div>

        <div className="bg-[#9CFFCA] flex justify-center w-[150px] h-[150px] text-center absolute rounded-full bottom-[10%] right-[30%]">
          <span className=" m-auto text-lg font-semibold block px-3">
            IV THERAPY
          </span>
        </div>
        <div className="bg-[#97E3FF] flex justify-center w-[190px] h-[190px] text-center absolute rounded-full bottom-[9%] right-[13%]">
          <span className=" m-auto text-lg font-semibold block px-3">
            TELEHEALTH PHYSICIAN CONSULTATION
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
