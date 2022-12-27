import React from 'react'
const data = [
    "Fibromyalgia",
    "Chronic Fatigue Syndrome",
    "Liver or Kidney Problems",
    "Heart Problems",
    "High Blood Pressure",
    "Thyroid Issues",
    "Hormone Issues",
    "Blood Clots",
    "None",
  ];
const Conditions = () => {
  return (
    <div className="pt-5">
            <h3 className=" font-semibold">
              Do you have any of the following conditions?
            </h3>
            <div className=" mt-3 space-y-1">
              {data.map((item, i) => {
                return (
                  <label key={i} className="container flex items-center">
                    <input name="check" className="checkbox" type="checkbox" />
                    <span className="text-sm  checkmark "></span>
                    <span className="text-gray2 font-medium">{item}</span>
                  </label>
                );
              })}
            </div>
            <button className="text-pink1 mt-3">Check ALL that apply</button>
          </div>
  )
}

export default Conditions
