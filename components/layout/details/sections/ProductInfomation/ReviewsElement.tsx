import React from "react";
import ReactStars from "react-stars";

const ReviewsElement = () => {
  return (
    <div className="py-5 border-b border-b-[#eeeee] ">
      <h4 className="text-sm font-bold">John Smith</h4>
      <div className="flex items-center space-x-2 ">
        <ReactStars
          count={5}
          value={4}
          edit={false}
          size={13}
          color2={"#EBD300"}
        />
        <span className="md:text-xs sm:text-[10px] text-gray1">01/02/2022</span>
      </div>
      <span className="md:text-sm sm:text-xs block mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl blandit
        massa luctus curabitur tincidunt neque, et, ornare suscipit. Dictum
        lacinia in ac sem eget. Dolor turpis dolor volutpat interdum. Convallis
        egestas ultricies ac tincidunt dictumst. Sit aliquet amet morbi
        adipiscing viverra amet. Sed blandit neque nibh diam non.
      </span>
    </div>
  );
};

export default ReviewsElement;
