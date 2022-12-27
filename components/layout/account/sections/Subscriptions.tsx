import Link from "next/link";
import React from "react";
import { LinearButton } from "../../../buttons";

const info = [
  {
    a: "vit B12 Homekit",
    b: "3 months",
    c: "November 20, 2022",
    d: "January 20, 2023",
    e: "December 20, 2022",
    f: "55 days",
  },
  {
    a: "vit B12 Homekit",
    b: "3 months",
    c: "November 20, 2022",
    d: "January 20, 2023",
    e: "December 20, 2022",
    f: "55 days",
  },
];

const Subscriptions = () => {
  const handelTableBody = () => {
    return info.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-xs border-t-4 border-white ${
            i % 2 == 0 ? "bg-[#EFF8FC]" : "bg-[#F6F6F6]"
          }`}
        >
          <td className="pl-6 py-4 ">{item.a}</td>
          <td className="pl-6 ">{item.b}</td>
          <td className="pl-6 ">{item.c}</td>
          <td className="pl-6">{item.d}</td>
          <td className={`pl-6`}>{item.e}</td>
          <td className="pl-6 ">{item.f}</td>
        </tr>
      );
    });
  };

  return (
    // <div className="sm:w-[100%] md:w-[65%] ">
    //   <div className="w-[100%] mr-20 sm:px-5 md:px-10 text-center shadow-[0_0_5px_rgba(0,0,0,0.12)] py-5 bg-[#95D2E8]/20">
    //     <h4>You have no subscriptions</h4>
    //     <div className="mt-5">
    //       <Link href="/products">
    //         <LinearButton
    //           title="Find a treatment"
    //           linear="linear-gradient(90deg, #7EBDCE 0%, #97E3FF 100%)"
    //         />
    //       </Link>
    //     </div>
    //   </div>
    //   <div/>
    <div className="w-[75%]">
      <div className="overflow-x-auto ">
        <div className="overflow-hidden mx-5  rounded-t-md">
          <table className="min-w-full ">
            <thead className="bg-[#D9D9D9] ">
              <tr className="">
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Item name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Subscription
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Order date
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  End date
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Next shipping
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Remaining days
                </th>
              </tr>
            </thead>
            <tbody>{handelTableBody()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
