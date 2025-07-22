import { useLoaderData, useParams } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import PurchaseModal from "../Modal/PurchaseModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-96 lg:h-auto">
          <img src={image} alt="Camp" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div className="space-y-5 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

            <p>
              <span className="font-semibold text-gray-900">Description: </span>
              {description}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Healthcare Professional :{" "}
              </span>
              {healthcare}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Fee: </span>${price}
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
              className="bg-sky-300 hover:bg-sky-500 text-white font-medium py-2 px-5 rounded-lg shadow-md transition"
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
  );
};

export default Details;
