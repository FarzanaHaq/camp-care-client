import { useState } from "react";
import Header from "../../component/Header";
import { FaHeartPulse } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import Services from "../Services/Services";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can send formData to your backend here
  };

  return (
    <div className="bg-[#F2F4F7] h-[2080px]">
      <div class="relative  bg-[linear-gradient(to_bottom,#83848633,#102634),url('https://i.ibb.co.com/zHCtVFLq/2148973496.jpg')] bg-cover bg-center mb-80">
        <div class="relative z-10 flex items-center justify-center h-full pt-5 pb-100">
          <div>
            <Header></Header>
            <div className="text-white flex justify-center items-center mt-25 gap-3">
              <FaHeartPulse></FaHeartPulse>
              <h1 className="font-[500] mt-0.5 text-[18px] uppercase">
                Welcome to campcare
              </h1>
            </div>
            <p className="text-[60px] font-[700] text-white text-center mt-5 leading-18">
              Exceptional Health Treatment <br /> Always Find Here
            </p>
            <p className="text-[20px] font-[500] text-white text-center mt-5 leading-8">
              Health care is a vital aspect of maintaining overall well-being,{" "}
              <br />
              encompassing a range of services from preventive
            </p>
            <div className="flex justify-center items-center gap-5 mt-10 ">
              <button className="rounded-full bg-white px-6 py-3 text-[#233B67] text-[18px] font-[500]">
                Get Started Today
              </button>
              <div className="flex justify-center items-center gap-5 text-white">
                <LuPhoneCall className="text-[45px]" />
                <div>
                  <p>24/7 Helpline</p>
                  <p className="text-[16px] font-[600]">(+566) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#006D77] w-6xl mx-auto p-15 rounded-2xl absolute top-200 left-25">
        <h1 className="text-white text-[40px] font-[600] leading-12">
          Redefining Medical <br /> Camps with Humanity
        </h1>
        <p className="text-white text-[16px] font-[500] my-5">
          Speak with our staff within 30 minutes for book a camp. All <br />{" "}
          inquiries are 100% private with no obligation.
        </p>
        <div>
          <button className="text-[#233B67] font-[600] bg-white px-6 py-2 rounded-full">
            View All Camps
          </button>
        </div>
      </div>
      <div className="absolute top-175 right-40">
        <div className="w-[500px] mx-auto px-13 py-10 bg-white rounded-xl shadow-2xl">
          <h2 className="text-[30px] font-[600] mb-4 text-gray-800">
            Get Started Today
          </h2>
          <p className="text-[#6F6F6F] text-[16px] font-[500] mb-5">
            Complete this secure form and a staff will <br /> contact you within
            30 minutes (24/7).
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] text-[18px]"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] text-[18px]"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] text-[18px]"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] text-[18px]"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-[#006D77] text-white w-full rounded-2xl py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-6xl mx-auto">
       <Services></Services>
      </div>
    </div>
  );
};

export default Banner;
