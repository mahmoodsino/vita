import React, { useState } from "react";
import { LinearButton } from "../../../buttons";
import { AddCardModal } from "../../../Modals";
import DeleteCardModal from "../../../Modals/DeleteCardModal";

const PaymentMethod = () => {
  const [openAddModla, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <div className="sm:w-[100%] lg:w-[65%] sm:mt-5 lg:mt-0">
      <div className="w-[100%] mr-20 sm:px-5 md:px-10 shadow-[0_0_5px_rgba(0,0,0,0.12)] py-5 bg-primary/20">
        <h1 className="font-bold text-xl mt-5 mb-5">Payment Method</h1>
        <div className="space-y-1 text-sm">
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h1 className="text-gray-1100 w-[50%]  font-medium inline-block">
              Credit Card:
            </h1>
            <h1 className="inline-block   font-medium text-gray-950">
              **** **** **** 1234
            </h1>
          </div>
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h1 className="text-gray-1100  w-[50%] font-medium inline-block">
              Cardholder Name:
            </h1>
            <h1 className="inline-block  font-medium text-gray-950">
              John Doe
            </h1>
          </div>
          <div className="  md:space-x-10  flex md:flex-row sm:flex-col  ">
            <h1 className="text-gray-1100  w-[50%] font-medium inline-block">
              Expiry Date:
            </h1>
            <h1 className="inline-block  font-medium text-gray-950">01/23</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        {/* <LinearButton
          onClick={() => setOpenAddModal(true)}
          title="Add"
          linear="linear-gradient(90deg, #7EBDCE 0%, #97E3FF 100%)"
        /> */}
        <button
          onClick={() => setOpenDeleteModal(true)}
          type="button"
          className="px-7 py-1.5 border rounded-full font-semibold border-black"
        >
          Remove
        </button>
      </div>
      {openAddModla && (
        <AddCardModal open={openAddModla} setOpen={setOpenAddModal} />
      )}
      {openDeleteModal && (
        <DeleteCardModal open={openDeleteModal} setOpen={setOpenDeleteModal} />
      )}
    </div>
  );
};

export default PaymentMethod;
