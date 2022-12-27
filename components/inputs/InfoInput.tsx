import React from "react";

interface Props {
  type: "text" | "password";
  label?: string;
  placeholder?: string;
}

const InfoInput = ({label,placeholder,type}:Props) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="outline-none border rounded-md w-full border-dashed border-gray2/80 mt-3 py-1.5 px-3"
        type={type}
      />
      <label className="text-sm text-gray2" htmlFor="">
        {label}
      </label>
    </div>
  );
};

export default InfoInput;
