import { use, useEffect, useState } from "react";
import useRole from "../hooks/useRole";
import { Spinner } from "../Spinner/Spinner";
import { AuthContext } from "../Context/AuthContext";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import axios from "axios";

const Profile = () => {
  const { user } = use(AuthContext);
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchUserRole = async () => {
      setLoading(true);
      const { data } = await axios(
        `https://camp-server-lake.vercel.app/user-profile/${user?.email}`
      );

      setNewUser(data);
      setLoading(false);
    };
    if (user?.email) {
      fetchUserRole();
    }
  }, [user]);

  if (loading) return <Spinner />;
  console.log(newUser)

  console.log(newUser);
  return (
    <div className=" min-h-screen bg-[#F2F4F7] p-5">
      <p className="text-black text-[16px] font-[600] ml-2 mb-5">
        Dashboard <IoIosArrowForward className="inline" /> Profile
      </p>
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-10 lg:mt-15">
        <div>
          <div className=" lg:w-[400px] bg-white lg:h-[430px]">
            <img alt="profile" src={newUser?.image} className="object-cover h-[200px]" />
            <div className="px-5 lg:px-10">
              <p className="text-[20px] font-[600] text-center text-black">
                My Profile
              </p>
              <div className="mt-5 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">Name:</p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.name}
                </p>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">Email:</p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.email}
                </p>
              </div>
              <div className="flex justify-center pt-6 pb-3 lg:pt-10">
                <Link to={"/dashboard/update-profile"}>
                  <button className="bg-[#006D77] px-10 py-2 text-[16px] cursor-pointer block mb-1 mt-2 text-white font-medium">
                    Update Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-black lg:w-[400px] bg-white mt-5 py-5 lg:mt-0 lg:py-8">
            <div className="px-5 lg:px-10">
              <p className="text-[20px] font-[600] text-center text-black">
                Contact
              </p>
              <div className="mt-5 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">
                  Phone Number:
                </p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.number}
                </p>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">Location:</p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.location}
                </p>
              </div>
            </div>
          </div>
          <div className="text-black lg:w-[400px] bg-white mt-5 py-5 lg:mt-10 lg:py-8">
            <div className="px-5 lg:px-10">
              <p className="text-[20px] font-[600] text-center text-black">
                Additional information:
              </p>
              <div className="mt-5 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">User Role:</p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.role}
                </p>
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">Gender:</p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.gender}
                </p>
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className=" text-[14px] font-[500] text-black">
                  Created At:
                </p>
                <p className=" text-[14px] font-[500] text-gray-700">
                  {newUser?.created_at}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
