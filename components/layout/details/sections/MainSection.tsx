import React from "react";
import DetailCard from "./DetailCard";
import ProductInfomation from "./ProductInfomation";
import RelatedProducts from "./RelatedProducts";

const MainSection = () => {
  return (
    <div className="lg:px-14 md:px-5 py-10">
      <div className="flex lg:flex-row md:flex-col justify-between">
        <div className="border flex justify-center items-center w-[47%] m-auto h-[430px]">
          <img className="m-auto h-64" src="/product.png" alt="" />
        </div>
        <div className="lg:w-[50%] md:mt-5 lg:mt-0">
          <DetailCard />
        </div>
      </div>
      <div className="w-full">
        <ProductInfomation />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default MainSection;
