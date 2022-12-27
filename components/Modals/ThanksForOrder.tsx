import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface Props {
  open: boolean;
  setOpen: any;
}

const ThanksForOrder = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="px-14 py-5 text-center">
          <div className="flex justify-center">
            <img className="h-14" src="/circle.svg" alt="" />
          </div>
          <h3 className=" font-bold mt-3">Thank you for you order!</h3>
          <h4 className="text-sm">Your order will be prepared for shipping</h4>
        </div>
      </Modal>
    </div>
  );
};

export default ThanksForOrder;
