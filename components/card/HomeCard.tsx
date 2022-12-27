import React from "react";

interface Props {
    shown? : string
}

const HomeCard = ({shown}:Props) => {
  return (
    <div className=" w-[190px] h-fit relative bg-[#f6f6f6] shadow-[4px_4px_10px_rgba(216,216,216,0.5)] rounded-xl">
      <div className="flex justify-end py-3 ">
        <div className="w-[55%]">
          <span className="font-medium ">Lipotropic (MIC)+B12</span>
          <span className="block text-[#787878] text-sm">Homekit</span>
        </div>
      </div>
      <img
        className="absolute -top-[30%] left-[7%] h-28"
        src="/product.png"
        alt=""
      />
      <div className={`flex justify-center   pb-3  ${shown}`}>
        <button className="px-3 py-1 border-2 rounded-full border-secondary text-secondary font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
