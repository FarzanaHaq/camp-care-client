import { useEffect, useState } from "react";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

export const ManageCamps = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("https://camp-server-lake.vercel.app/camps")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, []);

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

  // Filter camps based on search term (case-insensitive)
  const filteredData = myData.filter((camp) => {
    const term = searchTerm.toLowerCase();
    return (
      camp.name.toLowerCase().includes(term) ||
      camp.date.toLowerCase().includes(term) ||
      camp.healthcare.toLowerCase().includes(term)
    );
  });

  // Pagination logic with filtered data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Reset to page 1 when searchTerm changes to avoid out of range page
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="mx-auto mt-10 text-black max-w-7xl px-4">
      {/* Search Input */}
      <div className="flex justify-center">
        {" "}
        <input
          type="text"
          placeholder="Search camps by name, date, or healthcare professional..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 mb-5"
        />
      </div>

      {filteredData.length > 0 ? (
        <>
          <div className="overflow-x-auto py-5">
            {/* Showing Text */}
            <div className="text-gray-600 text-sm mb-4 ml-4">
              Showing{" "}
              <span className="font-semibold">
                {Math.min(indexOfFirstRow + 1, filteredData.length)}–
                {Math.min(indexOfLastRow, filteredData.length)}
              </span>{" "}
              of <span className="font-semibold">{filteredData.length}</span>
            </div>

            {/* Table */}
            <table className="table w-full">
              <thead>
                <tr className="text-gray-800">
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Healthcare Professional</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((data) => (
                  <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>{data.location}</td>
                    <td>{data.date}</td>
                    <td>{data.healthcare}</td>
                    <td>
                      <Link to={`/dashboard/update-camp/${data._id}`}>
                        <button className="bg-sky-400 py-2 px-5 rounded-lg text-[16px] cursor-pointer hover:bg-sky-800 text-white font-medium">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="bg-red-400 py-2 px-5 rounded-lg text-[16px] cursor-pointer hover:bg-red-800 text-white font-medium"
                      >
                        Delete
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
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`btn join-item ${
                    currentPage === idx + 1
                      ? "btn-active bg-sky-600 text-white"
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
          No camps found matching your search.
        </div>
      )}
    </div>
  );
};
