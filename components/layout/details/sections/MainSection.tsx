import React from "react";
import DetailCard from "./DetailCard";
import ProductInfomation from "./ProductInfomation";
import RelatedProducts from "./RelatedProducts";

const MainSection = () => {
  return (
    <div className="px-14 py-10">
      <div className="flex justify-between">
        <div className="border flex justify-center items-center w-[47%] h-[430px]">
          <img className="m-auto h-64" src="/product.png" alt="" />
        </div>
        <div className="w-[50%]">
          <DetailCard />
        </div>
      </div>
      <ProductInfomation />
      <RelatedProducts />
    </div>
  );
};

export default MainSection;
