import React from "react";

const ChatsElement = () => {
  return (
    <div className="flex cursor-pointer hover:bg-[#37ADCD]/80 duration-300  py-3 items-center border-b border-b-[#37ADCD] pl-4">
      <img className="h-12 rounded-full" src="/DR.png" alt="" />
      <div className="ml-2 text-white w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold tracking-wider ">Dr. John Smith</h3>
          <div className="w-[20px] h-[20px] mr-7 text-[#7ebdce] flex justify-center mx-2 items-center shrink-0 rounded-full  bg-white">
            2
          </div>
        </div>
        <h3 className="text-[11px]">Lorem ipsum dolor sit amet, conse...</h3>
      </div>
    </div>
  );
};

export default ChatsElement;
