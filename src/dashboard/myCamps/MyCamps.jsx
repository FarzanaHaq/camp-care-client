import { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
import { IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../Context/AuthContext";
import { Spinner } from "../../Spinner/Spinner";
import MyCampsTable from "./MyCampsTable";
import SearchBar from "../SearchBar";
import Pagination from "../Pagination";

const MyCamps = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [oneData, setOneData] = useState([]);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

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

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Reset page to 1 on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  async function handleClick(params) {
    const res = await fetch(
      `https://camp-server-lake.vercel.app/pay-register?id=${params}`
    );
    const data = await res.json();
    setOneData(data[0]);
  }

  function handleDelete(params) {
    console.log("first")
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
            <h1 className="text-[20px] lg:text-[25px] font-[700] text-black">
              Camps
            </h1>
            <p className="text-[14px] lg:text-[16px] font-[600] text-black">
              Manage the camps you registered at
            </p>
          </div>
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></SearchBar>
        </div>
        {currentData.length > 0 ? (
          <>
            <MyCampsTable
              currentData={currentData}
              handleClick={handleClick}
              setUserData={setUserData}
              handleDelete={handleDelete}
              setRating={setRating}
              setHovered={setHovered}
              hovered={hovered}
              rating={rating}
              comment={comment}
              setComment={setComment}
              handleSubmit={handleSubmit}
              oneData={oneData}
              refetch={refetch}
            ></MyCampsTable>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              totalItems={filteredData.length}
            ></Pagination>
          </>
        ) : (
          <div className="text-center text-sky-800 p-20 font-bold text-2xl min-h-screen">
            No data found.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCamps;
