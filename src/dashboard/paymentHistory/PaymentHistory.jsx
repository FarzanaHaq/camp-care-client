import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../Context/AuthContext";
import { Spinner } from "../../Spinner/Spinner";
import PaymentTable from "./PaymentTable";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";

const PaymentHistory = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(
      `https://camp-server-lake.vercel.app/all-payment?email=${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        setLoading(false);
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

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className="bg-[#F2F4F7] pt-5 min-h-screen px-5 lg:px-8">
      <p className="text-black text-[16px] font-[600] mb-5">
        Dashboard <IoIosArrowForward className="inline" /> Payment history
      </p>
      <div className="mx-auto max-w-7xl px-10 text-black bg-white pt-5">
        <div className="lg:flex lg:justify-between lg:items-end">
          <div>
            <h1 className="text-[20px] lg:text-[25px] font-[700] text-black">
              Payment History
            </h1>
            <p className="text-[14px] lg:text-[16px] font-[600] text-black">
              Keep up with your spending's
            </p>
          </div>
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></SearchBar>
        </div>
        {filteredData.length > 0 ? (
          <>
            <PaymentTable currentData={currentData}></PaymentTable>
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
          <div className="text-center text-sky-800 py-15 lg:p-20 font-bold text-2xl min-h-[370px]">
            Pay for camps to see payment history
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
