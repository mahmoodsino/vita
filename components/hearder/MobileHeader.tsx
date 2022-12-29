import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { OpenSidebarAtom } from "../../helper";
import { AccountDropDown } from "../drop-down";
import { AccountIcon, CartIcon } from "../icons";

const MobileHeader = () => {
  const [openSidbarState, setOpenSidbarState] = useRecoilState(OpenSidebarAtom);

  return (
    <div className="w-full h-14 fixed top-0 sm:block md:hidden bg-white shadow-lg z-50 px-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-3">
          <button onClick={() => setOpenSidbarState(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <Link href="/" className="">
            <img className=" h-11" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative group flex items-center">
            <button className="">
              <AccountIcon className="fill-secondary sm:h-9  " />
            </button>
            <div className="absolute opacity-0  invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 right-4 top-[87%] ">
                <div className="triangle-with-shadow"></div>
                <AccountDropDown />
              </div>
          </div>
          <Link
            href="/cart"
            className=" sm:h-8 sm:w-8 bg-[#d9d9d9] rounded-full flex justify-center items-center"
          >
            <CartIcon className=" sm:h-5 stroke-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
