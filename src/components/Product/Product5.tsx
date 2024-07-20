import { useState } from "react";
import { Link } from "react-router-dom";
import ProductColor from "./ProductColor";

const Product5 = () => {
  const [cardBg, setCardBg] = useState({
    bg: "bg-black",
    color: "text-white",
  });

  return (
    <div className="lg:mb-0 mb-10">
      <Link to="/products/5">
        <div className="flex justify-center items-center relative px-8 py-5 bg-gray-200 rounded h-[530px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md lg:w-72 h-[400px] ${cardBg.bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="flex justify-center items-center h-full px-10">
              <p className={`${cardBg.color} logo-font text-center text-4xl`}>
                vibecard
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <ProductColor
        defaultBg={cardBg.bg}
        setBg={(style, color) => setCardBg({ bg: style, color })}
        title="Vibecard"
        price="€35"
      />
    </div>
  );
};

export default Product5;
