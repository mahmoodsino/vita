import React from "react";

interface Props {
  img: string;
  title: string;
}

const FeaturesCard = ({ img, title }: Props) => {
  return (
    <div className="shadow-[4px_4px_10px_rgba(216,216,216,0.5)] rounded-xl w-[290px] bg-gray3 ">
      <div className="py-7 px-7 flex flex-col items-center">
        <img className="h-20" src={img} alt="" />
        <h4 className="whitespace-nowrap text-[#616161] mt-5">{title}</h4>
      </div>
    </div>
  );
};

export default FeaturesCard;
