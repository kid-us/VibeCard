import { useState } from "react";
import { Link } from "react-router-dom";
import ProductColor from "./ProductColor";

const Product1 = () => {
  const [cardBg, setCardBg] = useState({
    bg: "bg-black",
    color: "text-white",
  });

  return (
    <div className="lg:mb-0 mb-10">
      <Link to={"/products/1"}>
        <div className="relative lg:px-8 px-2 py-5 bg-white rounded h-[530px]">
          <p className="absolute z-20 top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`relative rounded-md w-full h-[230px] ${cardBg.bg} flex justify-center items-center mb-5 shadow-lg shadow-zinc-900`}
          >
            <div>
              <p className={`${cardBg.color} logo-font text-center text-4xl`}>
                vibecard
              </p>
            </div>

            <div className="absolute bottom-2 left-5">
              <p className="text-white font-poppins font-bold text-xl">Omar</p>
              <p className="text-white font-poppins">CEO</p>
            </div>
          </div>

          {/* Qr code */}
          <div
            className={`rounded-md w-full h-[230px] ${cardBg.bg} flex justify-center items-center shadow-lg shadow-zinc-900`}
          >
            <p className={`${cardBg.color} bi-qr-code text-8xl`}></p>
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

export default Product1;
