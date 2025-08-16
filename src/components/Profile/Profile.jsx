import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useRole from "../hooks/useRole";
import { Link } from "react-router";
import { Spinner } from "../Spinner/Spinner";

const Profile = () => {
  const { user } = use(AuthContext);
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <Spinner />;
  return (
    <div className="flex justify-center items-center h-screen bg-[#F2F4F7]">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          src="https://i.ibb.co.com/TMqwHNc2/123134.webp"
          className="w-full h-56"
          alt=""
        />
        <div className="flex p-4 items-center pl-30">
          <div className=" border-r-2 border-gray-300 pr-20 mt-2">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src={user?.photoURL}
                className="mx-auto object-cover rounded-full h-25 w-25  border-2 border-white "
              />
            </a>
            <div className="flex justify-center">
              <p className="p-2 px-4 text-xs w-[100px] text-white bg-[#006D77] rounded-full">
                {role?.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="w-full p-2 mt-4 rounded-lg pl-20">
            <div className=" text-sm  ">
              <p className="flex flex-col text-[#233B67] text-[18px] font-[700]">
                Name
                <span className="font-[500] text-[16px] text-[#6F6F6F]">
                  {user.displayName}
                </span>
              </p>
              <p className="flex flex-col text-[#233B67] text-[18px] font-[700]">
                Email
                <span className="ont-[500] text-[16px] text-[#6F6F6F]">
                  {user.email}
                </span>
              </p>

              <div>
                <Link to={"/dashboard/update-profile"}>
                  <button className="bg-[#006D77] px-10 py-2 rounded-lg text-[16px] cursor-pointer block mb-1 mt-2 text-white font-medium">
                    Update Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
