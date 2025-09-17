import { FaHandHoldingHeart, FaUserMd, FaHandshake } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { TitleCard } from "./cards/TitleCard";

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
    <section className=" px-4 mt-6 lg:mt-0 lg:mb-10">
      <TitleCard
        intro="volunteer today"
        title=" Get Involved With Us"
        description="  Whether you're a medical professional, donor, or partner — your support can help us make a difference"
      ></TitleCard>

      <div className="max-w-6xl mx-auto text-center mt-15 mb-5">
        <div className="grid md:grid-cols-3 gap-6">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white back-card rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-2 letter-primary">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              {/*   <button className="btn  text-[16px] text-white bg-[#006D77]">
                {option.button}
              </button>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
