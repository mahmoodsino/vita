import React from "react";

const info = [
  {
    a: "123",
    b: "vit B12 Homekit",
    c: "November 20, 2022",
    d: "January 20, 2023",
    e: "December 20, 2022",
  },
  {
    a: "123",
    b: "vit B12 Homekit",
    c: "November 20, 2022",
    d: "January 20, 2023",
    e: "December 20, 2022",
  },
];

const MyOfficePackages = () => {
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
          <td className="pl-6 ">
            <button className="text-pink1 underline font-semibold">
              Schedule
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
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
                  Order #
                </th>
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
                  Order date
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Upcoming Appointment
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Expires on
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Action
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

export default MyOfficePackages;
