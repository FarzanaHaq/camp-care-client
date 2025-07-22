import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NewForm from "../Form/NewForm";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://camp-server-lake.vercel.app/all-register?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user?.email]);

  function refetch() {
    if (!user?.email) return;
    fetch(`https://camp-server-lake.vercel.app/all-register?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
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
    const res = await fetch(`https://camp-server-lake.vercel.app/pay-register?id=${params}`);
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
    setLoading(false);
    const { data } = await axios.post(
      "https://camp-server-lake.vercel.app/feedback",
      feedback
    );
    toast.success("Feedback submitted successfully!");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by title, name, payment status..."
          className="input input-bordered w-full max-w-xs text-black bg-white border-2 border-gray-300"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
        />
        <p className="text-gray-700 text-sm">
          Showing {startIndex + 1} -{" "}
          {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}
        </p>
      </div>

      {paginatedData.length > 0 ? (
        <div className="overflow-x-auto py-5">
          <table className="table">
            <thead>
              <tr className="text-black">
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
                <tr key={data._id}>
                  <td className="text-gray-800">{data.name}</td>
                  <td className="text-gray-800">{data.price}$</td>
                  <td className="text-gray-800">{data.userName}</td>
                  <td>
                    {data.status === "paid" ? (
                      <button className="btn bg-white text-sky-800" disabled>
                        Paid
                      </button>
                    ) : (
                      <button
                        className="btn bg-white text-sky-800"
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
                      className="btn bg-white text-sky-800"
                      disabled={data.feeback === true}
                    >
                      Feedback
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn bg-white text-sky-800"
                      disabled={data.status === "paid"}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-sky-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-sky-800 p-20 font-bold text-2xl">
          No data found.
        </div>
      )}

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

      {/* Modal for Feedback */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-sky-100">
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">
              Give Feedback
            </h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHovered(starValue)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <FaStar
                      size={28}
                      className={`transition-colors ${
                        starValue <= (hovered || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <textarea
              className="textarea textarea-bordered w-full mb-4 bg-sky-100 text-gray-800"
              placeholder="Write your feedback here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className="btn bg-sky-300 w-full border-none"
              onClick={handleSubmit}
            >
              {loading ? "Submit" : "Submission done!"}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
