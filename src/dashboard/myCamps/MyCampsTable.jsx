import { Elements } from "@stripe/react-stripe-js";
import { MdOutlineRateReview } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import NewForm from "../../Form/NewForm";
import FeedbackModal from "../../Modal/FeedbackModal";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Rl1cFRqsLeiCeWjk2BA4SQzSIKWNTVlLWuK4aZvE287GtLFQu4H2clGWiWkhdwuoscvW0ihrbICeje0ovgSc5c500uzgiGNZq"
);

const MyCampsTable = ({
  currentData,
  handleClick,
  setUserData,
  handleDelete,
  setRating,
  setHovered,
  hovered,
  rating,
  comment,
  setComment,
  handleSubmit,
  oneData,
  refetch
}) => {
  return (
    <div className="overflow-x-auto py-5 lg:py-10">
      <table className="table ">
        <thead>
          <tr className="text-black border-b-2 border-gray-200">
            <th>Title</th>
            <th>Fee</th>
            <th>Name</th>
            <th>Payment</th>
            <th>Conformation</th>
            <th>Feedback</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data) => (
            <tr key={data._id} className="border-b-2 border-gray-200">
              <td className="text-gray-800">{data.name}</td>
              <td className="text-gray-800">{data.price}$</td>
              <td className="text-gray-800">{data.userName}</td>
              <td>
                {data.status === "paid" ? (
                  <button className=" bg-white text-sky-800" disabled>
                    Paid
                  </button>
                ) : (
                  <button
                    className=" bg-white text-sky-800"
                    onClick={() => {
                      handleClick(data._id);
                      document.getElementById("my_modal_1").showModal();
                    }}
                  >
                    Pay
                  </button>
                )}
              </td>
              <td className="text-gray-800">{data.conformatioon}</td>
              <td>
                <button
                  onClick={() => {
                    setUserData(data);
                    document.getElementById("my_modal_2").showModal();
                  }}
                  className="py-2 px-5 rounded-lg text-[25px] cursor-pointer text-[#031B4E]  font-medium"
                  disabled={data.feeback === true}
                >
                  <MdOutlineRateReview />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="py-2 px-3 rounded-lg text-[25px] cursor-pointer text-[#031B4E]  font-medium"
                  disabled={data.status === "paid"}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal for Payment */}
      <dialog id="my_modal_1" className="modal bg-white">
        <div className="modal-box bg-white">
          <Elements stripe={stripePromise}>
            <NewForm oneData={oneData} refetch={refetch} />
          </Elements>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-white text-black border-none shadow-none">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <FeedbackModal
        setRating={setRating}
        setHovered={setHovered}
        hovered={hovered}
        rating={rating}
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
      ></FeedbackModal>
    </div>
  );
};

export default MyCampsTable;
