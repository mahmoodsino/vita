import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import { AddressBookModal } from "../../../Modals";
import DeleteAddressModal from "../../../Modals/DeleteAddressModal";

const AddressBook = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <div className=" sm:w-[100%] md:w-[65%]">
      <div className="w-[100%] mr-20  px-10 shadow-[0_0_5px_rgba(0,0,0,0.12)] py-5 bg-[#95D2E8]/20">
        <div className="flex md:flex-row sm:flex-col   sm:items-start sm:mb-5 md:mb-0 sm:justify-start md:justify-between items-center">
          <h3 className="font-bold text-xl   mb-5">Address book</h3>
          <button
            onClick={() => setOpenModal(true)}
            className="underline  text-sm font-medium cursor-pointer"
          >
            +Add new address
          </button>
        </div>
        <div className="flex sm:flex-col  md:flex-row md:justify-between border-b pb-3 mb-4">
          <div>
            <span className="font-bold">Home</span>
            <span className="text-sm text-[#CDCDCD] font-medium">
              (DEFAULT)
            </span>
            <h4 className="text-sm font-medium">City,address</h4>
          </div>
          <div className="flex flex-col md:items-end md:justify-end">
            <div className="flex md:flex-row sm:flex-col sm:mt-3 md:mt-0">
              <button
                onClick={() => setOpenDeleteModal(true)}
                className="inline-block cursor-pointer "
              >
                <TrashIcon className="inline-block" />
                <span className="text-sm text-[#FF291B]"> Delete</span>
              </button>
              <div className="inline-block cursor-pointer   md:ml-2">
                <EditIcon className="inline-block" />
                <span className="text-sm font-medium"> Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <AddressBookModal open={openModal} setOpen={setOpenModal} />
      )}
      {openDeleteModal && (
        <DeleteAddressModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
        />
      )}
    </div>
  );
};

export default AddressBook;
