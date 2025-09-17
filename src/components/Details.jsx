import { useLoaderData, useParams } from "react-router";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import PurchaseModal from "../Modal/PurchaseModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";
import Header from "../components/Header";
import { AuthContext } from "../Context/AuthContext";

const Details = () => {
  const { id } = useParams();
  const {
    data: camps,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["camps", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://camp-server-lake.vercel.app/camp-details/${id}`
      );
      return data;
    },
  });

  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const {
    name,
    location,
    description,
    price,
    healthcare,
    image,
    date,
    participantCount,
  } = camps;

  return (
    <div className="bg-[#F2F4F7] ">
      <div class="relative bg-[url('https://i.ibb.co.com/WvF3p36k/welison-franklin-1BcQAROQVXY-unsplash.jpg')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black/20"></div>

        <div class="relative z-10">
          <div className="flex justify-center pt-5">
            <Header></Header>
          </div>
          <h1 className="pt-15 pb-10  lg:pt-30 lg:pb-50 text-[22px] lg:text-[50px] font-[700] text-white text-end pr-5 lg:pr-36">
            Book Online
          </h1>
        </div>
      </div>
      <div className="py-10
       lg:py-30 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-96 lg:h-auto">
            <img
              src={image}
              alt="Camp"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div className="space-y-5 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

              <p>
                <span className="font-semibold text-gray-900">
                  Description:{" "}
                </span>
                {description}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Healthcare Professional :{" "}
                </span>
                {healthcare}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Fee: </span>$
                {price}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Date and Time:{" "}
                </span>
                {date}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Location: </span>
                {location}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Participants:{" "}
                </span>
                {participantCount}
              </p>
            </div>
            <div className="pt-6 text-right">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#006D77] text-white font-medium py-2 px-5 rounded-lg shadow-md transition"
                disabled={!user}
                label={user ? "Join Camp" : "Login to join"}
              >
                Join Camp
              </button>
              <PurchaseModal
                user={user}
                camps={camps}
                closeModal={closeModal}
                isOpen={isOpen}
                refetch={refetch}
              />
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Details;
