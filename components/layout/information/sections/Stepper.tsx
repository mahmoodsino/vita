import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { Step } from "../../../step";

const Stepper = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className=" flex flex-col relative  py-10">
      <Step title="Goal" color={step < 1 ? "#D9D9D9" : "#00C85C"} />
      <Step title="HomeKit" color={step < 2 ? "#D9D9D9" : "#00C85C"} />
      <Step title="Information" color={step < 3 ? "#D9D9D9" : "#00C85C"} />
      <Step
        title="Medical Background"
        color={step < 4 ? "#D9D9D9" : "#00C85C"}
      />
      <Step title="Billing Address" color={step < 5 ? "#D9D9D9" : "#00C85C"} />
      <Step title="Form Consent" color={step < 6 ? "#D9D9D9" : "#00C85C"} />
      <Step title="Shipment" color={step < 7 ? "#D9D9D9" : "#00C85C"} />
      <div className="absolute bottom-[2%] -left-[7.5%] flex items-center">
        <div
          className={`h-8 w-8 ${
            step < 8 ? "bg-[#d6d6d6]" : "bg-[#00C85C]"
          } rounded-full`}
        >
          {step < 8 ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="35"
              fill="white"
              className=" bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          )}
        </div>
        <span className="text-lg font-semibold  whitespace-nowrap ml-2">
          Pay
        </span>
      </div>
    </div>
  );
};

export default Stepper;
