import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Product1 from "../Product/Product1";
import Product2 from "../Product/Product2";
import Product3 from "../Product/Product3";
import Product4 from "../Product/Product4";
import Product5 from "../Product/Product5";
import Footer from "../Footer/Footer";
import { useState } from "react";

const ProductDetail = () => {
  const [title] = useState("Product");
  useDocumentTitle(title);

  const navigate = useNavigate();

  const { id } = useParams();
  const [orderError, setOrderError] = useState(false);
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [backLogo, setBackLogo] = useState(true);

  const handleMinus = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  const handleOrder = () => {
    if (type === "") {
      setOrderError(true);
      return;
    } else {
      const productCardInfo = {
        quantity: quantity,
        cardType: type,
        vibecardLogo: backLogo,
      };

      localStorage.setItem("product", JSON.stringify(productCardInfo));
      navigate(`/editor/${id}`);
    }
  };

  return (
    <>
      <Navbar />

      <div className="lg:px-0 px-2">
        <div className="lg:container mx-auto lg:mt-20 mt-4 lg:secondary-bg rounded overflow-hidden">
          <div className="lg:grid grid-cols-2 justify-between gap-x-10">
            <div className="mt-10 lg:mx-0 mx-1 lg:px-20 lg:pb-10">
              {Number(id) === 1 && <Product1 />}
              {Number(id) === 2 && <Product2 />}
              {Number(id) === 3 && <Product3 />}
              {Number(id) === 4 && <Product4 />}
              {Number(id) === 5 && <Product5 />}
            </div>

            <div className="px-2 main-bg lg:ps-10">
              <div className="lg:mt-4 rounded-xl lg:py-5">
                <p className="lg:text-4xl text-2xl text-white font-extrabold">
                  Vibecard NFC Card
                </p>

                <p className="text-white lg:mt-10 mt-4 lg:text-md text-sm">
                  Choose your card choice.
                </p>
                {/* Card Types */}
                <div className="lg:flex justify-between gap-x-10 mt-5 lg:mx-0 mx-5">
                  <p
                    onClick={() => setType("paper")}
                    className={`shadow-xl shadow-zinc-900 ${
                      type === "paper"
                        ? "btn-bg shadow-none px-2 text-white"
                        : "bg-white"
                    } w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer`}
                  >
                    Recycled Paper €10
                  </p>
                  <p
                    onClick={() => setType("bamboo")}
                    className={`shadow-xl shadow-zinc-900 ${
                      type === "bamboo"
                        ? "btn-bg shadow-none px-2 text-white"
                        : "bg-white"
                    } w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer`}
                  >
                    Bamboo €25
                  </p>
                  <p
                    onClick={() => setType("metal")}
                    className={`shadow-xl shadow-zinc-900 ${
                      type === "metal"
                        ? "btn-bg shadow-none px-2 text-white"
                        : "bg-white"
                    } w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer`}
                  >
                    Metal €35
                  </p>
                </div>
                {/* Styles */}
                <p className="lg:mt-10 mt-7 lg:text-md text-sm text-gray-300">
                  Styles :
                  <span className="mx-1 text-white">
                    with{" "}
                    <span className="logo-font text-teal-300">vibecard </span>
                    logo on back
                  </span>
                </p>

                <div className="flex lg:justify-start justify-center gap-x-10 mt-4">
                  <p
                    onClick={() => setBackLogo(true)}
                    className={`shadow-xl shadow-zinc-900 ${
                      backLogo ? "btn-bg shadow-none px-0" : "bg-white"
                    } text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20`}
                  >
                    Yes
                  </p>
                  <p
                    onClick={() => setBackLogo(false)}
                    className={`shadow-xl shadow-zinc-900 ${
                      !backLogo ? "btn-bg shadow-none px-0" : "bg-white"
                    } text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20`}
                  >
                    No
                  </p>
                </div>
              </div>
              {/*Quantity */}
              <p className="mt-5 mb-4 text-white">Quantity</p>
              <div className="grid grid-cols-5 border border-gray-400 rounded-xl me-44 overflow-hidden lg:w-auto w-full">
                <div>
                  <button
                    onClick={() => handleMinus()}
                    className="bi-dash bg-black w-full h-full text-white text-2xl"
                  ></button>
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    className="h-14 border w-full text-center chakra text-3xl text-black"
                    value={quantity}
                  />
                </div>
                <div className="text-center w-full">
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bi-plus-lg bg-black w-full h-full text-white text-2xl"
                  ></button>
                </div>
              </div>

              {orderError && (
                <p className="mb-3 text-red-500 text-sm text-start pt-5">
                  You must to choose your card type
                </p>
              )}
              <div className="lg:flex justify-between gap-x-10 w-full mt-14">
                {/* Design */}
                <div className="w-full lg:mb-0 mb-5">
                  <button onClick={() => handleOrder()}>
                    <p className="bg-white py-3  lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-center w-80">
                      <span className="bi-palette-fill me-2"></span>
                      Design your Card
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
