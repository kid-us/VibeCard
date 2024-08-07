import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../Payment/Checkout";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Products, fetchProducts } from "../../services/products";
import Loading from "../Loading/Loading";
import useDocumentTitle from "../../hooks/useDocumentTitle";
// import useProduct from "@/store/useProduct";

// interface Product {
//   quantity: string;
//   type: string;
//   vibecardLogo: string;
// }

const stripePromise = loadStripe(
  "pk_test_51PWdFdP6UOHlMztHLMRA87lAsgfC4OuAxPR9C454dcBjjfaBlGgTKzG4I0nnKyCbwM2mcyt7Exs7F5pgfi3rhG9q00BmRURbuZ"
);

function Pay() {
  const [title] = useState("Pay");
  useDocumentTitle(title);

  // const { back, front } = useProduct();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  const [, setProduct] = useState<Products[]>();

  useEffect(() => {
    if (productId) {
      setProduct(fetchProducts(Number(productId)));
    }
  }, [productId]);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // const product: Product = localStorage.getItem("product");

  // const data = {
  //   quantity: product?.quantity,
  //   type: product.type,
  //   vibecardLogo: product.vibecardLogo,
  //   frontImage: front.image,
  //   backImage: back.image,
  //   front: front,
  //   back: back,
  // };

  // console.log(data);

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
    <>
      {!clientSecret && <Loading />}
      <div className="lg:grid grid-cols-5 gap-x-10 h-[100dvh">
        <div className="lg:col-span-2 lg:px-20 lg:py-32 px-2 py-10 rounded shadow w-full secondary-bg text-white h-[100dvh]">
          <div className="lg:hidden">
            {/* {product && (
              <img
                src={product[0].image}
                alt=""
                className="w-full rounded shadow-2xl shadow-gray-500"
              />
            )} */}
          </div>
          <div className="my-20 px-5 text-white">
            {clientSecret && (
              <>
                <p className="mb-8 font-poppins">Powered by Stripe.</p>
                <div className="text-white">
                  <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                  </Elements>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="lg:block hidden col-span-3 mx-32 mt-44">
          {/* {product && (
            <img
              src={product[0].image}
              alt=""
              className="w-full rounded shadow-2xl shadow-gray-500"
            />
          )} */}
        </div>
      </div>
    </>
  );
}

export default Pay;
