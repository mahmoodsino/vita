import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface Props {
  open: boolean;
  setOpen: any;
}
const DeleteCardModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="">
          <div className="m-7">
            <h3 className="text-xl font-bold ">Remove card?</h3>
            <h3 className="mt-5">
              You are about to remove your payment method. Are you sure?
            </h3>
            <div className="flex justify-between mt-5">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="px-7 py-1.5 border rounded-full font-semibold border-black"
              >
                Cancel
              </button>
              <button className="border border-[#FF291B] text-[#FF291B] font-bold rounded-full px-7 py-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteCardModal;
