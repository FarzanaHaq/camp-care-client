import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import Header from "../components/Header";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { saveUserInDb } from "../api/utils";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        const userData = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
        };
        saveUserInDb(userData)
          .then(() => {
            setLoading(false);
            navigate(location?.state || "/");
          })
          .catch((err) => {
            setLoading(false);
            toast(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        toast(err.message);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userData = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
        };
        saveUserInDb(userData)
          .then(() => navigate(location?.state || "/"))
          .catch((err) => console.error(err.message));
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="px-5 pb-20">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex justify-center mx-auto lg:mt-5">
        <Header></Header>
      </div>
      <div>
        <h1 className="text-center text-[30px] font-[700] mt-5 lg:mt-10">Login</h1>
        <p className="text-center text-[16px] font-[500] mt-2 text-[#6F6F6F]">
          Login today for affordable healthcare
        </p>
      </div>
      <div className="card bg-base-100 max-w-[400px] shrink-0  border-1 border-gray-300 flex justify-center mx-auto mt-10">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
            <label className="block font-[600] text-[15px]">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full py-2 placeholder:text-gray-600 border-b-1 border-gray-300 focus:outline-none bg-white focus:placeholder-transparent"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

            <label className="block font-[600] text-[15px]">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full py-2 placeholder:text-gray-600 border-b-1 border-gray-300 focus:outline-none bg-white focus:placeholder-transparent"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 shadow-md bg-[#031B4E] rounded-md"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

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

          <p className="text-center mt-2">
            New to this site?{" "}
            <Link
              to={"/register"}
              className="text-[#031B4E] underline font-[500] text-[15px]"
            >
              {" "}
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
