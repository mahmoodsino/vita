import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";
import SinupInput from "../../../inputs/SignupInput";

const Information = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className="lg:ml-20 w-full">
      <div className="border rounded-lg px-5 py-10">
        <form className="w-[78%] m-auto">
          <div className="grid grid-cols-2 gap-10">
            <SinupInput label="First Name" type="text" />
            <SinupInput label="Last Name" type="text" />
          </div>
          <div className="mt-5">
            <SinupInput label="Date of Birth" type="text" />
          </div>
          <div className="mt-5">
            <SinupInput label="Height (feet & inches)" type="text" />
          </div>
          <div className="mt-5">
            <SinupInput label="Weight (lbs)" type="text" />
          </div>
          <div className="mt-5">
            <SinupInput label="Race" type="text" />
            <span className="text-sm block mt-0.5 text-gray2">
              (We ask this because some populations are more susceptible to
              certain conditions than others.)
            </span>
          </div>
          <div className="mt-5">
            <label className="font-semibold">
              Sex <span className="text-secondary">*</span>
            </label>
            <div className="space-y-2 mt-3">
              <label className="container__radio flex items-center">
                <input name="check" className="checkbox__radio" type="radio" />
                <span className="text-sm  checkmark__radio "></span>
                <span className="text-gray2 font-medium">Male</span>
              </label>
              <label className="container__radio flex items-center">
                <input name="check" className="checkbox__radio" type="radio" />
                <span className="text-sm  checkmark__radio "></span>
                <span className="text-gray2 font-medium">Female</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10 flex justify-end ">
        <LinearButton
          onClick={() => setStep(3)}
          title="Next: Medical Background"
        />
      </div>
    </div>
  );
};

export default Information;
