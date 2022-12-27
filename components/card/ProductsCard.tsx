import React from "react";
import ReactStars from "react-stars";
import { ShoppingCart } from "../icons";

const ProductsCard = () => {
  return (
    <div className="shadow-[0px_4px_4px_rgba(216,216,216,0.4)]  text-center hiddEffProductCard relative mt-40 z-20 bg-[#F6F6F6] w-[270px] h-[380px] rounded-md">
      <div className="absolute -top-[25%] z-30 w-full">
        <img className="h-44 mx-auto " src="/product.png" alt="" />
      </div>
      <div className="absolute w-full -top-[25%]">
        <div className="w-32 h-32  bg-secondary/40 blur-2xl  rounded-full   mx-auto  "></div>
      </div>
      <span className="block text-sm h-20 px-4 mt-[45%]">
        NAD+ Injection (Active Form) HOMEKIT w/ TeleHealth Physicians
        Consultation
      </span>
      <button className="text-skyblue italic text-sm px-5  text-center">
        Focus | Energy | Anti-Aging | Muscle Recovery | Performance
      </button>
      <span className="block font-semibold text-xl mt-10">$309.00</span>
      <div className=" flex justify-center ">
        <ReactStars
          count={5}
          value={5}
          edit={false}
          size={30}
          color2={"#00ACED"}
        />
      </div>
      <div className="absolute w-[270px] infoProductCard h-0 opacity-0 top-0 bg-primary/50 z-40 rounded-md flex  justify-center">
        <div className="m-auto w-[110px] h-[110px] bg-primary rounded-full   flex  justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
          <button>
            <ShoppingCart className="m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
