import { FaHeartPulse } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const About = () => {
  return (
    <div className="mt-20 relative">
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co.com/tTjwDyxV/about-one-img-1.jpg"
          className="h-[830px] rounded-2xl"
          alt=""
        />
      </div>
      <div className="bg-[#FFF3EA] back-card w-[450px] py-10 px-10 rounded-2xl absolute top-75 left-15">
        <div className=" flex justify-start items-center gap-3 text-[#006D77] letter-primary">
          <FaHeartPulse></FaHeartPulse>
          <h1 className="font-[500] mt-0.5 text-[18px] uppercase">About Us</h1>
        </div>
        <h1 className=" text-[40px] font-[700] text-[#031B4E] my-3 leading-12 letter-primary">
          Health care <br />
          maintenance or <br />
          improvement
        </h1>
        <p className=" text-[18px] text-[#6F6F6F]">
          Health care is a vital aspect of maintaining overall well- being,
          encompassing a <br /> range of services from preventive <br /> care to
          treatment
        </p>
        <div className="mt-5">
          <p className="flex items-center text-[18px] text-[#6F6F6F]">
            <MdKeyboardDoubleArrowRight className="mt-0.5 text-[20px]" />
            Where Health Matters Most
          </p>
          <p className="flex items-center text-[18px] text-[#6F6F6F] mt-3">
            <MdKeyboardDoubleArrowRight className="mt-0.5 text-[20px]" />
            Caring for You, Always
          </p>
        </div>
      </div>
      <div className="bg-white back-card w-[450px] py-10 px-10 rounded-2xl space-y-5 shadow-xl absolute right-10 top-12">
        <h1 className=" text-[35px] font-[700] text-[#031B4E] leading-12 mb-10 letter-primary">
          Working Hours
        </h1>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500] text-[#6F6F6F]">
            Saturday-Sunday
          </p>
          <p className=" text-[20px] font-[600] text-[#031B4E]">9 Am To 5 Pm</p>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500]  text-[#6F6F6F]">
            Monday-Tuesday
          </p>
          <p className=" text-[20px] font-[600] text-[#031B4E]">1 Pm To 7 Pm</p>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500]  text-[#6F6F6F]">
            Wednesday-Thusday
          </p>
          <p className=" text-[20px] font-[600] text-[#031B4E]">2 Am To 6 Pm</p>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-3 px-5 rounded-2xl">
          <p className="text-[17px] font-[500]  text-[#6F6F6F]">Friday</p>
          <p className=" text-[20px] font-[600] text-[#031B4E]">Off Day</p>
        </div>
      </div>
    </div>
  );
};
