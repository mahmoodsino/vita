import React, { MouseEvent } from "react";

interface Props {
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  linear?: string;
}

const LinearButton = ({ title, onClick, linear }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      style={
        linear
          ? { background: `${linear}` }
          : {
              background:
                "linear-gradient(90.1deg, #DF00A1 0.15%, #FF79DA 99.98%)",
            }
      }
      className="rounded-full px-8 py-2.5  font-medium text-white"
    >
      {title}
    </button>
  );
};

export default LinearButton;
