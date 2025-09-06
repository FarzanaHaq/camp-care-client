import { use, useState } from "react";
import Header from "../../component/Header";
import { FaHeartPulse } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import Services from "../Services/Services";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const Banner = () => {
  const { user } = use(AuthContext);
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
    toast("Form Submitted");
  };

  return (
    <div className="bg-[#F2F4F7] sm:h-[2000px]  lg:h-[1300px] back-primary ">
      <div class="relative  bg-[linear-gradient(to_bottom,#83848633,#102634),url('https://i.ibb.co.com/zHCtVFLq/2148973496.jpg')] bg-cover bg-center mb-10 lg:mb-80">
        <div class="relative z-10 flex items-center justify-center h-full pt-5 pb-10 lg:pb-100">
          <div>
            <Header></Header>
            <div className="text-white flex justify-center items-center mt-15 lg:mt-25 gap-3 letter-primary">
              <FaHeartPulse></FaHeartPulse>
              <h1 className="font-[500] mt-0.5 text-[18px] uppercase">
                Welcome to campcare
              </h1>
            </div>
            <p className=" text-[30px] lg:text-[60px] font-[700] text-white letter-primary text-center mt-5 lg:leading-18 w-[350px] lg:w-[800px] mx-auto">
              Exceptional Health Treatment Always Find Here
            </p>
            <p className="text-[20px] font-[500] text-white letter-primary text-center mt-5 leading-8 w-[300px] lg:w-[680px] mx-auto">
              Health care is a vital aspect of maintaining overall well-being,{" "}
          
              encompassing a range of services from preventive
            </p>
            <div className="lg:flex lg:items-center lg:justify-center gap-5 mt-10 ">
             <div className="flex items-center justify-center mb-5 lg:mb-0">
               <Link to={"/avail"}>
                <button className="rounded-full bg-white back-card letter-primary  px-6 py-3 text-[#233B67] text-[18px] font-[500] ">
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
        </div>
      </div>
      <div className="bg-[#006D77] back-card w-[340px]  lg:w-6xl mx-auto p-5 lg:p-15 rounded-2xl lg:absolute lg:top-200 lg:left-25 ">
        <h1 className="text-white text-[25px] lg:text-[40px] font-[600] lg:leading-12 letter-primary lg:w-[500px]">
          Redefining Medical Camps with Humanity
        </h1>
        <p className="text-white text-[16px] font-[500] my-5 letter-sec w-[240px] lg:w-[450px]">
          Speak with our staff within 30 minutes for book a camp.  All
          inquiries are 100% private with no obligation.
        </p>
        <div>
          <Link to={"avail"}>
            <button className="text-[#233B67] font-[600] bg-white px-6 py-2 rounded-full">
              View All Camps
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:absolute lg:top-175 lg:right-40 lg:z-10 mt-10">
        <div className=" w-[340px] lg:w-[500px] mx-auto p-5 lg:px-13 lg:py-10 bg-white back-card rounded-xl shadow-2xl">
          <h2 className=" text-[25px] lg:text-[30px] font-[600] mb-4 text-gray-800 letter-primary">
            Get Started Today
          </h2>
          <p className="text-[#6F6F6F] text-[16px] font-[500] mb-5 w-[300px] lg:w-[400px]">
            Complete this secure form and a staff will contact you within
            30 minutes (24/7).
          </p>
          <form onSubmit={handleSubmit} className="space-y-3 w-[300px] lg:w-[400px]">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={user ? user?.displayName : "Your Name"}
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
               placeholder={user ? user?.email : "Your Email"}
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
    </div>
  );
};

export default Banner;
