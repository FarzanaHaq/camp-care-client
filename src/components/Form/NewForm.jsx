import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const NewForm = ({ oneData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await axios.post(
        "http://localhost:3000/create-payment-new",
        {
          price: oneData?.price,
          Id: oneData._id,
        }
      );
      console.log(data?.clientSecret)
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
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError(null);
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
      const transactionId = result?.paymentIntent?.id;
      const status = 'paid';
      try {
        const { data } = await axios.patch(
         `http://localhost:3000/pay-second?id=${oneData._id}`,
          transactionId, status
        );
        console.log(data);
        if (data?.insertedId) {
          toast.success("Order updated Successfully!");
        }
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
      <button
        className="bg-green-500 w-full py-2"
        type="submit"
        disabled={!stripe || processing}
      >
        {processing ? "Processing..." : `Pay ${oneData.price}$`}
      </button>
    </form>
  );
};

export default NewForm;
