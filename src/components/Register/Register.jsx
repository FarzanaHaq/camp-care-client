import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { saveUserInDb } from "../../api/utils";

const Register = () => {
  const { createUser, googleSignIn, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    try {
      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL: photo });

      const userData = {
        name,
        email,
        image: photo,
      };
      await saveUserInDb(userData);
      toast("User created");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl my-20">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <label className="label">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="input"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <label className="label">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="input"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
                validate: {
                  hasUppercase: (v) =>
                    /[A-Z]/.test(v) || "Must include an uppercase letter",
                  hasLowercase: (v) =>
                    /[a-z]/.test(v) || "Must include a lowercase letter",
                },
              })}
              className="input"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Photo */}
            <label className="label">Photo URL</label>
            <input
              {...register("photo", { required: "Photo URL is required" })}
              className="input"
              placeholder="Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-sky-800 text-white mt-4 w-full">
              Register
            </button>
          </form>

          {/* Google Sign In */}
          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5] mt-4"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path fill="#fff" d="M0 0h512v512H0z" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Login with Google
          </button>

          {/* Redirect */}
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link className="text-blue-600 underline" to={"/login"}>
              Please Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
