import React from "react";
import { useRecoilState } from "recoil";
import { AccountComponentsAtom } from "../../../../helper";
import AccountOptions from "./AccountOptions";
import AddressBook from "./AddressBook";
import Appointments from "./Appointments";
import HomekitOrders from "./HomekitOrders";
import MyOfficePackages from "./MyOfficePackages";
import MyProfile from "./MyProfile";
import PaymentMethod from "./PaymentMethod";
import Subscriptions from "./Subscriptions";

const MainSection = () => {
  const [btnAccount, setBtnAccount] = useRecoilState(AccountComponentsAtom);

  return (
    <div className="flex lg:flex-row sm:flex-col justify-between lg:px-20 md:px-5 py-14">
      <AccountOptions />
      {btnAccount === 1 && <MyProfile />}
      {btnAccount === 2 && <AddressBook />}
      {btnAccount === 3 && <PaymentMethod />}
      {btnAccount === 4 && <HomekitOrders />}
      {btnAccount === 5 && <Subscriptions />}
      {btnAccount === 6 && <Appointments />}
      {btnAccount === 8 && <MyOfficePackages />}
    </div>
  );
};

export default MainSection;
