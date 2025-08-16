import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

const Doctors = () => {
  return (
    <div>
      <div className=" flex justify-center items-center gap-3 text-[#006D77]">
        <FaHeartPulse></FaHeartPulse>
        <h1 className="font-[500] mt-0.5 text-[18px] uppercase">
         Our Team Member
        </h1>
      </div>
      <h1 className="text-center text-[40px] font-[500] text-[#031B4E] my-3 ">
       Trust in Health Caring
      </h1>
      <p className="text-center text-[18px] text-[#6F6F6F]">
      Trust in Health Caring Every Step Heal with Heart. Your health is our priority. it
        <br />
        helps us deliver care to those who need it most.
      </p>
      <div>
        <div>
           <div>
            <img src="https://i.ibb.co.com/7xshW5ct/team-1-1.jpg" alt="" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
