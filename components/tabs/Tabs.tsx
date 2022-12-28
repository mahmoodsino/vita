import React, { useState } from "react";

interface Props {
  data: any[];
}

const Tabs = ({ data }: Props) => {
  const [name, setName] = useState("");

  return (
    <div className="border-b-4 flex justify-between sm:w-[600px] md:w-[100%] ">
      {data.map((item, i) => {
        return (
          <button
            className={`lg:text-lg sm:text-sm mt-5 font-medium relative top-1 pb-2   ${
              name === item
                ? "text-primary border-b-4 border-b-primary"
                : "text-gray2"
            }`}
            onClick={() => setName(item)}
            key={i}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
