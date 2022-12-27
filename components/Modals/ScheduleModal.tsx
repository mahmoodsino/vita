import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface Props {
  open: boolean;
  setOpen: any;
}

const ScheduleModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="px-10 py-4 text-center w-[450px]">
          <div className="flex justify-center">
            <img className="h-14" src="/calendartick.svg" alt="" />
          </div>
          <h3 className=" font-bold mt-3">Appointment Set</h3>
          <h4 className="text-sm">
            You have been set an appointment on Wednesday,28 at 10:30 AM
          </h4>
          <h4 className="text-sm">
            Please note that a 24 hour cancellation notice is required
          </h4>
          <h4 className="text-sm font-semibold">
            Please check your email for important information regarding your
            appointment
          </h4>
        </div>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
