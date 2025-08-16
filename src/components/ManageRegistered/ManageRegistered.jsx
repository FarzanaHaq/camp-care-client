import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const ManageRegistered = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("https://camp-server-lake.vercel.app/all-registered-camps", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, []);

  async function handleClick(id) {
    const newData = {
      conformatioon: "confirmed",
    };
    try {
      const { data } = await axios.patch(
        `https://camp-server-lake.vercel.app/confirm/${id}`,
        newData
      );

      // Optionally update UI here, e.g., refetch or update local state
      setMyData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, conformatioon: "confirmed" } : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  function handleDelete(id) {
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
        fetch(`https://camp-server-lake.vercel.app/delete-camp/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setMyData((prev) => prev.filter((item) => item._id !== id));
            }
          });
      }
    });
  }

  // Filter data by search term (case insensitive) in name, userName, or conformatioon
  const filteredData = myData.filter((camp) => {
    const term = searchTerm.toLowerCase();
    return (
      camp.name.toLowerCase().includes(term) ||
      camp.userName.toLowerCase().includes(term) ||
      (camp.conformatioon && camp.conformatioon.toLowerCase().includes(term))
    );
  });

  // Pagination logic for filtered data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Reset page to 1 on search term change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="bg-[#F2F4F7]">
      <div className="mx-auto pt-10 px-6 text-black">
        <div className="flex justify-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by camp name, user name, or confirmation status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 mb-5"
          />
        </div>

        {filteredData.length > 0 ? (
          <>
            <div className="overflow-x-auto  py-5">
              {/* Showing text */}
              <div className="text-gray-600 text-sm mb-4 ml-4">
                Showing{" "}
                <span className="font-semibold">
                  {Math.min(indexOfFirstRow + 1, filteredData.length)}–
                  {Math.min(indexOfLastRow, filteredData.length)}
                </span>{" "}
                of <span className="font-semibold">{filteredData.length}</span>
              </div>

              <table className="table ">
                <thead>
                  <tr className="text-gray-800 border-b-2 border-gray-200">
                    <th>Camp Name</th>
                    <th>Fee</th>
                    <th>Name</th>
                    <th>Payment Status</th>
                    <th>Confirmation Status</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((data) => (
                    <tr key={data._id} className=" border-b-2 border-gray-200 ">
                      <td>{data.name}</td>
                      <td>{data.price}$</td>
                      <td>{data.userName}</td>
                      <td>{data.status}</td>
                      <td>
                        <button
                          onClick={() => handleClick(data._id)}
                          className="btn bg-white text-sky-800 border-none shadow-xl"
                        >
                          {data.conformatioon || "pending"}
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(data._id)}
                          className="btn bg-white text-sky-800 border-none shadow-xl"
                          disabled={
                            data.status === "paid" &&
                            data.conformatioon === "confirmed"
                          }
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-6 items-center gap-2 flex-wrap">
                <button
                  className="btn join-item"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`btn join-item ${
                      currentPage === idx + 1
                        ? "btn-active bg-[#031B4E] text-white"
                        : ""
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  className="btn join-item"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-sky-800 p-20 font-bold text-2xl h-screen">
            No registered camps found.
          </div>
        )}
      </div>
    </div>
  );
};
