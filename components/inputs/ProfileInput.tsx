import React from "react";

interface Props {
    label:string,
    placeholder:string
}

const ProfileInput = ({label,placeholder}:Props) => {
  return (
    <div className="w-full">
      <label className="capitalize w-fit flex  ml-0  tracking-wide text-sm font-semibold mb-2 ">
        {label}
        <span className="text-red-600 text-sm">*</span>
      </label>
      <input
        className={`${" appearance-none block w-full bg-white border-gray-1550 border border-[#cccccc] py-2.5 px-4 mb-7 leading-tight focus:outline-none "}`}
        type={"text"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProfileInput;
