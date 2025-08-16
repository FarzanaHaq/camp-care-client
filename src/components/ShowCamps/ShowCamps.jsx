import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";

export const ShowCamps = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://camp-server-lake.vercel.app/camps")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  return (
    <div>
      <div className=" ">
        <div className=" flex justify-center items-center mt-25 gap-3 text-[#006D77]">
          <FaHeartPulse></FaHeartPulse>
          <h1 className="font-[500] mt-0.5 text-[18px] uppercase">
            Our Camps's
          </h1>
        </div>
        <h1 className="text-center text-[40px] font-[500] text-[#031B4E] my-3 ">
          Most Popular Camps Currently
        </h1>
        <p className="text-center text-[18px] text-[#6F6F6F]">
          98% of patients report cheap and good quality treatments in <br /> our
          program, Experience the difference yourself.
        </p>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20">
          {data.slice(0, 6).map((data) => (
            <div className="card bg-base-100 rounded-none shadow-2xl">
              <figure>
                <img
                  className="h-[200px] w-[400px] object-cover object-center"
                  src={data.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body pb-5">
                <h2 className="card-title">{data.name}</h2>
                <p className="text-sm text-gray-600">
                  <strong>Fee:</strong> {data.price}$
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Date & Time:</strong> {data.date}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> {data.location}
                </p>

                <div className="card-actions justify-end mt-3">
                  <Link to={`/details/${data._id}`}>
                    <button className="btn px-6 py-2 rounded-full  text-[16px] font-[600] bg-[#006D77] text-white">
                      Join Camp <FaPlus className="mt-0.5 " />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={`/avail`}>
            <button className="btn bg-[#006D77] text-white text-[16px]">
              Show All Camps <FaArrowRight className="mt-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
