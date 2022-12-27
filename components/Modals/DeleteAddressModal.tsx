import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface Props {
  open: boolean;
  setOpen: any;
}

const DeleteAddressModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="">
          <div className="m-7">
            <h3 className="text-xl font-bold ">Delete Address?</h3>
            <h3 className="mt-5">
              This action will permanently delete the address. Are you sure?
            </h3>
            <div className="flex justify-between mt-5">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="px-7 py-1.5 border rounded-full font-semibold border-black"
              >
                Cancel
              </button>
              <button className="border border-[#FF291B] text-[#FF291B] rounded-full px-7 py-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteAddressModal;
