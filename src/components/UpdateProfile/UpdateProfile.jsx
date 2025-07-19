import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { imageUpload, updateUserInDb } from "../../api/utils";

export const UpdateProfile = () => {
  const { updateUser, user } = use(AuthContext);

  async function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image =  e.target?.image?.files[0];
    const imageUrl = await imageUpload(image);

    updateUser({ displayName: name, photoURL: imageUrl })
      .then((result) => {
        console.log(result);

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
    <div>
      <div className="card w-full max-w-sm shrink-0 shadow-2xl flex justify-center mx-auto my-20">
        <div className="card-body">
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
              className="input bg-white text-gray-600 border-2 border-gray-200"
              defaultValue={user?.email}
              disabled
            />
            <label className="label text-black">Photo</label>

            <label>
              <input
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                name="image"
                id="image"
                accept="image/*"
                hidden
              />
              <div className="bg-sky-300 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-sky-500">
                Click here
              </div>
            </label>

            <button className="btn bg-sky-400 text-white mt-4 border-none">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
