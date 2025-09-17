import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { TitleCard } from "./cards/TitleCard";

const Doctors = () => {
  return (
    <div className="max-w-6xl mx-auto lg:pb-25">
      <TitleCard
        intro=" Our Team Member"
        title="  Trust in Health Caring"
        description="  Trust in Health Caring Every Step Heal with Heart. Your health is our
        priority. it helps us deliver care to those who need it most."
      ></TitleCard>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:mt-15 p-10 lg:p-0">
        <div className=" border-2 border-gray-300 py-6 rounded-t-full bg-white back-card hover:bg-[#006D77] hover:text-white transition-colors duration-300 group">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="https://i.ibb.co.com/7xshW5ct/team-1-1.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center text-[24px] font-[700] text-[#031B4E] mt-5 group-hover:text-white letter-primary">
              Dr.William Barbara
            </h1>
            <p className="text-center text-[18px] text-[#6F6F6F] mt-3 mb-5 group-hover:text-white">
              Neurology Expert
            </p>
          </div>
        </div>
        <div className=" border-2 border-gray-300 py-6 rounded-t-full bg-white back-card hover:bg-[#006D77] hover:text-white transition-colors duration-300 group">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="https://i.ibb.co.com/wNsbBrBs/team-1-2.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center letter-primary text-[24px] font-[700] text-[#031B4E] mt-5 group-hover:text-white">
              Dr.Richard Susan
            </h1>
            <p className="text-center text-[18px] text-[#6F6F6F] mt-3 mb-5 group-hover:text-white">
              Dental Care
            </p>
          </div>
        </div>
        <div className=" border-2 border-gray-300 py-6 rounded-t-full bg-white back-card hover:bg-[#006D77] hover:text-white transition-colors duration-300 group">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="https://i.ibb.co.com/RT4gkFvH/team-1-3.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center letter-primary text-[24px] font-[700] text-[#031B4E] mt-5 group-hover:text-white">
              Dr.Joseph Howard
            </h1>
            <p className="text-center text-[18px] text-[#6F6F6F] mt-3 mb-5 group-hover:text-white">
              Eye Expert
            </p>
          </div>
        </div>
        <div className="group border-2 border-gray-300 py-6 rounded-t-full bg-white back-card hover:bg-[#006D77] hover:text-white transition-colors duration-300">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="https://i.ibb.co.com/5Xh2d1Bm/team-1-4.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center letter-primary text-[24px] font-[700] text-[#031B4E] mt-5 group-hover:text-white">
              Dr.Harry Donal
            </h1>
            <p className="text-center text-[18px] text-[#6F6F6F] mt-3 mb-5 group-hover:text-white">
              Heart Specialist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
