import React from "react";
import { ChatPhotoElement } from "../elements";

interface Props {
  setOpenDetails: any;
}

const data = [
  { icon: "/healthiconsAmbulatory.svg", name: "Clinic Name" },
  { icon: "/mobile.svg", name: "123-4567-789" },
  { icon: "/email.svg", name: "Drsmith@gmail.com" },
];

const DetailsSection = ({ setOpenDetails }: Props) => {
  return (
    <div className="p-3  h-[100%]">
      <div className="flex justify-end">
        <button onClick={() => setOpenDetails(false)}>
          <img src="/close.svg" alt="" />
        </button>
      </div>
      <ChatPhotoElement />
      <div className="mt-8">
        {data.map((item, i) => {
          return (
            <div key={i} className="flex justify-start items-center  space-x-2">
              <div className="w-[40px]">
                <img className="" src={item.icon} alt="" />
              </div>
              <span className="text-[#787878]">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsSection;
