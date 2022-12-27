import React from "react";
import { ChatsElement } from "../elements";

const ChatsSidebar = () => {
  return (
    <div className="bg-[#7ebdce] min-h-[100%] ">
      <h3 className="text-white text-xl font-bold p-4">Online Consultation</h3>
      <div className="relative mt-3 px-4">
        <input
          className="w-full text-[#D9D9D9] placeholder:italic placeholder:text-[#D9D9D9] outline-none bg-[#37ADCD] text-sm px-2 py-3 pl-12 rounded-sm"
          placeholder="Search Name"
          type="text"
        />
        <img className="absolute top-0.5 left-5" src="/search.svg" alt="" />
      </div>
      <div className="mt-5 ">
        <ChatsElement />
        <ChatsElement />
        <ChatsElement />
      </div>
    </div>
  );
};

export default ChatsSidebar;
