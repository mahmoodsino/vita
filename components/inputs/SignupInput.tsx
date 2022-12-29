import React from "react";

interface Props {
  label: string;
  type: "text" | "password";
  placeholder?: string;
}

const SinupInput = ({ label, type, placeholder }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold sm:text-sm md:text-base" htmlFor={label}>
        {label} <span className="text-secondary">*</span>
      </label>
      <input
        placeholder={placeholder}
        id={label}
        className="outline-none border rounded-md border-dashed border-gray2/80 mt-3 py-1.5 px-3"
        type={type}
      />
    </div>
  );
};

export default SinupInput;
