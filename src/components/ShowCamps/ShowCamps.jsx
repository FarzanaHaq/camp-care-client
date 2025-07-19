import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export const ShowCamps = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/camps")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  return (
    <div>
      <div className="mt-20 ">
        <h1 className="text-center text-2xl font-bold text-sky-400">
          Popular Medical Camps
        </h1>
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
              <div className="card-body pb-8">
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
                <p className="text-sm text-gray-600">
                  <strong>Healthcare Professional:</strong> {data.healthcare}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Participants:</strong> {data.participantCount}
                </p>
                <div className="card-actions justify-end mt-5">
                  <Link to={`/details/${data._id}`}>
                    <button className="btn bg-sky-400 text-white">
                      Join Camp
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={`/avail`}>
          <button className="btn bg-sky-400 text-white text-[16px]">Show All Camps</button>
        </Link>
        </div>
      </div>
    </div>
  );
};
