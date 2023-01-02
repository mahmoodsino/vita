import Link from "next/link";
import React from "react";
import { RightArrowIcon } from "../icons";

export const routes = [
  { path: "/", name: "HOME" },
  { path: "/about", name: "ABOUT US" },
  { path: "/services", name: "OUR SERVICES" },
  { path: "/products", name: "OUR PRODUCTS" },
  { path: "/schedule", name: "SCHEDULE APPOINTEMNT" },
];

const Fotter = () => {
  return (
    <div className="border-t-2 ">
      <div className="2xl:container m-auto  !ml-5 mx-10 border-b border-b-primary/50">
        <div className="py-3 sm:space-y-6 lg:space-y-0 my-3 grid md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img className="h-32" src="/logo.png" alt="" />
          </div>
          <div className="text-left">
            <h4 className="underline font-semibold text-xl">OUR CLINICS</h4>
            <div className="space-y-1 mt-3 text-gray1">
              <span className="block">1.Ann Arbor </span>
              <span className="block">2.Birmingham </span>
              <span className="block">3.Bloomfield Hills </span>
              <span className="block">4.Farmington Hills </span>
              <span className="block">5.Nothville </span>
              <span className="block">6.Troy </span>
            </div>
          </div>
          <div className="text-left">
            <h4 className="underline font-semibold text-xl">SITE MAP</h4>
            <div className="space-y-1 mt-3 text-gray1">
              {routes.map((item, i) => {
                return (
                  <Link key={i} href={item.path} className="block">
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="text-left">
            <h4 className="underline font-semibold text-xl">SUBSCRIBE</h4>
            <div className="mt-3">
              <form>
                <div className="flex ">
                  <input
                    placeholder="Enter email address"
                    className="px-3 py-4 w-[70%]  outline-none bg-[#F6F6F6]"
                    type="email"
                  />
                  <button type="submit" className="bg-primary px-4">
                    <RightArrowIcon />
                  </button>
                </div>
              </form>
              <span className="text-secondary text-sm">
                Get a free injection on your birthday. We,ll send you a
                reminder.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray2 text-xs py-5">
        <span>All CopyRIghts Are Reserved @ 2022</span>
      </div>
    </div>
  );
};

export default Fotter;
