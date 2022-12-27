import React from "react";

interface Props {
  setOpenDetails: any;
  openDetails: boolean;
}

const ChatHeaderElement = ({ setOpenDetails, openDetails }: Props) => {
  return (
    <div className="h-14 bg-[#F6F6F6] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] px-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-2 h-2 rounded-full bg-[#00C85C]"></div>
        <span className="text-[#404040] text-2xl font-semibold">
          Dr. John Smith
        </span>
      </div>
      <div className="flex space-x-4 ">
        <button className="rounded-full w-10 h-10 flex justify-center items-center bg-[#37ADCD]">
          <img src="/phonecall.svg" alt="" />
        </button>
        <button className="rounded-full w-10 h-10 flex justify-center items-center bg-[#37ADCD]">
          <img src="/videocamera.svg" alt="" />
        </button>
        <button
          onClick={() => setOpenDetails(!openDetails)}
          className="rounded-full w-10 h-10 flex justify-center items-center bg-[#37ADCD]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-square text-white"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeaderElement;
