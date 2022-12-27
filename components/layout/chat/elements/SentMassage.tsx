import React from "react";

const SentMassage = () => {
  return (
    <div className="flex justify-end">
      <div className="  w-fit h-fit flex  flex-col justify-center  ">
        <h3 style={{background:"linear-gradient(180deg, #7EBDCE 0%, #37ADCD 100%)"}} className="text-white mr-9 w-[330px] px-3 py-3 rounded-t-md rounded-l-md text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel erat
          tristique convallis pellentesque.
        </h3>
        <div className=" flex justify-end">
          <img
            className="  h-10 w-10 rounded-full  shrink-0"
            src="/DR.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SentMassage;
