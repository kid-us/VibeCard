import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../services/products";
import { useEffect, useState } from "react";
import { Products } from "../../services/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Products[]>();

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setProduct(fetchProducts(Number(id)));
  }, []);

  const handleMinus = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto lg:mt-28 mt-5">
        {product && (
          <div className="lg:grid grid-cols-2 justify-between gap-x-20">
            <div className="mt-10 lg:mx-0 mx-1">
              <img
                src={product[0].image}
                alt="Card"
                className="lg:w-full object-contain rounded lg:shadow-2xl shadow-zinc-950 lg:mb-0 mb-10"
              />
            </div>
            <div className="lg:px-0 px-2 text-white">
              <h1 className="text-3xl font-extrabold mb-8">
                {product[0].name}
              </h1>
              <p className="chakra mb-5">{product[0].description}</p>
              <p className="text-xl chakra">Type: {product[0].type}</p>
              <p className="text-xl chakra">Price: {product[0].price}</p>
              {/*Quantity */}
              <div className="grid grid-cols-4 border border-gray-400 rounded-xl me-44 mt-10 overflow-hidden lg:w-auto w-full">
                <div className="col-span-1">
                  <button
                    onClick={() => handleMinus()}
                    className="bi-dash bg-black w-full h-full text-white text-2xl"
                  ></button>
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    className="h-14 border w-full text-center chakra text-3xl text-black"
                    value={quantity}
                    onChange={() => console.log("lol")}
                  />
                </div>
                <div className="col-span-1 text-center">
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bi-plus-lg bg-black w-full h-full text-white text-2xl"
                  ></button>
                </div>
              </div>

              {/* Button */}
              <div className="lg:mt-16 mt-10 mb-10 lg:w-72 text-center">
                <Link to={`/pay?id=${id}`}>
                  <div className="bg-sky-800 py-4 lg:w-72  lg:text-center rounded-lg shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-white">
                    Order
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
