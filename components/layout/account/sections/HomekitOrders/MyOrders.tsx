import React, { useState } from "react";
import { ProgressLine } from "../../../../ProgressLine";
import EXPANDOrder from "./EXPANDOrder";

const MyOrders = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full border border-[#8f8f8f] rounded-md pt-8 px-8">
      <div className="flex justify-between">
        <div className="w-[140px]">
          <h4 className="font-semibold">Order 1</h4>
          <h4 className="font-medium">ID # 12345</h4>
        </div>
        <div className="w-[140px]">
          <h4 className="font-semibold">Complete</h4>
          <h4 className="font-bold text-lg">40%</h4>
          <ProgressLine progressPercentage={40} />
        </div>
        <div className="w-[140px]">
          <h4 className="font-semibold">Order Date</h4>
          <h4 className="font-medium text-[#676767]">1/9/2022</h4>
        </div>
      </div>
      <div className=" flex flex-col space-y-3 justify-between left-0 right-0 m-auto">
        <div className="flex flex-row justify-between text-lg text-gray-950 mt-14">
          <h1>Placed</h1>
          <h1>Processing</h1>
          <h1>Delivered</h1>
        </div>
        <ProgressLine progressPercentage={60} />
      </div>
      <div className="mt-10 pb-5 border-b">
        <span className="text-[#3a3a3a]">Delivered on </span>
        <span className="text-gray2">Fri, Sep 18, 2022, 5:00 p.m.</span>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold">Delivery Address</h3>
        <span className="text-gray2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      {showMore === false && (
        <div className="flex justify-center my-3">
          <button
            onClick={() => setShowMore(true)}
            className="flex items-center font-semibold text-[#676767]"
          >
            <span>EXPAND</span>
            <img src="/Polygon.svg" alt="" />
          </button>
        </div>
      )}
      {showMore === true && <EXPANDOrder setShowMore={setShowMore} />}
    </div>
  );
};

export default MyOrders;
