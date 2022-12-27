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
    <div className="my-8">
      <div className="text-center">
        <span className="font-semibold  text-center text-gray2 text-lg">
          Homekit{" "}
        </span>
        <span className="text-gray2 font-medium">
          ... Prescribed - Shipped - Delivered
        </span>
        <span className="block text-2xl mt-3 font-semibold text-primary">
          The VITAstir MD Process
        </span>
      </div>
      <div className="w-[50%] m-auto">
        <Tabs data={ta} />
      </div>
      <div className="grid grid-cols-3  w-[80%] m-auto mt-10">
        {data.map((item, i) => {
          return <FeaturesCard key={i} img={item.image} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Features;
