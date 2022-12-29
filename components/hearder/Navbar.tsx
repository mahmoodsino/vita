import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AccountDropDown } from "../drop-down";
import { AccountIcon, CartIcon } from "../icons";

const routes = [
  { path: "/", name: "HOME" },
  { path: "/about", name: "ABOUT US" },
  { path: "/services", name: "OUR SERVICES" },
  { path: "/products", name: "OUR PRODUCTS" },
  { path: "/schedule", name: "SCHEDULE APPOINTEMNT" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const [goingUp, setGoingUp] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 350) {
        setGoingUp(true);
      }
      if (currentScrollY <= 350) {
        setGoingUp(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div
      className={` ${
        goingUp &&
        "down bg-white shadow-md sm:hidden  md:block fixed top-0 left-0 right-0 m-auto  z-[1000]"
      }`}
    >
      <div
        className={`lg:px-10 md:px-5 pt-2 m-auto  justify-between items-center h-24 2xl:container sm:hidden md:flex  `}
      >
        <Link href="/" className="">
          <img className="lg:h-[70px] md:h-14" src="/logo.png" alt="" />
        </Link>
        <div className="grow flex justify-end md:space-x-5 lg:space-x-8 items-center">
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                href={route.path}
                className={`text-gray1 md:text-sm lg:text-base font-medium tracking-wide whitespace-nowrap ${
                  pathname.slice(1) !== route.path.slice(1) ? "" : "font-bold"
                }`}
              >
                {pathname.slice(1) === route.path.slice(1) && (
                  <hr className="w-[50%]  m-auto border-2 mb-2 bg-primary/80 rounded-full border-primary/80" />
                )}
                {pathname.slice(1) !== route.path.slice(1) && (
                  <hr className="opacity-0 border-2 mb-2" />
                )}
                <span>{route.name}</span>
              </Link>
            );
          })}
          <div className="flex justify-center items-center lg:space-x-2">
            <div className="relative group">
              <button className="lg:mt-1">
                <AccountIcon className="fill-secondary md:h-9 lg:h-[50px] " />
              </button>
              <div className="absolute opacity-0  invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 right-4 top-[80%] ">
                <div className="triangle-with-shadow"></div>
                <AccountDropDown />
              </div>
            </div>
            <Link
              href="/cart"
              className="lg:h-[45px] lg:w-[45px] md:h-8 md:w-8 bg-[#d9d9d9] rounded-full flex justify-center items-center"
            >
              <CartIcon className="lg:h-6 md:h-5 stroke-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
