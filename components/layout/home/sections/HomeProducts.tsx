import React, { useState } from "react";
import { ProductsCard } from "../../../card";
import { Tabs } from "../../../tabs";

const data = [
  {
    number: "92%",
    name: "Weight Loss Program Success Rate",
  },
  {
    number: "12-16",
    name: "Average Monthly Weight Loss ",
  },
  {
    number: "99%",
    name: "Customer Satisfaction",
  },
  {
    number: "100%",
    name: "Vitamin Energy Level",
  },
];

const ta = [
  "All",
  "Anti-Aging",
  "Immunity & Healing",
  "Muscle Recovery & Performance",
  "Weight Loss & Energy",
];

const HomeProducts = () => {
  return (
    <div className="mb-14">
      <div className="px-5 text-center pt-8">
        <span className="">Featured Injectables</span>
        {/* <Link
            href=""
            className="text-sm text-[#DF00A1] inline-block  items-center font-bold"
          >
            VIEW ALL
            <img className="inline-block" src="/ArrowRight.svg" alt="" />
          </Link> */}
        <h4 className="pt-3 text-center text-2xl text-primary font-semibold">
          OUR PRODUCTS
        </h4>
      </div>
      <div className="lg:w-[80%] md:w-[95%] m-auto sm:overflow-x-auto">
        <Tabs data={ta} />
      </div>
      <div className="md:grid md:grid-cols-3 gap-3 lg:grid-cols-4 w-[90%] m-auto sm:flex sm:flex-col sm:items-center">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <div className="sm:hidden md:grid grid-cols-4 lg:w-[85%] m-auto mt-10">
        {data.map((item, i) => {
          return (
            <div key={i} className="text-center text-gray1">
              <span className="block md:text-2xl lg:text-4xl font-medium">
                {item.number}
              </span>
              <span className="block lg:text-base md:text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
