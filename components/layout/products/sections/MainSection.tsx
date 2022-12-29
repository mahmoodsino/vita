import React from "react";
import { Breadcrumbs } from "../../../breadcrumbs";
import { ProductsCard } from "../../../card";
import { Tabs } from "../../../tabs";

const ta = [
  "All",
  "Anti-Aging",
  "Immunity & Healing",
  "Muscle Recovery & Performance",
  "Weight Loss & Energy",
];

const MainSection = () => {
  return (
    <div className="lg:px-20 md:px-5 text-center py-10">
      <div className="flex">
        <Breadcrumbs />
      </div>
      <h2 className="text-primary text-xl py-5 font-medium">OUR PRODUCTS</h2>
      <div className="mt-5 overflow-x-auto">
        <Tabs data={ta} />
      </div>
      <div className="md:grid lg:grid-cols-4 md:grid-cols-3 mt-10 gap-5 sm:flex sm:flex-col  sm:justify-center sm:items-center">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <div className="py-14">
        <button className="text-secondary font-semibold text-lg">
          VIEW More ...
        </button>
      </div>
    </div>
  );
};

export default MainSection;
