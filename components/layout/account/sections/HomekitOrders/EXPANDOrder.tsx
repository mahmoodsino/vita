import React from "react";
import { LinearButton } from "../../../../buttons";
import { HomeKitElement } from "../../../information";

interface Props {
    setShowMore : any
}

const EXPANDOrder = ({setShowMore}:Props) => {
  return (
    <div>
      <div className="py-3">
        <HomeKitElement />
        <HomeKitElement />
        <HomeKitElement />
      </div>
      <div className="flex justify-end py-3">
        <div className="w-[55%] space-y-3">
          <div className="border-b flex justify-between font-medium ">
            <span>Subtotal</span>
            <span>$1196.00</span>
          </div>
          <div className="border-b flex justify-between font-medium text-pink1">
            <span>Special Offer</span>
            <span>$99.00</span>
          </div>
          <div className="border-b flex justify-between font-medium ">
            <span>Shipping</span>
            <span>$50.00</span>
          </div>
          <div className="flex justify-between font-medium ">
            <span>Total (inc. TAX)</span>
            <span>$1345.00</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-7 mb-3">
        <button className="underline font-semibold text-pink1 tracking-wider">
          Consultation Form
        </button>
        <LinearButton title="Re-order" />
      </div>
      <div className="py-3 flex justify-center">
        <button onClick={() => setShowMore(false)} className="flex  items-center font-semibold text-[#676767]">
          <span>MINIMIZE</span>
          <img className="rotate-180" src="/Polygon.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default EXPANDOrder;
