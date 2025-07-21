import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
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

export const Analytics = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/all-register?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      });
  }, [user?.email]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-sky-400">
        My Camp Registration Analytics
      </h2>
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
  );
};
