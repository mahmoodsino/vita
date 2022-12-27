import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ProfileInput } from "../inputs";
import { LinearButton } from "../buttons";

interface Props {
  open: boolean;
  setOpen: any;
}

const AddressBookModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="px-10 py-4 text-center w-[550px]">
          <form>
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-gray-950  ">
                Edit My Profile
              </h3>
              <div>
                <label className="container flex items-center">
                  Make as Default
                  <input name="check" className="checkbox" type="checkbox" />
                  <span className="text-sm  checkmark"></span>
                </label>
              </div>
            </div>
            <div>
              <ProfileInput label="Address Nickname" placeholder="Work 3" />
              <ProfileInput label="Address" placeholder="Address text here" />
              <div className="grid grid-cols-2 gap-10">
                <ProfileInput label="City" placeholder="City text" />
                <ProfileInput
                  label="House/Building No."
                  placeholder="House building no text"
                />
              </div>
              <ProfileInput label="Street" placeholder="Street text here" />
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

export default AddressBookModal;
