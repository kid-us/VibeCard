import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./Checkout";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51PWdFdP6UOHlMztHLMRA87lAsgfC4OuAxPR9C454dcBjjfaBlGgTKzG4I0nnKyCbwM2mcyt7Exs7F5pgfi3rhG9q00BmRURbuZ"
);

function App() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    axios
      .post(
        "https://vibeapi.jamescog.com/api/v1/auth/create-payment_intent",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // console.log(response.data.client_secret);
        setClientSecret(response.data.client_secret);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret: clientSecret ?? "",
    appearance: {
      /*...*/
    },
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[38%] px-14 pt-8 pb-20 rounded bg-white shadow">
        <p className="mb-8 font-poppins">Powered by Stripe.</p>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
