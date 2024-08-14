import { useState } from "react";
import { Link } from "react-router-dom";
import ProductColor from "./ProductColor";

interface Props {
  tablet: boolean;
}

const Product3 = ({ tablet }: Props) => {
  const [cardBg, setCardBg] = useState({
    bg: "bg-zinc-600",
    color: "text-white",
  });

  return (
    <div className="lg:mb-0 mb-10">
      <Link to="/products/business-card">
        <div className="flex justify-center items-center relative lg:px-8 px-1 py-5 bg-white rounded h-[530px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md ${
              tablet && "lg:w-full md:w-[60%] w-full"
            }  h-[230px] ${cardBg.bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="flex justify-center items-center h-full px-10">
              <div>
                <p
                  className={`${cardBg.color} font-poppins font-bold text-center text-3xl`}
                >
                  Your Logo here
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
  );
};

export default Product3;
