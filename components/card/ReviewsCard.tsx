import React from "react";

const ReviewsCard = () => {
  return (
    <div className="w-[30%] h-[380px] z-30 hover:z-50 bg-gray3 px-3 rounded-md hover:scale-110 transition-all duration-500 hover:shadow-[-4px_-4px_20px_4px_rgba(255,121,218,0.2)]">
      <img src="/quotes.svg" alt="" />
      <h4 className=" h-[210px] px-2">
        “The Weight Loss program and injections have changed my life in 30 days.
        I have so much energy from the B12 shots. In 30 days I have lost 4
        inches from my waist and these very stubborn 10 lbs that I’ve been
        trying to lose for the last 2 years. The staff there are so supportive.
        Thanks so much Sara and Colleen.”
      </h4>
      <div className="flex items-center space-x-2 odd">
        <img className="rounded-full h-16" src="/Ellipse.png" alt="" />
        <div className="flex flex-col ">
          <span className="font-semibold">Jill Allen, Flight Attendant</span>
          <span className="text-secondary">Ypsilanti, MI</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
