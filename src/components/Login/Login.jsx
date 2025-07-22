import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthContext";
import { saveUserInDb } from "../../api/utils";
import { useContext } from "react";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
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
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center mx-auto mt-20">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn bg-sky-800 text-white mt-4">
              Login
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
            New to this site? <Link to={"/register"}>Please Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
