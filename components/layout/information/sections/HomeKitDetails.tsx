import React from "react";

const HomeKitDetails = () => {
  return (
    <div>
      <h3 className="font-semibold ">Discount Coupon</h3>
      <div className=" py-10 space-y-5 border-b">
        <div className="flex justify-between  ">
          <input
            className="outline-none border border-[#C0C0C0] px-2 py-3 w-[80%]"
            type="text"
          />
          <button className="text-white bg-primary  font-semibold px-5 py-2">
            Apply
          </button>
        </div>
        <div className="flex justify-between">
          <span className=" font-medium text-gray2">DG-1656q</span>
          <button className=" font-semibold text-primary">Remove</button>
        </div>
        <div className="flex justify-between">
          <span className=" font-medium text-gray2">DG-1656q</span>
          <button className=" font-semibold text-primary">Remove</button>
        </div>
      </div>
      <div className="py-10 space-y-3">
        <div className="flex justify-between">
          <span className=" font-semibold ">Subtotal</span>
          <span className=" font-medium ">$200.00</span>
        </div>
        <div className="flex justify-between">
          <span className=" font-semibold ">Order Discount</span>
          <span className="  ">-$10.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-bold ">Total (inc. Tax)</span>
          <span className=" font-medium ">$190.00</span>
        </div>
      </div>
    </div>
  );
};

export default HomeKitDetails;
