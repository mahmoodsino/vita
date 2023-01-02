import React from "react";
import { RelatedProductsCard } from "../../../card";

const RelatedProducts = () => {
  return (
    <div className="mt-10 text-center">
      <h3 className="text-2xl font-semibold">RELATED PRODUCTS</h3>
      <div className="md:grid lg:grid-cols-5 md:grid-cols-3 mt-5 sm:flex sm:flex-col sm:items-center">
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
