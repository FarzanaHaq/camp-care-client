const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mt-5 lg:mt-0">
      <input
        type="text"
        placeholder="Search by title, name, status or confirmation..."
        value={value}
        onChange={onChange}
        className="w-full text-black max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-5"
      />
    </div>
  );
};

export default SearchBar;
