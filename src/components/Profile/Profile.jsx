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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src={
          "https://i.ibb.co/BV3TGX3N/download-4.jpg"}
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-sky-400 rounded-full">
            {role?.toUpperCase()}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user.email}</span>
              </p>

              <div>
              <Link to={"/dashboard/update-profile"}>
               <button className="bg-sky-400 px-10 py-1 rounded-lg text-[16px] cursor-pointer hover:bg-lime-800 block mb-1 mt-2 text-white font-medium">
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
