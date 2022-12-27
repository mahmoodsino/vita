import React from "react";

interface Props {
  title: string;
  textColor?: String;
  borderColor?: String;
}

const BorderButton = ({ title, borderColor, textColor }: Props) => {
  return (
    <button
      className={`font-semibold px-4 py-1.5 border-2 ${
        borderColor ? borderColor : "border-primary"
      } ${textColor ? textColor : "text-primary"} rounded-full`}
    >
      {title}
    </button>
  );
};

export default BorderButton;
