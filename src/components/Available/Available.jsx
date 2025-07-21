import { useEffect, useState } from "react";
import { Link } from "react-router";


const Available = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    fetch("http://localhost:3000/camps")
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  // Derived and filtered data
  const filteredData = data
    .filter(
      (camp) =>
        camp.name.toLowerCase().includes(search.toLowerCase()) ||
        camp.location.toLowerCase().includes(search.toLowerCase()) ||
        camp.date.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "fee") return a.price - b.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "participants")
        return b.participantCount - a.participantCount;
      return 0;
    });

  return (
    <div className="px-4 mt-16 mb-20">
      <h1 className="text-center text-3xl font-bold text-sky-500 mb-6">
        All Medical Camps
      </h1>

      {/* Search + Sort + Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name, location or date..."
          className="input input-bordered w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort */}
        <select
          className="select select-bordered"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="fee">Camp Fee</option>
          <option value="name">Camp Name (A-Z)</option>
          <option value="participants">Most Registered</option>
        </select>

        {/* Layout Toggle */}
        <button
          onClick={() => setColumns(columns === 3 ? 2 : 3)}
          className="btn btn-sm btn-outline"
        >
          {columns === 3 ? "Switch to 2 Columns" : "Switch to 3 Columns"}
        </button>
      </div>

      {/* Cards */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-${columns} gap-8 max-w-6xl mx-auto`}
      >
        {filteredData.map((data) => (
          <div
            key={data._id}
            className="card bg-base-100 rounded-none shadow-xl hover:shadow-2xl transition"
          >
            <figure>
              <img
                className="h-[200px] w-full object-cover object-center"
                src={data.image}
                alt={data.name}
              />
            </figure>
            <div className="card-body pb-6">
              <h2 className="card-title text-lg">{data.name}</h2>
              <p className="text-gray-600 text-sm">{data.description}</p>
              <div className="text-sm mt-2 space-y-1 text-gray-600">
                <p>
                  <strong>Fee:</strong> ${data.price}
                </p>
                <p>
                  <strong>Date & Time:</strong> {data.date}
                </p>
                <p>
                  <strong>Location:</strong> {data.location}
                </p>
                <p>
                  <strong>Healthcare:</strong> {data.healthcare}
                </p>
                <p>
                  <strong>Participants:</strong> {data.participantCount}
                </p>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/details/${data._id}`}>
                  <button className="btn bg-sky-400 text-white btn-sm">
                    Join Camp
                  </button>
                </Link>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;
