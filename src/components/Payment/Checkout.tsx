import { FormEvent, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement className="" />
      <button
        className="bg-sky-800 w-full mt-10 rounded text-white py-3 shadow shadow-zinc-900"
        disabled={!stripe || isLoading}
      >
        {isLoading ? "Processing..." : "Submit"}
      </button>
      {errorMessage && (
        <p className="text-xs text-red-500 mt-2">{errorMessage}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
