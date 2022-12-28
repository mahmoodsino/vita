import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";
import { ThanksForOrder } from "../../../Modals";

const Pay = () => {
  const [step, setStep] = useRecoilState(StepperAtom);
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:ml-20 w-full">
      <div className="border rounded-lg px-5 py-10 ">
        <div>
          <span className="font-medium">Total</span>
          <span className="text-gray2">$190.00</span>
        </div>
        <div className="bg-[#F0F0F0] px-3 py-1 rounded-md w-[70%] flex space-x-5 items-center mt-3">
          <div className="border w-fit px-2 py-1 border-black/75 rounded-md">
            <img src="/mastercard.svg" alt="" />
          </div>
          <span className="text-lg font-medium text-gray2">
            xxx-xxx-xxx-236
          </span>
        </div>
        <button className="underline text-sm mt-1">+ Add new card</button>
        <div className="mt-10">
          <h3 className="font-medium">ONE-TIME OR SUBSCRIPTION ORDER?</h3>
          <form>
            <div className="flex space-x-8 mt-5">
              <label className="container__radio flex items-center">
                <input name="check" className="checkbox__radio" type="radio" />
                <span className="text-sm  checkmark__radio "></span>
                <span className="text-gray2 text-sm">ONE-TIME ORDER ONLY</span>
              </label>
              <label className="container__radio flex items-center">
                <input name="check" className="checkbox__radio" type="radio" />
                <span className="text-sm  checkmark__radio "></span>
                <span className="text-gray2 text-sm ">
                  RECURRING SUBSCRIPTION MONTHLY
                </span>
              </label>
            </div>
          </form>
          <span className="block text-sm mt-3 text-primary">
            (Subscription will be charged on this day every month. Cancelation
            must be more than 48 hours before the next billing cycle.)
          </span>
        </div>
      </div>
      <div className="mt-10 flex justify-end ">
        <LinearButton onClick={() => setOpen(true)} title="Submit" />
      </div>
      {open && <ThanksForOrder open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Pay;
