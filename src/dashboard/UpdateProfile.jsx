import React, { use } from "react";

import { toast } from "react-toastify";

import { CiEdit } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";
import { imageUpload, updateUserInDb } from "../api/utils";

export const UpdateProfile = () => {
  const { updateUser, user } = use(AuthContext);

  async function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target?.image?.files[0];
    const imageUrl = image ? await imageUpload(image) : user?.image;

    updateUser({ displayName: name, photoURL: imageUrl })
      .then((result) => {
        const userData = {
          name,
          email,
          image: imageUrl,
        };
        updateUserInDb(userData)
          .then((data) => console.log(data))
          .catch((error) => {
            console.log(error.message);
          });
        toast("User Updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return ( 
    <div className="bg-[#F2F4F7] h-screen flex justify-center items-start px-5 lg:px-0 pt-10 lg:pt-15">
      <div className="card w-full lg:max-w-[600px] shrink-0 shadow-2xl flex justify-center mx-auto bg-white">
        <div className="card-body">
          <div>
            <div className="relative">
              {" "}
              <img
                src={user?.photoURL}
                className="w-20 h-20 rounded-full"
                alt=""
              />
              <label htmlFor="image" className="relative cursor-pointer">
                <input
                  className="hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                />
                <CiEdit className="bg-white text-black rounded-full text-[25px] p-1 absolute left-15 bottom-1" />
              </label>
            </div>
          </div>
          <form onSubmit={handleRegister} className="fieldset">
            <div className="lg:flex lg:justify-between lg:gap-5">
              <div className="flex-1/2">
                <label className="label text-black">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-md text-[16px] bg-gray-200 text-gray-600 border-2 border-gray-200 px-3 py-2 "
                  defaultValue={user?.email}
                  disabled
                />
                <label className="label text-black">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input bg-white text-gray-600 border-2 border-gray-200 "
                  defaultValue={user?.displayName}
                />
                <label className="label text-black">Phone Number</label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-md text-[14px]  text-gray-600 border-2 border-gray-200 px-3 py-2"
                  placeholder="Your Number"
                />
              </div>
              <div className="flex-1/2">
                <label className="label text-black">Location</label>
                <input
                  name="location"
                  type="text"
                  className="w-full rounded-md text-[14px]  text-gray-600 border-2 border-gray-200 px-3 py-2"
                  placeholder="Your Location"
                />
                <label className="label text-black">Gender</label>
                <input
                  name="gender"
                  type="text"
                  className="w-full rounded-md text-[14px]  text-gray-600 border-2 border-gray-200 px-3 py-2"
                  placeholder="Your Gender"
                />
              </div>
            </div>

            <button className="btn bg-[#006D77]  text-white mt-4 border-none">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
