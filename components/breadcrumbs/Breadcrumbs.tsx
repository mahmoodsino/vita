import React from "react";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const push = useRouter().push;
  const pathnames = useRouter()
    .pathname.split("/")
    .filter((x: string) => x);

  return (
    <div>
      <button
        className="text-[#ABABAB] font-medium tracking-[0.03em]"
        onClick={() => push("/")}
      >
        HOME /
      </button>

      {pathnames.map((name: string, index: number) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span
            className="font-semibold tracking-[0.03em] uppercase"
            key={name}
          >
            {name}
          </span>
        ) : (
          <button
            className="font-medium uppercase tracking-[0.03em] !bg-white"
            key={name}
            onClick={() => push(routeTo)}
          >
            `${name} /`
          </button>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
