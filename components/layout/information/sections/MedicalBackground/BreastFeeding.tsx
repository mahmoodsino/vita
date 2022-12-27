import React from "react";

const BreastFeeding = () => {
  return (
    <div>
        <form>

      <div className="mt-5">
        <label className="font-semibold">
          Are you pregnant or breast feeding?
          <span className="text-secondary">*</span>
        </label>
        <div className="space-y-2 mt-3">
          <label className="container__radio flex items-center">
            <input name="check" className="checkbox__radio" type="radio" />
            <span className="text-sm  checkmark__radio "></span>
            <span className="text-gray2 font-medium">Yes</span>
          </label>
          <label className="container__radio flex items-center">
            <input name="check" className="checkbox__radio" type="radio" />
            <span className="text-sm  checkmark__radio "></span>
            <span className="text-gray2 font-medium">No</span>
          </label>
          <label className="container__radio flex items-center">
            <input name="check" className="checkbox__radio" type="radio" />
            <span className="text-sm  checkmark__radio "></span>
            <span className="text-gray2 font-medium">N/A</span>
          </label>
        </div>
      </div>
        </form>
    </div>
  );
};

export default BreastFeeding;
