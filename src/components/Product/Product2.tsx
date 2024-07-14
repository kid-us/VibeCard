import { useState } from "react";
import { Link } from "react-router-dom";
import ProductColor from "./ProductColor";

export const bgColors = [
  { style: "bg-teal-600", textColor: "text-black" },
  { style: "bg-red-600", textColor: "text-white" },
  { style: "bg-gray-500", textColor: "text-white" },
  { style: "bg-lime-500", textColor: "text-black" },
  { style: "bg-yellow-300", textColor: "text-black" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-fuchsia-700", textColor: "text-black" },
  { style: "bg-black", textColor: "text-white" },
];

const Product1 = () => {
  const [metalBg, setMetalBg] = useState({
    bg: "bg-gray-500",
    color: "text-white",
  });

  return (
    <>
      <div className="lg:mb-0 mb-10">
        <Link to={"/products/2"}>
          <div>
            <div className="relative px-8 py-5 bg-white rounded h-[460px]">
              <p className="absolute z-50 top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
                Best Seller
              </p>
              <div className="relative">
                <div
                  className={`relative hover:z-40 rounded-md w-64 h-[380px] ${metalBg.bg} flex justify-center items-center mb-5 shadow-xl shadow-zinc-900 border border-gray-700`}
                >
                  <p
                    className={`${metalBg.color} logo-font text-center text-4xl`}
                  >
                    vibecard
                  </p>
                </div>

                {/* Qr code */}
                <div
                  className={`absolute top-10 -right-0 rounded-md w-64 h-[380px] ${metalBg.bg} flex justify-center items-center shadow-xl shadow-zinc-950 border border-gray-700`}
                >
                  <p className={`${metalBg.color} bi-qr-code text-8xl`}></p>
                </div>
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
    </>
  );
};

export default Product1;
