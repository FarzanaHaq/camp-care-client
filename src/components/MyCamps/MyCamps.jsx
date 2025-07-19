import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NewForm from "../Form/NewForm";

const stripePromise = loadStripe(
  "pk_test_51Rl1cFRqsLeiCeWjk2BA4SQzSIKWNTVlLWuK4aZvE287GtLFQu4H2clGWiWkhdwuoscvW0ihrbICeje0ovgSc5c500uzgiGNZq"
);

export const MyCamps = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [oneData, setOneData] = useState([]);

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

  async function handleClick(params) {
    await fetch(`http://localhost:3000/pay-register?id=${params}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setOneData(data[0]);
      });
  }

  return (
    <div>
      {myData && myData.length > 0 ? (
        <div className=" mx-auto mt-10 text-black  ">
          <div className="overflow-x-auto border-gray-300 border-2 py-5">
            <table className="table">
              <thead>
                <tr className="text-gray-800">
                  <th>Title</th>
                  <th>Fee</th>
                  <th>Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {myData.map((data) => (
                <tbody key={data._id}>
                  <tr>
                    <td>{data.name}</td>

                    <td>{data.price}$</td>
                    <td>{data.userName}</td>
                    <td>
                      {data.status === "paid" ? (
                        <button className="btn bg-white text-sky-800" disabled>
                          Paid
                        </button>
                      ) : (
                        <button
                          className="btn bg-white text-sky-800"
                          onClick={() => {
                            handleClick(data._id);

                            document.getElementById("my_modal_1").showModal();
                          }}
                        >
                          pay
                        </button>
                      )}
                    </td>
                    <td>
                      <button className="btn bg-white text-sky-800">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center text-sky-800 p-20 font-bold text-2xl">
          Please add data to view.
        </div>
      )}
      <dialog id="my_modal_1" className="modal bg-white">
        <div className="modal-box bg-white">
          <Elements stripe={stripePromise}>
            <NewForm oneData={oneData} />
          </Elements>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-white text-black border-none shadow-none">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
