import Link from "next/link";
import React from "react";

const AccountDropDown = () => {
  return (
    <div className="relative shadow-[4px_4px_4px_rgba(0,0,0,0.15)] bg-white text-left after:w-0 after:h-0 after:border-solid  di">
      <div className="w-[163px] border border-[#E2E2E2] ">
        <Link
         href="/account"
          className="text-[#787878] font-medium whitespace-nowrap  w-full hover:bg-primary/25 block"
        >
          <button className="py-3 border-b border-b-primary/50 w-full text-left px-5 h-full ">My Account</button>
        </Link>
        <button className="text-[#787878] font-medium whitespace-nowrap w-full text-left py-3 px-5 hover:bg-primary/25">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AccountDropDown;
