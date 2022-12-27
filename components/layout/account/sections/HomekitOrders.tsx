import React, { useState } from "react";
import MyOrders from "./HomekitOrders/MyOrders";

const HomekitOrders = () => {
  const [homekitComponents, setHomeKitComponents] = useState(1);
  return (
    <div className="w-[75%]">
      <div className="flex">
        <button
          onClick={() => setHomeKitComponents(1)}
          className={`px-6 py-2  ${
            homekitComponents === 1
              ? "font-semibold bg-[#D9D9D9] inShadow"
              : "font-medium border "
          } `}
        >
          My Orders
        </button>
        <button
          onClick={() => setHomeKitComponents(2)}
          className={`px-6 py-2  ${
            homekitComponents === 2
              ? "font-semibold bg-[#D9D9D9] inShadow"
              : "font-medium border "
          } `}
        >
          Subscribed
        </button>
      </div>
      <div className="mt-5">
            {homekitComponents ===1 && <MyOrders />}
      </div>
    </div>
  );
};

export default HomekitOrders;
