import React from "react";
import { RelatedProductsCard } from "../../../card";

const RelatedProducts = () => {
  return (
    <div className="mt-10 text-center">
      <h3 className="text-2xl font-semibold">RELATED PRODUCTS</h3>
      <div className="grid grid-cols-5 mt-5">
        <RelatedProductsCard />
        <RelatedProductsCard />
        <RelatedProductsCard />
        <RelatedProductsCard />
        <RelatedProductsCard />
      </div>
    </div>
  );
};

export default RelatedProducts;
