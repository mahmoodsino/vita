import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ProfileInput } from "../inputs";
import { LinearButton } from "../buttons";
import Select, { StylesConfig, ActionMeta } from "react-select";

interface Props {
  open: boolean;
  setOpen: any;
}
const optioins = [
  {
    label: "+1",
    value: 1,
  },
  {
    label: "+2",
    value: 2,
  },
  {
    label: "+3",
    value: 3,
  },
  {
    label: "+5",
    value: 5,
  },
];

const EditProfileModal = ({ open, setOpen }: Props) => {
  const customStyles: StylesConfig<any> = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
    }),
    control: (base) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "1px solid #CCCCCC",
      boxShadow: "none",
      paddingTop: 2,
      paddingBottom: 2,
    }),
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="px-10 py-3  w-[550px] text-left">
          <h3 className="text-lg font-bold">Edit My Profile</h3>
          <form className="mt-5">
            <ProfileInput label="Fullname" placeholder="John Smith" />
            <div>
              <label className="capitalize w-fit flex  ml-0  tracking-wide text-sm font-semibold mb-2 ">
                Phone Number
                <span className="text-red-600 text-sm">*</span>
              </label>
              <div className="flex ">
                <div className="w-[20%]">
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary: "gray",
                      },
                    })}
                    className="w-full  "
                    maxMenuHeight={150}
                    placeholder="+1"
                    options={optioins}
                    // onChange={handleSelectChange}
                    isSearchable={true}
                    styles={customStyles}
                  />
                </div>
                <div className="w-full">
                  <input
                    className={`${" appearance-none block w-full bg-white border-gray-1550 border border-[#cccccc] py-2.5 px-4 mb-7 leading-tight focus:outline-none "}`}
                    type={"text"}
                    placeholder="3216541325165"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="capitalize w-fit flex  ml-0  tracking-wide text-sm font-semibold mb-2 ">
                Verification code
                <span className="text-red-600 text-sm">*</span>
              </label>
              <div className="flex">
                <div className="w-[73%]">
                  <input
                    className={`${" appearance-none block w-full bg-white border-gray-1550 border border-[#cccccc] py-2.5 px-4 mb-7 leading-tight focus:outline-none "}`}
                    type={"text"}
                  />
                </div>
                <div className="w-[27%]">
                  <button className="border w-full py-2 bg-[#E9E9E9] text-[#272727] font-medium">
                    GET CODE
                  </button>
                </div>
              </div>
            </div>
            <ProfileInput
              label="Date of Birth"
              placeholder="Novmber, 15, 1993"
            />
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

export default EditProfileModal;
