import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { HorizontalStep } from "../../../step";

const HorizontalStepper = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className="flex items-center">
      <HorizontalStep title="Goal" color={step < 1 ? "#D9D9D9" : "#00C85C"} />
      <HorizontalStep
        title="HomeKit"
        color={step < 2 ? "#D9D9D9" : "#00C85C"}
      />
      <HorizontalStep
        title="Information"
        color={step < 3 ? "#D9D9D9" : "#00C85C"}
      />
      <HorizontalStep
        title="Medical Background"
        color={step < 4 ? "#D9D9D9" : "#00C85C"}
      />
      <HorizontalStep
        title="Billing Address"
        color={step < 5 ? "#D9D9D9" : "#00C85C"}
      />
      <HorizontalStep
        title="Form Consent"
        color={step < 6 ? "#D9D9D9" : "#00C85C"}
      />
      <HorizontalStep
        title="Shipment"
        color={step < 7 ? "#D9D9D9" : "#00C85C"}
      />
      <div
        className={`h-8 w-8 relative ${
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

        <h4 className="text-xs absolute top-[100%] -left-[30px] right-0 m-auto w-[80px] text-center ">
          pay
        </h4>
      </div>
    </div>
  );
};

export default HorizontalStepper;
