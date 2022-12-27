import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ProfileInput } from "../inputs";
import { LinearButton } from "../buttons";

interface Props {
  open: boolean;
  setOpen: any;
}

const AddCardModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="px-5 py-4 text-center ">
          <h1 className="text-xl font-bold text-gray-950  mb-10">
            Add Payment Method
          </h1>
          <form>
            <ProfileInput placeholder="Card Number" label="Card Number" />
            <ProfileInput
              placeholder="Cardholder name"
              label="Cardholder name"
            />

            <div className="flex sm:flex-col space-x-3 md:flex-row justify-between">
              <ProfileInput placeholder="Cvv" label="cvv" />
              <ProfileInput placeholder="" label="Expiration Date" />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="px-7 py-1.5 border rounded-full font-semibold border-black"
              >
                Cancel
              </button>
              <LinearButton
                title="Save Changes"
                linear="linear-gradient(90deg, #7EBDCE 0%, #97E3FF 100%)"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCardModal;
