import React, { useState } from "react";
import { LinearButton } from "../../../buttons";
import { EditProfileModal } from "../../../Modals";

const MyProfile = () => {
    const [openEditModal,setOpenEditModal] = useState(false)
  return (
    <div className="sm:w-[100%] lg:w-[65%] sm:mt-5 lg:mt-0">
      <div className="w-[100%] mr-20 sm:px-5 md:px-10 shadow-[0_0_5px_rgba(0,0,0,0.12)] py-5 bg-[#95D2E8]/20">
        <h1 className="font-bold md:text-xl mt-5 mb-5">My Profile</h1>
        <div className="space-y-2 text-sm">
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h3 className="text-[#8A8A8A] w-[30%]  inline-block">Fullname</h3>
            <h3 className="inline-block font-medium text-gray-950">
              John Smith
            </h3>
          </div>
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h3 className="text-[#8A8A8A] w-[30%]  inline-block">Email</h3>
            <h3 className="inline-block font-medium text-gray-950">
              johndoe@hotmail.com
            </h3>
          </div>
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h3 className="text-[#8A8A8A] w-[30%]  inline-block">
              Phone Number:
            </h3>
            <h3 className="inline-block font-medium text-gray-950">
              +1-695-555-7889
            </h3>
          </div>
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h3 className="text-[#8A8A8A] w-[30%]  inline-block">
              Date of Birth:
            </h3>
            <h3 className="inline-block font-medium text-gray-950">
              November, 15, 1993
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-end  items-center  mt-5">
        <LinearButton
        onClick={() => setOpenEditModal(true)}
          title="Edit"
          linear="linear-gradient(90deg, #7EBDCE 0%, #97E3FF 100%)"
        />
      </div>
      {openEditModal &&
      <EditProfileModal open={openEditModal} setOpen={setOpenEditModal} />
      }
    </div>
  );
};

export default MyProfile;
