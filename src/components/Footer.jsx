import { Link } from "react-router";
import { MdLocationPin } from "react-icons/md";
import { FaArrowRight, FaHandHoldingMedical } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#F2F4F7] pb-10 lg:pb-20 ">
        <div className="bg-[#FFF3EA] max-w-7xl py-5  lg:py-10 lg:pl-10 lg:pr-15 lg:flex lg:justify-between lg:items-center mx-auto">
          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <img
                className="w-15 h-15 lg:w-20 lg:h-20 mt-1 rounded-full"
                src="https://i.ibb.co.com/kgsvkX8M/healthcare-medical-logo-icon-for-ambulance-hospital-pharmacy-symbol-vector-removebg-preview.png"
                alt=""
              />
              <h1 className="text-[20px] lg:text-[25px] font-[700] text-[#031B4E] ">
                CampCare
              </h1>
            </div>
            <div className="text-[25px] lg:text-[60px] font-[600]  lg:font-[700] text-[#031B4E] w-[300px] lg:w-[500px] pl-5 text-center mx-auto lg:text-start">
              Subscribe To Our Newsletter
            </div>
          </div>
          <div className="lg:flex lg:items-center gap-5 mt-5">
            <div className="flex justify-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="border-1 lg:border-2 border-[#031B4E] py-1 lg:py-3 px-5 rounded-full lg:w-[350px] placeholder:text-gray-800 placeholder:font-[500] placeholder:text-[14px] lg:placeholder:text-[16px]"
              />
            </div>
            <div className="flex justify-center pb-5 lg:pb-0">
              <button className=" bg-[#031B4E] text-white text-[14px]  lg:text-[16px] font-[500] border-none rounded-full px-7 py-2  lg:py-3.5 flex items-center gap-3 mt-3 lg:mt-0">
                Subscribe Now
                <FaPlus className="mt-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#031B4E] md:flex md:justify-between md:items-start text-white p-10 lg:p-15 ">
        <div>
          <h2 className="mb-10 text-[23px] font-[600]">Contact</h2>
          <div className="flex items-center gap-5 mb-5">
            <MdLocationPin className="border-1 border-white rounded-full p-2 text-[25px] w-10 h-10 mt-1" />
            <div>
              <p className="text-[16px]">Address</p>
              <p className="text-[18px] font-[600] mt-2">66 Broklyant, India</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <MdLocationPin className="border-1 border-white rounded-full p-2 text-[25px] w-10 h-10 mt-1" />
            <div>
              <p className="text-[16px]">Phone Number</p>
              <p className="text-[18px] font-[600] mt-2">012 345 678 9101</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <MdLocationPin className="border-1 border-white rounded-full p-2 text-[25px] w-10 h-10 mt-1" />
            <div>
              <p className="text-[16px]">Email</p>
              <p className="text-[20px] font-[600] mt-2">abcd@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[23px] font-[600] mt-10 md:mt-0 mb-10">
            Department
          </h2>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            <FaHandHoldingMedical /> Cardiology
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            <FaHandHoldingMedical /> Orthopedic
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            <FaHandHoldingMedical /> Diabetes
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            <FaHandHoldingMedical /> Dental
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            <FaHandHoldingMedical /> Cancer
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            <FaHandHoldingMedical /> psychiatrist
          </p>
        </div>
        <div>
          <h2 className="text-[23px] font-[600] mt-10 md:mt-0 mb-5 lg:mb-10">
            Social Media
          </h2>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Facebook
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Twitter
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Linkedin
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Instagram
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Youtube
          </p>
        </div>
        <div className="">
          <h2 className="text-[23px] font-[600] mt-10 md:mt-0 mb-5 lg:mb-10">
            Pages
          </h2>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Home
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Camps
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            About Us
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Dashboard
          </p>
          <p className="text-[18px] text-gray-200 mt-2 flex items-center gap-2">
            Login
          </p>
        </div>
      </div>
      <div className="p-10 lg:flex lg:justify-between lg:items-center">
        <h1 className="text-[18px] text-gray-600">
          Copyright ©2025 <span className="text-[#006D77]">CampCare</span>. All
          rights reserved.
        </h1>
        <div className="flex items-center gap-5 mt-5 lg:mt-0">
          <p className="text-[18px] text-gray-600">Terms & Condition</p>
          <p className="text-[18px] text-gray-600">Privacy Policy</p>
          <p className="text-[18px] text-gray-600">Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
