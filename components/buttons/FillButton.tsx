import React, { MouseEvent } from "react";

interface Props {
  bgColor?: string;
  shadow?: string;
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

}

const FillButton = ({ bgColor, shadow, title,onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white ${
        bgColor ? bgColor : "bg-primary"
      } px-4 py-1.5 rounded-full font-semibold ${
        shadow ? shadow : "shadow-[0_5px_5px_rgba(149,210,232,0.5)]"
      }`}
    >
      {title}
    </button>
  );
};

export default FillButton;
