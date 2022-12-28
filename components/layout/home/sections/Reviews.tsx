import React from "react";
import { ReviewsCard, WinnerCard } from "../../../card";

const Reviews = () => {
  return (
    <div className="mb-14 px-10 sm:hidden md:block">
      <div className="lg:px-5 text-center pt-8">
        <span className="">They Trusted Us</span>
        {/* <Link
            href=""
            className="text-sm text-[#DF00A1] inline-block  items-center font-bold"
          >
            VIEW ALL
            <img className="inline-block" src="/ArrowRight.svg" alt="" />
          </Link> */}
        <h4 className="pt-3 text-center text-2xl text-primary font-semibold">
          REVIEWS
        </h4>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 group relative">
        <div className="h-full w-full z-20 bg-white group-hover:bg-white/40 lg:absolute md:hidden group-hover:z-40 transition-all duration-700 "></div>
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
      </div>
      <div className="mt-10">
       <WinnerCard />
      </div>
    </div>
  );
};

export default Reviews;
