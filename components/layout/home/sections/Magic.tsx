import React from "react";
import { BorderButton } from "../../../buttons";

const Magic = () => {
  return (
    <div className="text-center bg-gray3 lg:px-20 sm:px-5 py-10 relative mt-5">
      <h4 className="font-semibold text-2xl text-primary ">
        VITAMINS ARE MAGIC
      </h4>
      <span className="block mt-3">
        Roll up your sleeve and feel better. We live fast paced, frenetic lives
        and rarely stop to evaluate our health. Eating on the go is a daily
        routine for many. When a proper diet is not always an option, and life
        gets in the way, many deficiencies can develop. These deficiencies seem
        to become apparent in the form of low energy (fatigue), weight gain,
        aging, anxiety, stress, depression and just very low stamina. Vitamin
        injections bridge the gap. Modern on-the-go lifestyles require us to do
        more, give more and be better. A simple dose of pure nutrient vitamins
        can drastically increase ones daily energy output. Yes, live a full and
        fast paced life, but don,t forget to give your body the nutrients it
        needs. Take a little time to recharge. You,ll love us for it!
      </span>
      <div className="mt-5 pt-5">
        <BorderButton
          borderColor="border-secondary"
          textColor="text-secondary"
          title="Schedule Visit"
        />
      </div>
      <img className="absolute sm:hidden md:block right-0 bottom-0" src="/nosh.png" alt="" />
    </div>
  );
};

export default Magic;
