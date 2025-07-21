import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Form/CheckoutForm";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51Rl1cFRqsLeiCeWjk2BA4SQzSIKWNTVlLWuK4aZvE287GtLFQu4H2clGWiWkhdwuoscvW0ihrbICeje0ovgSc5c500uzgiGNZq"
);

const PurchaseModal = ({ closeModal, isOpen, camps, user }) => {
  const [processing, setProcessing] = useState(false);
  const { name, location, price, healthcare, date, participantCount } = camps;
  const [isAge, setIsAge] = useState("");
  const [isNumber, setIsNumber] = useState("");
  const [isGender, setIsGender] = useState("");
  const [isEmergency, setIsEmergency] = useState("");

  const newData = {
    name,
    location,
    price,
    date,
    healthcare,
    participantCount,
    campId: camps._id,
    age: isAge,
    phone: isNumber,
    gender: isGender,
    emergencyPhone: isEmergency,
    userName: user?.displayName,
    userEmail: user?.email,
    status: "unpaid",
    conformatioon: "pending"
  };
  async function payLater() {
    setProcessing(true);
    try {
      const { data } = await axios.post("http://localhost:3000/order", newData);
      console.log(data);
      if (data?.insertedId) {
        toast.success("Joined Successfully!");
      }
      const { data: result } = await axios.patch(
        `http://localhost:3000/quantity-update/${camps?._id}`,
        newData
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setProcessing(false);
      closeModal();
    }
  }

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              Review Info Before Purchase
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Name: {name}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Fee: ${price}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Location: {location}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Healthcare Professional: {healthcare}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Participant Name: {user?.displayName}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Participant Email: {user?.email}
              </p>
            </div>
            <div className="mt-1">
              <label className="label text-sm text-gray-500">Age:</label>
              <input
                value={isAge}
                onChange={(e) => setIsAge(e.target.value)}
                type="text"
                name="age"
                className="input w-full"
                placeholder="Enter your age"
              />
            </div>
            <div className="mt-1">
              <label className="label text-sm text-gray-500">
                Phone Number:
              </label>
              <input
                value={isNumber}
                onChange={(e) => setIsNumber(e.target.value)}
                type="text"
                name="phone"
                className="input w-full"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mt-1">
              <label className="label text-sm text-gray-500">Gender:</label>
              <input
                value={isGender}
                onChange={(e) => setIsGender(e.target.value)}
                type="text"
                name="gender"
                className="input w-full"
                placeholder="Enter your gender"
              />
            </div>
            <div className="mt-1">
              <label className="label text-sm text-gray-500">
                Emergency Phone Number:
              </label>
              <input
                value={isEmergency}
                onChange={(e) => setIsEmergency(e.target.value)}
                type="text"
                name="emergency"
                className="input w-full"
                placeholder="Enter your emergency phone number"
              />
              <button onClick={payLater} className="w-full bg-sky-300 mt-5 text-white py-2 font-medium">
                {" "}
                {processing ? "Processing..." : "Join"}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
