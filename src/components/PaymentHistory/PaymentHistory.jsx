import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";

export const PaymentHistory = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://camp-server-lake.vercel.app/all-payment?email=${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user?.email]);

  // Filter the data based on search term
  const filteredData = myData.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.userName.toLowerCase().includes(term) ||
      item.status.toLowerCase().includes(term) ||
      (item.conformation && item.conformation.toLowerCase().includes(term))
    );
  });

  // Pagination calculations
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Reset page to 1 on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="bg-[#F2F4F7] pt-15 h-screen">
      <div className="mx-auto mt-10 max-w-7xl px-4 text-black">
        <div className="flex justify-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title, name, status or confirmation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 mb-5"
          />
        </div>

        {filteredData.length > 0 ? (
          <>
            <div className="overflow-x-auto py-5">
              {/* Showing Info */}
              <div className="text-gray-600 text-sm mb-4 ml-4">
                Showing{" "}
                <span className="font-semibold">
                  {Math.min(indexOfFirstItem + 1, filteredData.length)}–
                  {Math.min(indexOfLastItem, filteredData.length)}
                </span>{" "}
                of <span className="font-semibold">{filteredData.length}</span>
              </div>

              <table className="table w-full">
                <thead>
                  <tr className="text-gray-800 border-b-2 border-gray-200">
                    <th>Title</th>
                    <th>Fee</th>
                    <th>Name</th>
                    <th>Transaction Id</th>
                    <th>Payment</th>
                    <th>Conformation</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((data) => (
                    <tr key={data._id} className="border-b-2 border-gray-200">
                      <td>{data.name}</td>
                      <td>{data.fee}$</td>
                      <td>{data.userName}</td>
                      <td>{data.transactionId}</td>
                      <td>{data.status}</td>
                      <td>{data.conformation}</td>
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
          <div className="text-center text-sky-800 p-20 font-bold text-2xl">
            Please add data to view.
          </div>
        )}
      </div>
    </div>
  );
};
