import React from "react";

const HomeKitElement = () => {
  return (
    <div className="flex justify-between  items-center  px-5 shadow-[2.78px_2.78px_9.73px_rgba(0,0,0,0.1)] rounded-lg py-3 pr-5">
      <div className="flex items-center space-x-3">
        <div className="w-[24px] h-[24px] rounded-full bg-[#DF00A1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="white"
            className=" bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </div>
        <div className="w-[70px] h-[70px] bg-[#F6F6F6] flex justify-center items-center">
          <img className="h-14" src="/product.png" alt="" />
        </div>
      </div>
      <div className="">
        <span className="block font-medium ">LIPOTROPIC B12</span>
        <span className=" text-xs text-gray2">LIPOTROPIC B12</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-1 py-1">-</button>
        <span className="flex justify-center h-7 w-7 items-center  shadow-[2.78px_2.78px_9.73px_rgba(0,0,0,0.1)]">
          1
        </span>
        <button className="px-1 py-1">+</button>
      </div>
      <div className="font-bold ">
        <span>$299.00</span>
      </div>
    </div>
  );
};

export default HomeKitElement;
