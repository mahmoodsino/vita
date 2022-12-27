import React from "react";

const info = [
  {
    a: "Ann Arbor",
    b: "IV therapy",
    c: "November 20, 2022",
  },
  {
    a: "Ann Arbor",
    b: "IV therapy",
    c: "November 20, 2022",
  },
];

const Appointments = () => {
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
                colSpan={1}
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Clinic Location
                </th>
                <th
                colSpan={1}

                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Service
                </th>
                <th
                colSpan={1}
                  scope="col"
                  className="text-sm font-medium  text-gray-900 px-6 py-4 text-left"
                >
                  Appointment date
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

export default Appointments;
