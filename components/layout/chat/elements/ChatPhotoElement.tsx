import React from "react";

const ChatPhotoElement = () => {
  return (
    <div className="flex flex-col items-center mt-3">
      <img className="  h-40 rounded-full" src="/DRR.png" alt="" />
      <div className="mt-3 text-center">
        <h3 className="font-bold text-lg tracking-wider">Dr. John Smith</h3>
        <h4 className="text-[#787878] font-medium text-sm">Family Medicine</h4>
        <h4 className="text-[#787878] font-medium text-sm">“Dermatologist”</h4>
      </div>
    </div>
  );
};

export default ChatPhotoElement;
