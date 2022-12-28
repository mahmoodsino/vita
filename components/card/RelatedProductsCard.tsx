import React from "react";
import ReactStars from "react-stars";

const RelatedProductsCard = () => {
  return (
    <div className="text-left space-y-0.5 mt-3">
      <div className="w-[207px] h-[224px] bg-[#c4c4c4] flex justify-end items-end">
        <img className="h-6 " src="/addshoppingcart.svg" alt="" />
      </div>
      <h4 className="text-sm">Vit name 1</h4>
      <h4 className="font-bold">$29.50</h4>
      <div className="flex items-center space-x-2 ">
        <ReactStars
          count={5}
          value={4}
          edit={false}
          size={13}
          color2={"#EBD300"}
        />
        <span className="text-xs text-gray1">4.05</span>
      </div>
    </div>
  );
};

export default RelatedProductsCard;
