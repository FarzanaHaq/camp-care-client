import { use, useState } from "react";
import Header from "../components/Header";
import { FaHeartPulse } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import BannerForm from "./BannerForm";

const Banner = () => {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="bg-[#F2F4F7]">
      <div className="relative bg-[linear-gradient(to_bottom,#83848633,#102634),url('https://i.ibb.co.com/zHCtVFLq/2148973496.jpg')] bg-cover bg-center mb-5 md:mb-80 lg:mb-100 pb-10 md:pb-80 lg:pb-100">
        <div className="flex justify-center pt-5">
          <Header></Header>
        </div>
        <div className="text-white flex justify-center items-center mt-10 lg:mt-25 gap-3 letter-primary">
          <FaHeartPulse></FaHeartPulse>
          <h1 className="font-[500] mt-0.5 text-[18px] uppercase">
            Welcome to campcare
          </h1>
        </div>
        <div>
          <p className=" text-[30px] lg:text-[60px] font-[700] text-white letter-primary text-center mt-5 lg:leading-18 w-[350px] md:w-[500px] lg:w-[800px] mx-auto">
            Exceptional Health Treatment Always Find Here
          </p>
          <p className="text-[20px] lg:text-[22px] font-[400] text-white letter-primary text-center mt-5 leading-8 w-[300px] md:w-[600px] lg:w-[680px] mx-auto">
            Health care is a vital aspect of maintaining overall well-being,{" "}
            encompassing a range of services from preventive
          </p>
        </div>
        <div className="md:flex md:items-center md:justify-center gap-5 mt-10 ">
          <div className="flex items-center justify-center mb-5 md:mb-0">
            <Link to={"/avail"}>
              <button className="rounded-full bg-white back-card letter-primary  px-6 py-3 text-[#233B67] text-[16px] lg:text-[18px] font-[500] ">
                Get Started Today
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-5 text-white letter-primary">
            <LuPhoneCall className="text-[45px]" />
            <div>
              <p>24/7 Helpline</p>
              <p className="text-[16px] font-[600]">(+566) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
      <BannerForm user={user} setFormData={setFormData} formData={formData} ></BannerForm>
    </div>
  );
};

export default Banner;
