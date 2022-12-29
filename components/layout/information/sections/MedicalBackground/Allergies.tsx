import React from "react";

const Allergies = () => {
  return (
    <div>
      <div>
        <span className=" font-semibold">Allergies</span>
        <span className="text-secondary">*</span>
      </div>
      <div className="flex md:flex-row sm:flex-col text-gray2 md:space-x-20 mt-5">
        <span className=" w-[300px] sm:text-sm md:text-base">Do you have food allergy?</span>
        <form>
          <div className="flex sm:space-x-2 md:space-x-8">
            <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">No</span>
            </label>
            <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">Yes</span>
            </label>
            <span className="border-b border-dashed w-[250px] border-b-[#A4A4A4] text-[#A4A4A4] italic sm:hidden md:block">
              Strawberry, eggs, peanut
            </span>
          </div>
        </form>
      </div>
      <div className="flex  md:flex-row sm:flex-col text-gray2 md:space-x-20 mt-5">
        <span className=" w-[300px] sm:text-sm md:text-base">Do you have drug allergy?</span>
        <form>
          <div className="flex sm:space-x-2 md:space-x-8">
            <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">No</span>
            </label>
            <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">Yes</span>
            </label>
          </div>
        </form>
      </div>
      <div className="flex  md:flex-row sm:flex-col text-gray2 md:space-x-20 mt-5">
        <span className=" w-[300px] sm:text-sm md:text-base">Do you have environmental allergy?</span>
        <form>
          <div className="flex sm:space-x-2 md:space-x-8">
            <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">No</span>
            </label>
            <label className="container__radio flex items-center">
              <input name="check" className="checkbox__radio" type="radio" />
              <span className="text-sm  checkmark__radio "></span>
              <span className="text-gray2 font-medium">Yes</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Allergies;
