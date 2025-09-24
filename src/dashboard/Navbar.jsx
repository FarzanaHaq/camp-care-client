import { use } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AuthContext } from "../Context/AuthContext";
import avatarImg from "../assets/placeholder.jpg";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"my-camps"}>Registered camps</Link>
              </li>
              <li>
                <Link to={"analytics"}>Analytics</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Profile</Link>
              </li>
              <li>
                <Link to={"payment-history"}>Payment history</Link>
              </li>
               <li>
                <Link to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end">
           <Link to={"/"}>  <FaHouseChimney className="text-black text-[22px] mr-3" /></Link>
        
          <IoMdNotificationsOutline  className="text-black text-[25px] mr-3 mt-0.5" />
          <div className="mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar cursor-default border-none"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user && user.photoURL ? user.photoURL : avatarImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
