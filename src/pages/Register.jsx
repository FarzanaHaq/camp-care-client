import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { use, useState } from "react";

import Header from "../components/Header";
import { AuthContext } from "../Context/AuthContext";
import { imageUpload, saveUserInDb } from "../api/utils";

const Register = () => {
  const { createUser, googleSignIn, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const image = form?.image?.files[0];
    const imageUrl = await imageUpload(image);

    try {
      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL: imageUrl });

      const userData = {
        name,
        email,
        image: imageUrl,
      };
      await saveUserInDb(userData);
      setLoading(false);
      toast("User created");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userData = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
        };
        saveUserInDb(userData);
        toast("Logged In");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="px-5 pb-20">
      <div className="flex justify-center mx-auto lg:mt-5">
        <Header></Header>
      </div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div>
        <h1 className="text-center text-[30px] font-[700] mt-5 lg:mt-10">Register</h1>
        <p className="text-center text-[16px] font-[500] mt-2 text-[#6F6F6F]">
          Register today for affordable healthcare
        </p>
      </div>
      <div className="max-w-[400px] mx-auto px-6 py-6 rounded-2xl mt-10 border-1 border-gray-300">
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="text-sm ">
              <label htmlFor="name" className="block font-[600] text-[15px]">
                Name
              </label>
              <input
                className="w-full py-2 max-w-[450px] placeholder:text-gray-600 border-b-1 border-gray-300 focus:outline-none bg-white focus:placeholder-transparent"
                name="name"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="text-sm mt-2">
              <label htmlFor="email" className="block font-[600] text-[15px]">
                Email
              </label>
              <input
                className="w-full  py-2 placeholder:text-gray-600  border-b-1 border-gray-300 focus:outline-none  bg-white focus:placeholder-transparent"
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="text-sm ">
              <label
                htmlFor="password"
                className="block font-[600] mt-2 text-[15px]"
              >
                Password
              </label>
              <input
                className="w-full  py-2 placeholder:text-gray-600 border-b-1 border-gray-300 focus:outline-none rounded-md bg-white focus:placeholder-transparent"
                name="password"
                id="password"
                type="Password"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="text-sm ">
              <label
                htmlFor="image"
                className="block font-[600] mt-2 text-[15px]"
              >
                Photo
              </label>
              <input
                className="w-full  py-2 text-gray-800 border-b-1 border-gray-300 focus:outline-none rounded-md bg-white"
                name="image"
                id="image"
                type="file"
                accept="image/*"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 shadow-md bg-[#031B4E] rounded-md "
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <p className="text-center mt-2 font-[500] text-[15px]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#031B4E] underline">
            Login
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
