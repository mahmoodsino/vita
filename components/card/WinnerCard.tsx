import React from "react";

const WinnerCard = () => {
  return (
    <div className="flex mx-5  py-5 px-5 rounded-xl border">
      <img className="w-52" src="/review.png" alt="" />
      <div className="flex flex-col mt-10 ml-5">
        <span className="font-bold text-lg">Previous WINNER</span>
        <span className="text-sm italic mt-3">
          2018 WINTER CHALLENGE WINNER! I’m so glad I went ahead and took the
          challenge. A little healthy competition was exactly what I needed to
          get out of my post-cancer slump and start moving again. I’d become
          totally detached from my body while I was sick – I just didn’t want to
          face my fears. The amount of energy I felt during the challenge made
          me feel alive again.
        </span>
        <span className="mt-5 font-semibold">Kate G</span>
        <span className="font-medium">Age 53</span>
      </div>
    </div>
  );
};

export default WinnerCard;
