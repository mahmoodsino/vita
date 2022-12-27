import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";

const data = [
  "Energy",
  "Weight Loss",
  "Performance / Lean",
  "Help my Deficiency",
  "Hormone Balance",
  "Immune Boost",
  "Skin",
  "Help with Depression",
  "General Wellness",
];

const Goal = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className="w-[70%] ">
      <div className=" border rounded-md px-10 w-full py-10">
        <h3 className=" font-semibold">
          WHAT IS/ARE YOUR MEDICAL PLAN(S)?
        </h3>
        <div className="ml-3 mt-5 space-y-1">
          {data.map((item, i) => {
            return (
              <label key={i} className="container flex items-center">
                <input name="check" className="checkbox" type="checkbox" />
                <span className="text-sm  checkmark "></span>
                <span className="text-gray2 font-medium">{item}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <LinearButton
          onClick={() => setStep(step + 1)}
          title="Next: Choose A HomeKit"
        />
      </div>
    </div>
  );
};

export default Goal;
