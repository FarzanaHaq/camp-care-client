import { toast } from "react-toastify";
import { Link } from "react-router";

const BannerForm = ({ user, setFormData, formData }) => {
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
    <div className="">
      
      <div className="bg-[#006D77] back-card w-[340px]  lg:w-6xl mx-auto p-5 lg:p-15 rounded-2xl lg:absolute lg:top-200 lg:left-25 ">
        <h1 className="text-white text-[25px] lg:text-[40px] font-[600] lg:leading-12 letter-primary lg:w-[500px]">
          Redefining Medical Camps with Humanity
        </h1>
        <p className="text-white text-[16px] font-[500] my-5 letter-sec w-[240px] lg:w-[450px]">
          Speak with our staff within 30 minutes for book a camp. All inquiries
          are 100% private with no obligation.
        </p>
        <div>
          <Link to={"avail"}>
            <button className="text-[#233B67] font-[600] bg-white px-6 py-2 rounded-full">
              View All Camps
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:absolute lg:top-165 lg:right-40 lg:z-10 mt-5">
        <div className=" w-[340px] lg:w-[500px] mx-auto p-5 lg:px-13 lg:py-12 bg-white back-card rounded-xl shadow-2xl">
          <h2 className=" text-[25px] lg:text-[30px] font-[600] mb-4 text-gray-800 letter-primary">
            Get Started Today
          </h2>
          <p className="text-[#6F6F6F] text-[16px] font-[500] mb-5 w-[300px] lg:w-[400px]">
            Complete this secure form and a staff will contact you within 30
            minutes (24/7).
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 w-[300px] lg:w-[400px]"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={user ? user?.displayName : "Your Name"}
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] lg:text-[16px]"
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
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] lg:text-[16px]"
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
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] lg:text-[16px]"
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
                className="mt-1 block w-full rounded-md border-1 border-gray-300 shadow-sm py-2 px-3  focus:ring-0 focus:outline-none placeholder-[#6F6F6F] font-[500] lg:text-[16px]"
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

export default BannerForm;
