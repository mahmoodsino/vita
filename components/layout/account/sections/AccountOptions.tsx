import React from "react";
import { useRecoilState } from "recoil";
import { AccountComponentsAtom } from "../../../../helper";

const AccountOptions = () => {
  const [btnAccount, setBtnAccount] = useRecoilState(AccountComponentsAtom);
  return (
    <div className="bg-[#95D2E8]/20 mx-5 flex  flex-col  w-[213px]  h-fit shadow-[0_0_5px_rgba(0,0,0,0.12)] lg:py-6 ">
      <button
        onClick={() => setBtnAccount(1)}
        className={`py-3 flex whitespace-nowrap lg:pl-3 px-2   ${
          btnAccount === 1 || btnAccount === 0
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        My Profile
      </button>
      <button
        onClick={() => setBtnAccount(2)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 2
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
        title=""
      >
        Address book
      </button>
      <button
        onClick={() => setBtnAccount(3)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 3
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        Payment Method
      </button>
      <button
        onClick={() => setBtnAccount(4)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 4
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        Homekit Orders
      </button>
      <button
        onClick={() => setBtnAccount(5)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 5
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        Subscriptions
      </button>
      <button
        onClick={() => setBtnAccount(6)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 6
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        Appointments
      </button>
      <button
        onClick={() => setBtnAccount(7)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 7
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        My Chat
      </button>
      <button
        onClick={() => setBtnAccount(8)}
        className={`py-3 flex whitespace-nowrap lg:pl-3  px-2  ${
          btnAccount === 8
            ? "font-bold  bg-[#95D2E8]"
            : "font-medium hover:bg-[#95D2E8]/30"
        }`}
      >
        My Office Packages
      </button>
    </div>
  );
};

export default AccountOptions;
