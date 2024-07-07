import { useState } from "react";
import Card from "./Card";

const bgColors = [
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

const Products = () => {
  const [metalBg, setMetalBg] = useState({
    bg: "bg-amber-500",
    color: "text-white",
  });

  const [plasticBg, setPlasticBg] = useState({
    bg: "bg-gray-500",
    color: "text-black",
  });

  const [bambooBg, setBambooBg] = useState({
    bg: "bg-black",
    color: "text-white",
  });

  return (
    <div className="border-t border-gray-800 mt-10 lg:pb-14 pt-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative right-20 lg:-top-28 -top-40">
          <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
        </div>
        <div className="flex justify-center w-full text-center">
          <p className="text-gray-100 font-extrabold lg:text-4xl text-3xl text-center mb-16 lg:w-96 w-80">
            All Digital Business Cards
          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-x-5 px-2">
          {/* Metal */}
          <div className="lg:mb-0 mb-10">
            <Card textColor={metalBg.color} bg={metalBg.bg} />
            <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
              <div className="flex justify-between">
                <p className="text-lg text-white">
                  Vibecard{" "}
                  <span className="text-teal-400 font-extrabold">Metal</span>{" "}
                  Cards
                </p>
                <p className="text-white font-poppins">€35</p>
              </div>
              <div className="flex justify-center gap-x-2 mt-4">
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
          </div>
          {/* Plastic */}
          <div className="lg:mb-0 mb-10">
            <Card textColor={plasticBg.color} bg={plasticBg.bg} />
            <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
              <div className="flex justify-between">
                <p className="text-white">
                  Vibecard{" "}
                  <span className="text-teal-400 font-extrabold">
                    Recycled Papers
                  </span>{" "}
                  Cards
                </p>
                <p className="text-white font-poppins">€10</p>
              </div>
              <div className="flex justify-center gap-x-2 mt-4">
                {bgColors.map((bg) => (
                  <div
                    key={bg.style}
                    className={`border ${
                      bg.style === plasticBg.bg && "border-black"
                    } rounded-full w-7 h-7 text-center`}
                  >
                    <button
                      onClick={() =>
                        setPlasticBg({ bg: bg.style, color: bg.textColor })
                      }
                      className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                    ></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Bamboo */}
          <div className="lg:mb-0 mb-10">
            <Card textColor={bambooBg.color} bg={bambooBg.bg} />
            <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
              <div className="flex justify-between">
                <p className="text-white">
                  Vibecard{" "}
                  <span className="text-teal-400 font-extrabold">Bamboo </span>
                  Cards
                </p>
                <p className="text-white font-poppins">€25</p>
              </div>
              <div className="flex justify-center gap-x-2 mt-4">
                {bgColors.map((bg) => (
                  <div
                    key={bg.style}
                    className={`border ${
                      bg.style === bambooBg.bg && "border-black"
                    } rounded-full w-7 h-7 text-center`}
                  >
                    <button
                      onClick={() =>
                        setBambooBg({ bg: bg.style, color: bg.textColor })
                      }
                      className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                    ></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
