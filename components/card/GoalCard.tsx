import React from "react";

const GoalCard = () => {
  return (
    <div className="w-48 relative hiddEff mb-8">
      <img
        style={{ objectFit: "cover" }}
        className="w-48 h-[280px] rounded-md border  "
        src="/Rectangle.png"
        alt=""
      />
      <div className="flex flex-col ">
        <h5 className="text-center text-gray2 font-semibold mt-1">
          Vitamin D Injection
        </h5>
        <button className="text-[#00ACED] text-xs italic text-center">
          Depression and Mood
        </button>
      </div>
      <div className="absolute w-48 h-0 info opacity-0 top-0 bg-primary/50  rounded-md ">
        <div className="text-center text-white py-10">
          <span className="block ">Available as:</span>
          <div className="mt-5 space-y-2">
            <button className="underline font-medium text-sm">
              Homekit Order
            </button>
            <button className="underline font-medium text-sm">
              Ofiice Package Order
            </button>
            <button className="underline font-medium text-sm">
              In-Ofiice Injection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
