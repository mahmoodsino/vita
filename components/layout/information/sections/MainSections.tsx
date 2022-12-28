import React from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import BillingAddress from "./BillingAddress";
import FormConsent from "./FormConsent";
import Goal from "./Goal";
import HomeKit from "./HomeKit";
import HorizontalStepper from "./HorizontalStepper";
import Information from "./Information";
import MedicalBackground from "./MedicalBackground";
import Pay from "./Pay";
import Shipment from "./Shipment";
import Stepper from "./Stepper";

const MainSections = () => {
  const [step, setStep] = useRecoilState(StepperAtom);

  return (
    <div className="lg:px-16 md:px-5 py-10">
      <div className="flex lg:flex-row md:flex-col ">
        <div className="w-[20%] sm:hidden lg:block">
          <Stepper />
        </div>
        <div className="mb-10 sm:block lg:hidden">
          <HorizontalStepper />
        </div>
        {step === 0 && <Goal />}
        {step === 1 && <HomeKit />}
        {step === 2 && <Information />}
        {step === 3 && <MedicalBackground />}
        {step === 4 && <BillingAddress />}
        {step === 5 && <FormConsent />}
        {step === 6 && <Shipment />}
        {step === 7 && <Pay />}
      </div>
    </div>
  );
};

export default MainSections;
