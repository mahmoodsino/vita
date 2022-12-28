import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";
import { HomeKitElement } from "../elements";
import HomeKitDetails from "./HomeKitDetails";

const HomeKit = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className="lg:ml-20 w-full">
      <div className="border rounded-lg px-5 py-10 space-y-7">
        <HomeKitElement />
        <HomeKitElement />
        <HomeKitElement />
        <HomeKitElement />
      </div>
      <div className="flex justify-end mt-10">
        <div className="w-[50%]">
          <HomeKitDetails />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setStep(2)}
          className="flex text-pink1 space-x-1 font-semibold"
        >
          Skip <img src="/skip.svg" alt="" />
        </button>
        <LinearButton onClick={() => setStep(2)} title="Next: All About You" />
      </div>
    </div>
  );
};

export default HomeKit;
