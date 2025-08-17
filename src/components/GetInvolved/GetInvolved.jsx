import React from "react";
import { FaHandHoldingHeart, FaUserMd, FaHandshake } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";

export const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: <FaUserMd className="text-4xl text-sky-500" />,
      title: "Become a Volunteer",
      description:
        "Join us as a healthcare professional or community volunteer and make a real difference in people’s lives.",
      button: "Join Now",
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-red-400" />,
      title: "Make a Donation",
      description:
        "Help us reach more communities by contributing to our mission. Every contribution counts.",
      button: "Donate",
    },
    {
      icon: <FaHandshake className="text-4xl text-green-500" />,
      title: "Partner With Us",
      description:
        "Collaborate with us as an organization, clinic, or NGO to expand the impact of our camps with us.",
      button: "Partner",
    },
  ];

  return (
    <section className="py-16 px-4 mt-20 mb-14">
      <div className=" flex justify-center items-center gap-3 text-[#006D77] letter-primary">
        <FaHeartPulse></FaHeartPulse>
        <h1 className="font-[500] mt-0.5 text-[18px] uppercase">
          volunteer today
        </h1>
      </div>
      <h1 className="text-center text-[40px] font-[500] text-[#031B4E] my-3 letter-primary">
        Get Involved With Us
      </h1>
      <p className="text-center text-[18px] text-[#6F6F6F]">
        Whether you're a medical professional, donor, or partner — your support <br />
        helps us deliver care to those who need it most.
      </p>
      <div className="max-w-6xl mx-auto text-center mt-15 mb-10">
        <div className="grid md:grid-cols-3 gap-6">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white back-card rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-2 letter-primary">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button className="btn  text-[16px] text-white bg-[#006D77]">
                {option.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
