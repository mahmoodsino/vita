import Link from "next/link";
import React from "react";
import { GoalCard } from "../../../card";

const Goals = () => {
  return (
    <div className="bg-gray3 my-14 ">
      <div className="px-5 text-center py-8">
        <span className="">Get Your Injections</span>
        {/* <Link
            href=""
            className="text-sm text-[#DF00A1] inline-block  items-center font-bold"
          >
            VIEW ALL
            <img className="inline-block" src="/ArrowRight.svg" alt="" />
          </Link> */}
        <h4 className="py-3 text-center text-2xl text-primary font-semibold">
          YOUR GOALS
        </h4>
      </div>
      <div className="grid grid-cols-4 w-[90%] m-auto">
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
      </div>
    </div>
  );
};

export default Goals;
