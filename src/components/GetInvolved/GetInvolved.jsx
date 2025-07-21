import React from "react";
import { FaHandHoldingHeart, FaUserMd, FaHandshake } from "react-icons/fa";

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
        "Collaborate with us as an organization, clinic, or NGO to expand the impact of our camps.",
      button: "Partner",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-400 mb-8">
          Get Involved
        </h2>
        <p className="mb-12 text-gray-600 max-w-xl mx-auto">
          Whether you're a medical professional, donor, or partner — your support helps us deliver care to those who need it most.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button className="btn btn-outline btn-sm hover:bg-sky-500 hover:text-white">
                {option.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
