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

const ta = ["All","Anti-Aging","Immunity & Healing","Muscle Recovery & Performance","Weight Loss & Energy"]

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
      <div className="w-[80%] m-auto">
      <Tabs data={ta} />
      </div>
      <div className="grid grid-cols-4 w-[90%] m-auto">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <div className="grid grid-cols-4 w-[85%] m-auto mt-10">
        {data.map((item, i) => {
          return (
            <div className="text-center text-gray1">
              <span className="block text-4xl font-medium">{item.number}</span>
              <span className="block">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
