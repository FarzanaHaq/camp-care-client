import { use, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { Link, Navigate, useNavigate } from "react-router";
import SellerMenu from "./Menu/SellerMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import useRole from "../hooks/useRole";
import { AuthContext } from "../Context/AuthContext";

const Sidebar = () => {
  const { signOutUser } = use(AuthContext);
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  const navigate = useNavigate();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed hidden lg:flex lg:flex-col lg:justify-between shadow-xl  overflow-x-hidden bg-white w-64 space-y-6 px-2 py-3 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link to={"/"}>
              <div className="flex justify-center items-center pr-5">
                <img
                  // className='hidden md:block'
                  src="https://i.ibb.co/Ng0yTFYQ/healthcare-medical-logo-icon-for-ambulance-hospital-pharmacy-symbol-vector.jpg"
                  alt="logo"
                  width="80"
                  height="80"
                />

                <h1 className="text-2xl font-bold text-[#031B4E]">CampCare</h1>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-3">
            <nav>
              {role === "organizer" && <SellerMenu />}
              {role === "participant" && <CustomerMenu />}
            </nav>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              signOutUser();
              navigate("/");
            }}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
