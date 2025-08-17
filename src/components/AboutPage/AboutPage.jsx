import React from "react";
import Header from "../../component/Header";
import { FaCalendarDays } from "react-icons/fa6";

export const AboutPage = () => {
  return (
    <div className="bg-[#F2F4F7] back-primary pb-30">
      <div class="relative bg-[url('https://i.ibb.co.com/WvF3p36k/welison-franklin-1BcQAROQVXY-unsplash.jpg')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black/20"></div>

        <div class="relative z-10">
          <div className="flex justify-center pt-5">
            <Header></Header>
          </div>
          <h1 className="pt-30 pb-50 text-[50px] font-[700] text-white text-end pr-36">
            About Us
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        <div className="relative">
          <img
            src="https://i.ibb.co.com/TMqwHNc2/123134.webp"
            className="w-full h-[500px] rounded-2xl object-cover object-center"
            alt=""
          />
          <div className="bg-[#133C75] w-[300px] rounded-2xl px-8 pt-30 pb-4 absolute right-3 bottom-3">
            <h1 className="text-[18px] font-[600] text-white">
              Years of Experience in the Medical Field
            </h1>
            <p className="text-[60px] font-[700] text-white">25 +</p>
          </div>
        </div>
        <div>
          <h1 className="text-[40px] font-[600] leading-12 mt-12">
            We are Dedicated to Providing World-Class <br />
            Healthcare with a Focus on Innovation, Expertise, <br />
            Compassion and Patient Comfort.
          </h1>
          <div className="flex items-start justify-between mt-12">
            <div>
              <h1 className="text-[23px] font-[600] text-[#6F6F6F]">
                Our team of highly qualified medical professionals <br />{" "}
                combines cutting-edge technology with a patient- <br />
                centered approach to deliver comprehensive and <br />{" "}
                personalized care.
              </h1>
            </div>
            <div>
              <h1 className="text-[#6F6F6F] text-[17px]">
                From preventive medicine to specialized treatments, we offer a
                wide range <br /> of medical services designed to meet the
                diverse needs of our community. <br /> Our modern facilities,
                advanced diagnostic tools, and commitment to <br /> excellence
                ensure that every patient receives the highest standard of care.
              </h1>
              <div className="flex gap-6 items-center mt-10 ">
                <FaCalendarDays className="text-[30px] text-[#006D77]" />
                <div>
                  <p className="text-gray-600 text-[16px] font-[700]">
                    Working Hours:{" "}
                  </p>
                  <p className="text-gray-600 text-[16px] font-[700]">
                    Monday - Saturday : 7.00am - 19.00pm
                  </p>
                  <p className="text-gray-600 text-[16px] font-[700]">
                    Sunday: 8.30am - 18.30pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
