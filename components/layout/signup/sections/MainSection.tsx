import Link from "next/link";
import React from "react";
import { LinearButton } from "../../../buttons";
import SinupInput from "../../../inputs/SignupInput";

const MainSection = () => {
  return (
    <div>
      <h2 className="text-primary text-3xl font-semibold text-center py-10 tracking-wider">
        Create an Account
      </h2>
      <form className="mt-5 md:w-[70%] lg:w-[40%] m-auto">
        <SinupInput label="Email Address" type={"text"} />
        <div className="mt-5">
          <SinupInput label="Phone Number" type={"text"} />
        </div>
        <div className="mt-5">
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="">
              Phone Number Code <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center">
              <input
                className="outline-none border border-dashed w-full border-gray2 mt-3 py-1 px-3"
                type="text"
              />
              <button
                type="button"
                className="whitespace-nowrap border py-1 mt-3 border-dashed border-gray2 px-5 bg-[#ECECEC] text-gray2 font-medium"
              >
                Get Code
              </button>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-center my-9">
          <span className="">Already Have Account?</span>
          <Link href="signin">
            <button className="text-[#100BFF]">sign in</button>
          </Link>
        </div>
        <div className="flex justify-between mb-16 items-center">
          <button
            type="button"
            className="text-pink1 underline font-medium text-lg"
          >
            Cancel
          </button>
          <LinearButton title="sign in" />
        </div>
      </form>
    </div>
  );
};

export default MainSection;
