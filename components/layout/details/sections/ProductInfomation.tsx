import React, { useState } from "react";
import Infomation from "./ProductInfomation/Infomation";
import Recommendations from "./ProductInfomation/Recommendations";
import Reviews from "./ProductInfomation/Reviews";

const ProductInfomation = () => {
  const [informationComponent, setInformationCompanents] = useState(1);
  return (
    <div className="bg-[#F6F6F6] py-5 px-8 mt-8">
      <div className="flex space-x-20 border-b">
        <button
          onClick={() => setInformationCompanents(1)}
          className={`pb-5 font-medium ${
            informationComponent === 1 &&
            "border-b-4 text-[#42BCEB] border-b-[#42BCEB]"
          }`}
        >
          Product Infomation
        </button>
        <button
          onClick={() => setInformationCompanents(2)}
          className={`pb-5 font-medium ${
            informationComponent === 2 &&
            "border-b-4 text-[#42BCEB] border-b-[#42BCEB]"
          }`}
        >
          Recommendations
        </button>
        <button
          onClick={() => setInformationCompanents(3)}
          className={`pb-5 font-medium ${
            informationComponent === 3 &&
            "border-b-4 text-[#42BCEB] border-b-[#42BCEB]"
          }`}
        >
          Reviews(0)
        </button>
      </div>
      <div className="mt-7">
            {informationComponent ===1 && <Infomation />}
            {informationComponent ===2 && <Recommendations />}
            {informationComponent ===3 && <Reviews />}
      </div>
    </div>
  );
};

export default ProductInfomation;
