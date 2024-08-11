import { useState } from "react";
import { Link } from "react-router-dom";
import ProductColor from "./ProductColor";

const Product1 = () => {
  const [cardBg, setCardBg] = useState({
    bg: "bg-white",
    color: "text-black",
  });

  return (
    <>
      <div className="lg:mb-0 mb-10">
        <Link to={"/products/2"}>
          <div className="relative px-8 py-5 bg-gray-200 rounded h-[530px]">
            <p className="absolute z-50 top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
              Best Seller
            </p>
            <div className="relative">
              <div
                className={`relative hover:z-40 rounded-md w-72 h-[400px] ${cardBg.bg} flex justify-center items-center mb-5 shadow-xl shadow-zinc-900`}
              >
                <p
                  className={`${cardBg.color} bi-qr-code font-poppins text-center text-9xl`}
                ></p>
              </div>

              {/* Qr code */}
              <div
                className={`absolute top-10 -right-0 rounded-md w-72 h-[400px] ${cardBg.bg} flex justify-center items-center shadow-xl shadow-zinc-950`}
              >
                <div>
                  <p className={`${cardBg.color} font-poppins text-4xl`}>
                    Your Logo
                  </p>
                  <p
                    className={`${cardBg.color} font-poppins text-sm text-center`}
                  >
                    Your name
                  </p>
                  <p
                    className={`${cardBg.color} font-poppins text-sm text-center`}
                  >
                    Your Title
                  </p>
                </div>
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
    </>
  );
};

export default Product1;
