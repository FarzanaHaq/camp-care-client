import { use, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NewForm from "../Form/NewForm";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineRateReview } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import { Spinner } from "../Spinner/Spinner";
import { IoIosArrowForward } from "react-icons/io";
import FeedbackModal from "../Modal/FeedbackModal";

const stripePromise = loadStripe(
  "pk_test_51Rl1cFRqsLeiCeWjk2BA4SQzSIKWNTVlLWuK4aZvE287GtLFQu4H2clGWiWkhdwuoscvW0ihrbICeje0ovgSc5c500uzgiGNZq"
);

export const MyCamps = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [oneData, setOneData] = useState([]);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(
      `https://camp-server-lake.vercel.app/all-register?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        setLoading(false);
      });
  }, [user?.email]);

  function refetch() {
    if (!user?.email) return;
    setLoading(true);
    fetch(
      `https://camp-server-lake.vercel.app/all-register?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        setLoading(false);
      });
  }

  const filteredData = myData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  async function handleClick(params) {
    const res = await fetch(
      `https://camp-server-lake.vercel.app/pay-register?id=${params}`
    );
    const data = await res.json();
    setOneData(data[0]);
  }

  function handleDelete(params) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://camp-server-lake.vercel.app/delete-my-camps/${params}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setMyData((prev) => prev.filter((item) => item._id !== params));
            }
          });
      }
    });
  }

  const handleSubmit = async () => {
    const feedback = {
      rating,
      comment,
      title: userData?.name,
      userName: userData?.userName,
      userEmail: userData?.userEmail,
    };

    const { data } = await axios.post(
      "https://camp-server-lake.vercel.app/feedback",
      feedback
    );

    toast.success("Feedback submitted successfully!");
  };

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className="bg-[#F2F4F7] pt-5 px-5 lg:px-8 min-h-screen">
      <p className="text-black text-[16px] font-[600] mb-5">
        Dashboard <IoIosArrowForward className="inline" /> Registered camps
      </p>
      <div className="bg-white px-5 lg:px-8 py-8">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div>
            <h1 className="text-[20px] lg:text-[25px] font-[700] text-black">Camps</h1>
            <p className="text-[14px] lg:text-[16px] font-[600] text-black">
              Manage the camps you registered at
            </p>
          </div>
          <div className="flex lg:justify-end items-center mt-5">
            <input
              type="text"
              placeholder="Search by title, name, payment status..."
              className="input input-bordered lg:w-[320px] text-black bg-white border-2 border-gray-300 lg:ml-3"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset to first page on search
              }}
            />
          </div>
        </div>

        {paginatedData.length > 0 ? (
          <div className="overflow-x-auto py-5 lg:py-10">
            <table className="table ">
              <thead>
                <tr className="text-black border-b-2 border-gray-200">
                  <th>Title</th>
                  <th>Fee</th>
                  <th>Name</th>
                  <th>Payment</th>
                  <th>Conformation</th>
                  <th>Feedback</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((data) => (
                  <tr key={data._id} className="border-b-2 border-gray-200">
                    <td className="text-gray-800">{data.name}</td>
                    <td className="text-gray-800">{data.price}$</td>
                    <td className="text-gray-800">{data.userName}</td>
                    <td>
                      {data.status === "paid" ? (
                        <button className=" bg-white text-sky-800" disabled>
                          Paid
                        </button>
                      ) : (
                        <button
                          className=" bg-white text-sky-800"
                          onClick={() => {
                            handleClick(data._id);
                            document.getElementById("my_modal_1").showModal();
                          }}
                        >
                          Pay
                        </button>
                      )}
                    </td>
                    <td className="text-gray-800">{data.conformatioon}</td>
                    <td>
                      <button
                        onClick={() => {
                          setUserData(data);
                          document.getElementById("my_modal_2").showModal();
                        }}
                        className="py-2 px-5 rounded-lg text-[25px] cursor-pointer text-[#031B4E]  font-medium"
                        disabled={data.feeback === true}
                      >
                        <MdOutlineRateReview />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="py-2 px-3 rounded-lg text-[25px] cursor-pointer text-[#031B4E]  font-medium"
                        disabled={data.status === "paid"}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-10">
              <p className="text-gray-700 text-sm pr-10">
                Showing {startIndex + 1} -{" "}
                {Math.min(startIndex + itemsPerPage, totalItems)} of{" "}
                {totalItems}
              </p>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-[#031B4E] text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-sky-800 p-20 font-bold text-2xl min-h-screen">
            No data found.
          </div>
        )}
      </div>

      {/* Modal for Payment */}
      <dialog id="my_modal_1" className="modal bg-white">
        <div className="modal-box bg-white">
          <Elements stripe={stripePromise}>
            <NewForm oneData={oneData} refetch={refetch} />
          </Elements>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-white text-black border-none shadow-none">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <FeedbackModal
        setRating={setRating}
        setHovered={setHovered}
        hovered={hovered}
        rating={rating}
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
      ></FeedbackModal>
    </div>
  );
};
