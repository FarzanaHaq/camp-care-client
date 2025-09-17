import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../dashboard/Navbar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex ">
      {/* Left Side: Sidebar Component  */}
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className="flex-1  md:ml-64">
        <div className="">
          <Navbar></Navbar>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
