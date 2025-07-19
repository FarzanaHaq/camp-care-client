import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./checkoutForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutForm = ({ price, closeModal, camps, user , newData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await axios.post(
        "http://localhost:3000/create-payment-intent",
        {
          price: camps?.price,
          campId: camps._id,
        }
      );
      setClientSecret(data?.clientSecret);
    };
    getClientSecret();
  }, [camps]);

  const handleSubmit = async (event) => {
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError(null);
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });
    if (result?.error) {
      setCardError(result?.error?.message);
      return;
    }
    if (result?.paymentIntent?.status === "succeeded") {
      // save order data in db
      newData.transactionId = result?.paymentIntent?.id;
      newData.status = 'paid'
      try {
        const { data } = await axios.post(
          "http://localhost:3000/order",
          newData
        );
        console.log(data);
        if (data?.insertedId) {
          toast.success("Order Placed Successfully!");
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
        setCardError(null);
        closeModal();
      }
    }
  };

  async function payLater() {
      setProcessing(true);
    try {
       newData.status = 'unpaid'
      const { data } = await axios.post("http://localhost:3000/order", newData);
      console.log(data);
      if (data?.insertedId) {
        toast.success("Order Placed Successfully!");
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
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="text-red-500 mb-6">{cardError}</p>}
      <div className="flex justify-between">
        <button
          className="px-3 py-1 bg-green-400 rounded cursor-pointer text-white font-medium"
          type="submit"
          disabled={!stripe || processing}
        >
          {processing ? "Processing..." : `Pay ${price}$`}
        </button>
        <button
          onClick={payLater}
          className="px-3 py-1 bg-sky-400 rounded cursor-pointer text-white font-medium"
          type="button"
        >
          Pay Later
        </button>
        <button
          onClick={closeModal}
          className="px-3 py-1 bg-red-400 rounded cursor-pointer text-white font-medium"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
