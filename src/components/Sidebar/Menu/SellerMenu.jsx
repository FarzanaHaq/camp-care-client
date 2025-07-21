import { BsFillHouseAddFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import { MdEventAvailable } from "react-icons/md";

import MenuItem from "./MenuItem";
import { FaTasks } from "react-icons/fa";
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Camp"
        address="add-camp"
      />
      <MenuItem
        icon={FaTasks}
        label="Manage Camps"
        address="manage-camps"
      />
      <MenuItem
        icon={CgProfile}
        label="Profile"
        address="/dashboard"
      />
      <MenuItem
        icon={MdEventAvailable}
        label="Registered Camps"
        address="manage-registered-camps"
      />
    </>
  );
};

export default SellerMenu;
