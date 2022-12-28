import React from "react";
import { FeaturesCard } from "../../../card";
import { Tabs } from "../../../tabs";

const data = [
  {
    image: "/tabler.svg",
    title: "Step 1: Start Online Visit",
  },
  {
    image: "/healthicons.svg",
    title: "Step 2: Physician Review",
  },
  {
    image: "/truck.svg",
    title: "Step 3: Get Fast Home Delivery",
  },
];

const ta = ["Homekits", "Office Packages", "Inoffice visit"];

const Features = () => {
  return (
    <div className="my-8 overflow-hidden sm:px-2 md:px-0">
      <div className="text-center">
        <span className="font-semibold  text-center text-gray2 md:text-lg">
          Homekit
        </span>
        <span className="text-gray2 font-medium">
          ... Prescribed - Shipped - Delivered
        </span>
        <span className="block md:text-2xl mt-3 font-semibold text-primary">
          The VITAstir MD Process
        </span>
      </div>
      <div className="lg:w-[50%] md:w-[80%] sm:w-[90%] m-auto sm:overflow-x-auto px-3">
        <Tabs data={ta} />
      </div>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 md:w-[80%]  m-auto mt-10 sm:flex sm:flex-col sm:items-center">
        {data.map((item, i) => {
          return <FeaturesCard key={i} img={item.image} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Features;
