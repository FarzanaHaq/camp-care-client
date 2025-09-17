import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { TitleCard } from "./cards/TitleCard";

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
        <TitleCard
        intro="Our Camp's"
          title="Most Popular Camps Currently"
          description="98% of patients report cheap and good quality treatments in our
          program, Experience the difference yourself."
        ></TitleCard>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-10 lg:mb-20 px-5">
          {data.slice(0, 6).map((data) => (
            <div className="card bg-white rounded-none shadow-2xl back-card">
              <figure>
                <img
                  className="h-[200px] w-[400px] object-cover object-center"
                  src={data.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body pb-5">
                <h2 className="card-title letter-primary">{data.name}</h2>
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
                    <button className="btn px-6 py-2 rounded-full  text-[16px] font-[600] bg-[#006D77] text-white border-none">
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
            <button className="btn bg-[#006D77] text-white text-[16px] border-none">
              Show All Camps <FaArrowRight className="mt-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
