import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";
import HomeKitDetails from "./HomeKitDetails";

const Shipment = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className="ml-20 w-full">
      <div className="border rounded-lg px-5 py-10">
        <form className="">
        <h3 className="font-medium">Choose your Shipment</h3>
        <div className="mt-5">
        <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">5-7 Days Shipping</span>
            </label>
        </div>
        </form>
        <div className="w-[70%] mt-10">
            <h3 className="mb-5 font-semibold">6 Doses Vit B12 Homekit Package</h3>
            <HomeKitDetails />

        </div>
      </div>
      <div className="mt-10 flex justify-end ">
        <LinearButton onClick={() => setStep(7)} title="Next: Payment" />
      </div>
    </div>
  );
};

export default Shipment;
