import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";
import { LinearButton } from "../../../buttons";
import SinupInput from "../../../inputs/SignupInput";
import Allergies from "./MedicalBackground/Allergies";
import BreastFeeding from "./MedicalBackground/BreastFeeding";
import ChooseFile from "./MedicalBackground/ChooseFile";
import Conditions from "./MedicalBackground/Conditions";
import DrinkAlcohol from "./MedicalBackground/DrinkAlcohol";
import OccupationandMedicalH from "./MedicalBackground/OccupationandMedicalH";

const MedicalBackground = () => {
  const [bloodThinners, setBloodThinners] = useState("");
  const [step, setStep] = useRecoilState(StepperAtom);

  function onChangeValue(event: any) {
    setBloodThinners(event.target.value);
  }

  return (
    <div className="lg:ml-20 w-full">
      <div className="border rounded-lg px-5 py-10">
        <Allergies />
        <div className="mt-7 space-y-3 md:w-[85%]">
          <OccupationandMedicalH />
          <Conditions />
        </div>
        <div className="mt-5">
          <form>
            <label className="font-semibold sm:text-sm md:text-base">
              Are you taking any blood thinners?
              <span className="text-secondary">*</span>
            </label>
            <div onChange={onChangeValue} className="space-y-2 mt-3">
              <label className="container__radio flex items-center">
                <input
                  name="check"
                  className="checkbox__radio"
                  value="yes"
                  type="radio"
                />
                <span className="text-sm  checkmark__radio "></span>
                <span className="text-gray2 font-medium">Yes</span>
              </label>
              <label className="container__radio flex items-center">
                <input
                  name="check"
                  className="checkbox__radio"
                  value="no"
                  type="radio"
                />
                <span className="text-sm  checkmark__radio "></span>
                <span className="text-gray2 font-medium">No</span>
              </label>
            </div>
            {bloodThinners == "yes" && (
              <span className="text-sm text-[#E90E00]">
                I understand that if I am taking anti-coagulants(blood thinners)
                then I may have delayed clotting when giving myself an
                injection. I understand that in this circumstance I may bleed a
                little more than usual patient. If I have any questions about
                this I will discuss with my nurse at nurse@vitastir.com
              </span>
            )}
            <div className="mt-5">
              <SinupInput
                label="Prescription Medications or Non-Prescription Suplements you are currently taking:"
                type="text"
                placeholder="Clopidogrel 75"
              />
            </div>
            <div className="mt-5">
              <DrinkAlcohol />
            </div>
          </form>
          <BreastFeeding />
          <ChooseFile />
        </div>
      </div>
      <div className="mt-10 flex justify-end ">
        <LinearButton onClick={() => setStep(4)} title="Next:: Address" />
      </div>
    </div>
  );
};

export default MedicalBackground;
