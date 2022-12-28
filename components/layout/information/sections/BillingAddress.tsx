import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";
import { InfoInput } from "../../../inputs";
import Billing from "./BillingAddress/Billing";
import Shipping from "./BillingAddress/Shipping";

const BillingAddress = () => {
  const [same, setSame] = useState("");
  const [step, setStep] = useRecoilState(StepperAtom);

  function onChangeValue(event: any) {
    setSame(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="lg:ml-20 w-full">
      <div className="border rounded-lg px-5 py-10">
        <Billing />
        <div className="mt-5">
          <label className="font-semibold">
            Billing Address Same as Shipping Address?
            <span className="text-secondary">*</span>
          </label>
          <div onChange={onChangeValue} className="space-y-2 mt-3">
            <label className="container__radio flex items-center">
              <input
                name="check"
                className="checkbox__radio"
                type="radio"
                value="yes"
              />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">Yes</span>
            </label>
            <label className="container__radio flex items-center">
              <input
                name="check"
                className="checkbox__radio"
                type="radio"
                value="no"
              />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">No</span>
            </label>
          </div>
        </div>
        {same === "yes" && <Shipping />}
      </div>
      <div className="mt-10 flex justify-end ">
        <LinearButton onClick={() => setStep(5)} title="Next:: Consent" />
      </div>
    </div>
  );
};

export default BillingAddress;
