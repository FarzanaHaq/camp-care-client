import { use } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
const { user, loading } = use(AuthContext);
  const location = useLocation()
  
  if (loading) {
    return (
      <span className="loading loading-spinner loading-xl flex justify-center mx-auto mt-40"></span>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
