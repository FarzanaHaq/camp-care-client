import { BsFingerprint, BsGraphUp } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { FcSettings } from "react-icons/fc";
import { AiFillCreditCard } from "react-icons/ai";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="Registered Camps"
        address="my-camps"
      />
      <MenuItem icon={BsGraphUp} label="Analytics" address="analytics" />
      <MenuItem
        icon={FcSettings}
        label="Profile"
        address="/dashboard"
      />
       <MenuItem
        icon={AiFillCreditCard}
        label="Payment History"
        address="payment-history"
      />
    </>
  );
};

export default CustomerMenu;
