import React from "react";
import ReactStars from "react-stars";
import ReviewsElement from "./ReviewsElement";

const Reviews = () => {
  return (
    <div>
      <ReactStars count={5} edit={true} size={25} color2={"#EBD300"} />
      <div className="mt-2">
        <textarea
        rows={3}
          className="outline-none resize-none  text-sm px-3 h-20 w-full bg-white py-2"
          placeholder="Write your reivew"
        />
        <div className="w-full flex justify-between my-3">
          <button className="text-gray1 sm:text-sm md:text-base font-semibold underline">
            Upload Photos
          </button>
          <button className="flex font-medium sm:text-sm md:text-base items-center space-x-4 px-3 py-1 border border-black rounded-md">
            Add Review
          </button>
        </div>
      </div>
      <div>
        <ReviewsElement />
        <ReviewsElement />
      </div>
    </div>
  );
};

export default Reviews;
