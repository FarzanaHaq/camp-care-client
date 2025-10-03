const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  indexOfFirstItem,
  indexOfLastItem,
  totalItems,
}) => {
  return (
    <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
      {/* Showing Info */}
      <div className="text-gray-600 text-sm">
        Showing
        <span className="font-semibold">
          {Math.min(indexOfFirstItem + 1, totalItems)}–
          {Math.min(indexOfLastItem, totalItems)}
        </span>
        of <span className="font-semibold">{totalItems}</span>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center gap-2 flex-wrap">
        <button
          className="btn join-item text-black border-2 border-gray-200"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => onPageChange(idx + 1)}
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
          className="btn join-item text-black border-2 border-gray-200"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
