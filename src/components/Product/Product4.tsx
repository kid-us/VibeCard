import { useState } from "react";
import { Link } from "react-router-dom";
import ProductColor from "./ProductColor";

export const bgColors = [
  { style: "bg-teal-600", textColor: "text-black" },
  { style: "bg-red-600", textColor: "text-white" },
  { style: "bg-gray-500", textColor: "text-black" },
  { style: "bg-lime-500", textColor: "text-black" },
  { style: "bg-yellow-300", textColor: "text-black" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-fuchsia-700", textColor: "text-black" },
  { style: "bg-black", textColor: "text-white" },
];

const Product4 = () => {
  const [metalBg, setMetalBg] = useState({
    bg: "bg-cyan-600",
    color: "text-black",
  });

  return (
    <div className="lg:mb-0 mb-10">
      <Link to="/products/4">
        <div className="flex justify-center items-center relative px-8 py-5 bg-white rounded h-[460px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md w-full h-[225px] ${metalBg.bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="flex justify-center items-center h-full px-10">
              <p className={`${metalBg.color} logo-font text-center text-4xl`}>
                vibecard
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <ProductColor
        defaultBg={metalBg.bg}
        setBg={(style, color) => setMetalBg({ bg: style, color })}
        bgColors={bgColors}
        title="Vibecard"
        price="€35"
      />
    </div>
  );
};

export default Product4;
