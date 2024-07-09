import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../services/products";
import { useEffect, useState } from "react";
import { Products } from "../../services/products";
import Card from "../Home/Card";
import { bgColors } from "../Home/SampleProducts";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const ProductDetail = () => {
  const [title] = useState("Product");
  useDocumentTitle(title);

  const { id } = useParams();
  const [, setProduct] = useState<Products[]>();

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setProduct(fetchProducts(Number(id)));
  }, []);

  const handleMinus = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  const [metalBg, setMetalBg] = useState({
    bg: "bg-amber-500",
    color: "text-white",
  });

  return (
    <>
      <Navbar />

      <div className="lg:px-0 px-2">
        <div className="lg:container mx-auto lg:mt-20 mt-5 secondary-bg shadow-lg shadow-gray-400 rounded overflow-hidden">
          <div className="lg:grid grid-cols-2 justify-between gap-x-10">
            <div className="mt-10 lg:mx-0 mx-1 lg:px-20 pb-10">
              <Card textColor={metalBg.color} bg={metalBg.bg} />
            </div>

            <div className="px-2 main-bg lg:ps-10">
              <div className="mt-4 rounded-xl px-3 py-5">
                <p className="text-4xl text-white">
                  Vibecard{" "}
                  <span className="text-teal-400 font-extrabold">Metal</span>{" "}
                  Card
                </p>
                <p className="text-white font-poppins mt-5 text-2xl">
                  Price €35
                </p>
                <div className="flex gap-x-3 mt-4">
                  {bgColors.map((bg) => (
                    <div
                      key={bg.style}
                      className={`border ${
                        bg.style === metalBg.bg && "border-black"
                      } rounded-full w-7 h-7 text-center`}
                    >
                      <button
                        onClick={() =>
                          setMetalBg({ bg: bg.style, color: bg.textColor })
                        }
                        className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                      ></button>
                    </div>
                  ))}
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
                    onChange={() => console.log("lol")}
                  />
                </div>
                <div className="text-center w-full">
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bi-plus-lg bg-teal-600 w-full h-full text-white text-2xl"
                  ></button>
                </div>
              </div>

              {/* Button */}
              <div className="lg:mt-16 mt-10 mb-10 lg:w-72 text-center">
                <Link to={`/pay?id=${id}`}>
                  <div className="btn-bg py-4 lg:w-72  lg:text-center rounded-lg shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-white">
                    Order
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
