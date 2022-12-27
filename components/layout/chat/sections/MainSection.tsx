import React, { useState } from "react";
import ChatMainSection from "./ChatSection";
import ChatsSidebar from "./ChatsSidebar";
import DetailsSection from "./DetailsSection";

const MainSection = () => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div>
      <div className="flex high">
        <div className="min-w-[328px] ">
          <ChatsSidebar />
        </div>
        <div className="w-full  ">
          <ChatMainSection
            setOpenDetails={setOpenDetails}
            openDetails={openDetails}
          />
        </div>
        <div
          className={`  ${
            openDetails ? "w-[30%]" : "w-0"
          } transition-all overflow-hidden duration-500 ease-in-out shadow-[0px_7px_21px_rgba(0,0,0,0.15)] z-50`}
        >
          <DetailsSection setOpenDetails={setOpenDetails} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
