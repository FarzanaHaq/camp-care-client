import { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { AuthContext } from "../Context/AuthContext";
import { IoIosArrowForward } from "react-icons/io";

export const Analytics = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://camp-server-lake.vercel.app/all-register?email=${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user?.email]);

  return (
    <div className=" bg-[#F2F4F7] h-screen p-5 lg:px-10">
      <p className="text-black text-[16px] font-[600] ml-2 mb-5">
        Dashboard <IoIosArrowForward className="inline" /> Analytics
      </p>
      <div className="mx-auto max-w-7xl px-5 lg:px-10 text-black bg-white pt-5">
        <div className="mb-10">
          <h1 className="text-[20px] lg:text-[25px] font-[700] text-black">
            Analytics
          </h1>
          <p className="text-[14px] lg:text-[16px] font-[600] text-black">
            See the analytics of your registered camps
          </p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={myData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-15} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" name="Fee ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
