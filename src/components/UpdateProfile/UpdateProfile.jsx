import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { imageUpload, updateUserInDb } from "../../api/utils";
import { CiEdit } from "react-icons/ci";

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
    <div className="bg-[#F2F4F7] h-screen flex justify-center items-center">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl flex justify-center mx-auto bg-white ">
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
            <label className="label text-black">Name</label>
            <input
              name="name"
              type="text"
              className="input bg-white text-gray-600 border-2 border-gray-200"
              defaultValue={user?.displayName}
            />
            <label className="label text-black">Email</label>
            <input
              name="email"
              type="email"
              className="w-full rounded-md text-[16px] bg-gray-200 text-gray-600 border-2 border-gray-200 px-3 py-2"
              defaultValue={user?.email}
              disabled
            />

            <button className="btn bg-sky-400 text-white mt-4 border-none">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
