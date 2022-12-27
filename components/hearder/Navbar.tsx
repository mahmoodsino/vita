import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AccountIcon, CartIcon } from "../icons";

export const routes = [
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
    <div className={`${goingUp && "down bg-white shadow-md fixed top-0 left-0 right-0 m-auto  z-[1000]"}`}>
      <div className={`px-10 pt-2 flex justify-between items-center h-24 2xl:container m-auto `}>
        <Link href="/" className="">
          <img className="h-[70px]" src="/logo.png" alt="" />
        </Link>
        <div className="grow flex justify-end space-x-8 items-center">
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                href={route.path}
                className={`text-gray1 font-medium tracking-wide whitespace-nowrap ${
                  pathname.slice(1) !== route.path.slice(1) ? "" : "font-bold "
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
          <div className="flex justify-center items-center space-x-2">

          <Link href="/account" className="mt-1">
            <AccountIcon className="fill-secondary h-[50px] " />
          </Link>
          <Link href="/cart" className="h-[45px] w-[45px] bg-[#d9d9d9] rounded-full flex justify-center items-center">
            <CartIcon className="h-6 stroke-white" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
