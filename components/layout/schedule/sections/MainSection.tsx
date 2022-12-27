import React,{useState} from "react";
import { Breadcrumbs } from "../../../breadcrumbs";
import { ScheduleSlider } from "../../../sliders";
import ViewCalendar from "./ViewCalendar";
import Select, { StylesConfig, ActionMeta } from "react-select";
import { FillButton } from "../../../buttons";
import { ScheduleModal } from "../../../Modals";

const optioins = [
  {
    label: "user1",
    value: 1,
  },
  {
    label: "user2",
    value: 2,
  },
  {
    label: "user3",
    value: 3,
  },
  {
    label: "user4",
    value: 5,
  },
];

const MainSection = () => {
  const [openModal, setOpenModal] = useState(false)
  const customStyles: StylesConfig<any> = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
    }),
    control: (base) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "0px solid #CCCCCC",
      borderRadius: "55555px",
      backgroundColor: "#ECECEC",
      boxShadow: "none",
      paddingTop: 3,
      paddingBottom: 4,
    }),
  };

  return (
    <div className="px-14">
      <div className="mt-10">
        <Breadcrumbs />
      </div>
      <div className=" flex  items-center space-x-3 my-10">
        <h3 className="font-bold whitespace-nowrap text-xl ">
          Schedule Appointmnet
        </h3>
        <hr className="border w-full " />
      </div>
      <div>
        <ScheduleSlider />
        <h3 className="font-medium text-lg py-5">
          If you are scheduling in-office visit, then your are expected to show
          up in person on the scheduled appointment.
        </h3>
      </div>
      <div className="flex py-10 ">
        <div className="w-[55%] border">
          <ViewCalendar />
        </div>
        <div className="px-5 pl-14 w-[45%] space-y-5">
          <div>
            <label className="font-semibold px-5  ">Choose State</label>
            <div className="mt-3">
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
                // placeholder="Countries"
                options={optioins}
                // onChange={handleSelectChange}
                isSearchable={true}
                styles={customStyles}
              />
            </div>
          </div>
          <div>
            <label className="font-semibold px-5  ">Choose Clinic</label>
            <div className="mt-3">
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
                // placeholder="Countries"
                options={optioins}
                // onChange={handleSelectChange}
                isSearchable={true}
                styles={customStyles}
              />
            </div>
          </div>
          <div>
            <label className="font-semibold px-5  ">Service</label>
            <div className="mt-3">
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
                // placeholder="Countries"
                options={optioins}
                // onChange={handleSelectChange}
                isSearchable={true}
                styles={customStyles}
              />
              <h3 className="text-sm text-[#DF00A1]">
                ATTENTION: $35 NO-SHOW FEE APPLIES. 24 hour cancellation policy.
              </h3>
            </div>
            <div className="mt-10 flex justify-center">
              <FillButton onClick={() => setOpenModal(true)} title="Get Appointment" />
            </div>
          </div>
        </div>
      </div>
      {openModal && 
      <ScheduleModal open={openModal} setOpen={setOpenModal} />
      }
    </div>
  );
};

export default MainSection;
