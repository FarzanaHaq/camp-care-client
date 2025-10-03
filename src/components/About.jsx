import { FaHeartPulse } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ServiceCard from "./cards/ServiceCard";

export const About = () => {
  return (
    <div className="mt-10 lg:mt-30 relative px-5">
      <div className="bg-[#FFF3EA] back-card lg:w-[450px] p-5 lg:py-10 lg:px-10 rounded-2xl lg:absolute lg:top-75 lg:left-15">
        <div className=" flex justify-start items-center gap-3 text-[#006D77] letter-primary">
          <FaHeartPulse></FaHeartPulse>
          <h1 className="font-[500] mt-0.5 text-[14px] lg:text-[18px] uppercase">
            About Us
          </h1>
        </div>
        <h1 className="text-[25px] lg:text-[40px] font-[700] text-[#031B4E] my-3 lg:leading-12 letter-primary max-w-[300px]">
          Health care maintenance or improvement
        </h1>
        <p className="text-[15px] lg:text-[18px] text-[#6F6F6F] max-w-[400px]">
          Health care is a vital aspect of maintaining overall well- being,
          encompassing a range of services from preventive care to treatment
        </p>
        <div className="mt-5">
          <p className="flex items-center text-[15px] lg:text-[18px] text-[#6F6F6F]">
            <MdKeyboardDoubleArrowRight className=" text-[20px]" />
            Where Health Matters Most
          </p>
          <p className="flex items-center text-[15px] lg:text-[18px] text-[#6F6F6F] mt-3">
            <MdKeyboardDoubleArrowRight className=" text-[20px]" />
            Caring for You, Always
          </p>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <img
          src="https://i.ibb.co.com/tTjwDyxV/about-one-img-1.jpg"
          className="h-[400px] md:h-[650px]   lg:h-[830px] rounded-2xl object-cover"
          alt="Doctor"
            loading='lazy'
        />
      </div>
      <div className="bg-white back-card lg::w-[450px] p-5 lg:py-10 lg:px-10 rounded-2xl space-y-5 shadow-xl md:absolute md:right-10 md:top-12">
        <h1 className="text-[30px] lg:text-[35px] font-[700] text-[#031B4E] leading-12 mb-10 letter-primary">
          Working Hours
        </h1>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500] text-[#6F6F6F]">
            Saturday-Sunday
          </p>
          <p className="text-[16px] lg:text-[20px] font-[600] text-[#031B4E]">
            9 Am To 5 Pm
          </p>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500]  text-[#6F6F6F]">
            Monday-Tuesday
          </p>
          <p className=" text-[16px] font-[600] text-[#031B4E]">1 Pm To 7 Pm</p>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500]  text-[#6F6F6F]">
            Wednesday-Thursday
          </p>
          <p className=" text-[16px] font-[600] text-[#031B4E]">2 Am To 6 Pm</p>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500]  text-[#6F6F6F]">Friday</p>
          <p className="  text-[16px] font-[600] text-[#031B4E]">Off Day</p>
        </div>
      </div>
    </div>
  );
};
