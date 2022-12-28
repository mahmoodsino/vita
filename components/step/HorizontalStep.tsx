import React from "react";

interface Props {
  color: string;
  title: string;
}

const HorizontalStep = ({ color, title }: Props) => {
  return (
    <div className="my-5 flex items-center">
      <div className="relative">
        <div
          style={{ backgroundColor: `${color}` }}
          className="w-8 h-8 rounded-full flex justify-center items-center "
        >
          {color !== "#D9D9D9" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="35"
              fill="white"
              className=" bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          )}
        </div>
        <h4 className="text-xs absolute -left-[30px] right-0 m-auto w-[80px] text-center ">{title}</h4>
      </div>
      <hr
        style={{ border: `2px solid ${color}` }}
        className="border-2 w-[60px]"
      />
    </div>
  );
};

export default HorizontalStep;
