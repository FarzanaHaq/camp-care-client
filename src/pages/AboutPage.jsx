import TitleBanner from "../components/cards/TitleBanner";
import Header from "../components/Header";
import { FaCalendarDays } from "react-icons/fa6";

export const AboutPage = () => {
  return (
    <div className="bg-[#F2F4F7] back-primary pb-30">
 <TitleBanner text="About Us"></TitleBanner>
      <div className="max-w-6xl mx-auto mt-10 lg:mt-20 px-5">
        <div className="relative">
          <img
            src="https://i.ibb.co.com/TMqwHNc2/123134.webp"
            className="w-full lg:h-[500px] rounded-2xl object-cover object-center"
            alt=""
          />
          <div className="bg-[#133C75] w-[200px] lg:w-[300px] rounded-2xl px-5 lg:px-8 pt-6 lg:pt-30 pb-4 absolute right-3 -bottom-20 lg:right-3 lg:bottom-3">
            <h1 className="text-[18px] font-[600] text-white">
              Years of Experience in the Medical Field
            </h1>
            <p className="text-[30px] lg:text-[60px] font-[700] text-white">25 +</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-[25px] lg:text-[40px] font-[600] lg:leading-12 mt-25 lg:mt-12 lg:w-[900px]">
            We are Dedicated to Providing World-Class 
            Healthcare with a Focus on Innovation, Expertise, 
            Compassion and Patient Comfort.
          </h1>
          <div className="lg:flex lg:items-start lg:justify-between mt-12">
            <div>
              <h1 className="text-[23px] font-[600] text-[#6F6F6F] text-justify lg:w-[550px]">
                Our team of highly qualified medical professionals
                combines cutting-edge technology with a patient- 
                centered approach to deliver comprehensive and
                personalized care.
              </h1>
            </div>
            <div>
              <h1 className="text-[#6F6F6F] text-[17px] text-justify lg:w-[500px] mt-6 lg:mt-0">
                From preventive medicine to specialized treatments, we offer a
                wide range of medical services designed to meet the
                diverse needs of our community. Our modern facilities,
                advanced diagnostic tools, and commitment to excellence
                ensure that every patient receives the highest standard of care.
              </h1>
              <div className="flex gap-6 items-center mt-6 lg:mt-10 ">
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
