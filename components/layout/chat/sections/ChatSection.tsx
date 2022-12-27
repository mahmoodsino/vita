import React, { useEffect, useRef } from "react";
import { ChatHeaderElement, ReceivedMassage, SentMassage } from "../elements";

interface Props {
  setOpenDetails: any;
  openDetails: boolean;
}

const ChatSection = ({ setOpenDetails, openDetails }: Props) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView();
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <div className="h-fit">
        <ChatHeaderElement
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      </div>
      <div className={` overflow-y-auto py-3 px-5 bg-[#F6F6F6]/50 h-[74vh]`}>
        <ReceivedMassage />
        <SentMassage />
        <ReceivedMassage />
        <SentMassage />
        <ReceivedMassage />
        <SentMassage />
        <div ref={messagesEndRef} />
      </div>

      <div className=" h-20 shadow-[0px_-2px_10px_rgba(0,0,0,0.15)] bg-[#F6F6F6] flex justify-between items-center px-5">
        <textarea
          rows={5}
          placeholder="Type your message here..."
          name=""
          id=""
          className="bg-transparent resize-none w-[80%] pl-3  h-full outline-none pt-5 "
        />
        <div className="flex space-x-4 items-center">
          <button>
            <img src="/attachfile.svg" alt="" />
          </button>
          <button className="rounded-full w-9 h-9 flex justify-center items-center bg-[#7EBDCE]">
            <img className="h-6" src="/send.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
