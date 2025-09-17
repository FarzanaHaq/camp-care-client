import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const NewForm = ({ oneData, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentBtn, setPaymentBtn] = useState(false);

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await axios.post(
        "https://camp-server-lake.vercel.app/create-payment-new",
        {
          price: oneData?.price,
          Id: oneData._id,
        }
      );
   
      setClientSecret(data?.clientSecret);
    };
    getClientSecret();
  }, [oneData]);

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
   
      setCardError(null);
    }
    if (!clientSecret) {
      setCardError("Payment is not ready yet. Please wait a moment.");
      setProcessing(false);
      return;
    }


    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: oneData?.userName,
          email: oneData?.userEmail,
        },
      },
    });

    if (result?.error) {
      setCardError(result?.error?.message);
      return;
    }
  
    if (result?.paymentIntent?.status === "succeeded") {
      // save order data in db
      const newData = {
        transactionId: result?.paymentIntent?.id,
        status: "paid",
        feedback: true,
      };
      const paymentData = {
        transactionId: result?.paymentIntent?.id,
        name: oneData?.name,
        fee: oneData?.price,
        userName: oneData?.userName,
        userEmail: oneData?.userEmail,
        status: "paid",
        conformation: oneData?.conformatioon,
      };

      const transactionId = result?.paymentIntent?.id;
      try {
        const { data } = await axios.patch(
          `https://camp-server-lake.vercel.app/pay-second/${oneData._id}`,
          newData
        );

       Swal.fire("Payment Succesful! Your id is: ", transactionId);
        const { data: result } = await axios.post(
          "https://camp-server-lake.vercel.app/payment",
          paymentData
        );

        refetch();
      } catch (err) {
        console.log(err);
      } finally {
        setProcessing(false);
        setCardError(null);
      }
    }
  };

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
      <div className="">
        <button
          className="px-3 py-1 bg-green-400 rounded cursor-pointer text-white font-medium w-full mt-10"
          type="submit"
          disabled={!stripe || processing}
        >
          {processing ? "Processing..." : `Pay ${oneData.price}$`}
        </button>
      </div>
    </form>
  );
};

export default NewForm;
