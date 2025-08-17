import React, { useEffect, useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";

export const FeedBack = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://camp-server-lake.vercel.app/all-feedback")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  return (
    <div className="bg-[#F2F4F7] py-30 mt-5 back-primary">
      <div className=" px-4 max-w-6xl mx-auto  ">
        <div className=" flex justify-center items-center gap-3 text-[#006D77] letter-primary">
          <FaHeartPulse></FaHeartPulse>
          <h1 className="font-[500] mt-0.5 text-[18px] uppercase letter-primary">
            Client Review's
          </h1>
        </div>
        <h1 className="text-center text-[40px] font-[500] text-[#031B4E] my-3 letter-primary">
          What Our Clients Say
        </h1>
        <p className="text-center text-[18px] text-[#6F6F6F]">
          Real stories from real businesses discover how Soltrue’s insight and{" "}
          <br /> strategies have helped companies grow with clarity and
          confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white back-card rounded-2xl shadow-lg p-6 border border-sky-100 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 letter-primary">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">By:</span> {item.userName}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-medium">Email:</span> {item.userEmail}
              </p>

              <p className="text-gray-700 mb-4 italic border-l-4 border-[#006D77] pl-3">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={star <= item.rating ? "#006D77" : "none"}
                    viewBox="0 0 24 24"
                    stroke="#006D77"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.977-2.89a1 1 0 00-1.175 0l-3.977 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.977-2.89c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {item.rating}/5
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
