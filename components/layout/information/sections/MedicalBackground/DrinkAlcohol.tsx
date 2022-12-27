import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const DrinkAlcohol = () => {
  const [alcohol, setAlcohol] = useState("");

  function onChangeValue(event: any) {
    setAlcohol(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <label className="font-semibold">
        Do you drink alcohol
        <span className="text-secondary">*</span>
      </label>
      <div onChange={onChangeValue} className="space-y-2 mt-3">
        <label
          className={`container__radio flex items-center ${
            alcohol == "yes" && "mb-5"
          } `}
        >
          <input
            name="check"
            className="checkbox__radio"
            value="yes"
            type="radio"
          />
          <span className="text-sm  checkmark__radio "></span>
          <span className="text-gray2 font-medium">Yes</span>
          {alcohol == "yes" && (
            <div className="w-[50%] ml-10">
              <Slider
                dots
                min={0}
                max={10}
                defaultValue={1}
                marks={{
                  0: 0,
                  1: 1,
                  2: 2,
                  3: 3,
                  4: 4,
                  5: 5,
                  6: 6,
                  7: 7,
                  8: 8,
                  9: 9,
                  10: 10,
                }}
                dotStyle={{
                  width: "0.5px",
                  marginTop: "2px",
                  height: "0",
                  borderColor: "#AEAEAE",
                }}
                activeDotStyle={{ borderColor: "#AEAEAE" }}
                trackStyle={[{ backgroundColor: "#00C85C", height: "4px" }]}
                railStyle={{ backgroundColor: "#AEAEAE" }}
                handleStyle={[
                  {
                    backgroundColor: "#373737",
                    width: "0",
                    height: "0",
                    border: "none",
                  },
                ]}
                step={null}
                onChange={(value) => console.log(value)}
              />
            </div>
          )}
        </label>
        <label className="container__radio flex items-center mt-5">
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
      {alcohol == "yes" && (
        <span className="text-sm text-[#E90E00]">
          It is not recommended you consume alcohol on the same date of your
          injection.
        </span>
      )}
    </div>
  );
};

export default DrinkAlcohol;
