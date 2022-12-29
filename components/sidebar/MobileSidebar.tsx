import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { OpenSidebarAtom } from "../../helper";

const routes = [
  { path: "/", name: "HOME" },
  { path: "/about", name: "ABOUT US" },
  { path: "/services", name: "OUR SERVICES" },
  { path: "/products", name: "OUR PRODUCTS" },
  { path: "/schedule", name: "SCHEDULE APPOINTEMNT" },
];

const MobileSidebar = () => {
  const [openSidbarState, setOpenSidbarState] = useRecoilState(OpenSidebarAtom);

  return (
    <>
      <div
        className={` ${
          openSidbarState ? "left-0 " : "-left-full"
        } top-0 left-0 w-[60vw] px-5 bg-white shadow-lg z-[1000] fixed h-[100vh] overflow-y-auto transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between  ml-1 mt-8 mb-6">
          <Link href="/" className="">
            <img className=" h-11" src="/logo.png" alt="" />
          </Link>
          <button onClick={() => setOpenSidbarState(false)}>
            <img src="/close.svg" alt="" />
          </button>
        </div>
        <div
          onClick={() => setOpenSidbarState(false)}
          className="px-[5px] pb-5 text-[#46474a] space-y-3   border-b"
        >
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                className="flex items-center text-sm whitespace-nowrap font-medium"
                href={route.path}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
      {openSidbarState ? (
        <div
          onClick={() => setOpenSidbarState(false)}
          className="opacity-25 fixed inset-0 z-[999] bg-black  "
        ></div>
      ) : null}
    </>
  );
};

export default MobileSidebar;
