import { google } from "@/assets";
import { Link } from "react-router-dom";

interface Props {
  bg: string;
  note: string;
}

const GoogleReview = ({ bg, note }: Props) => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to="/products/5">
        <div className="flex justify-center items-center relative px-8 py-5 bg-gray-200 rounded h-[530px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md lg:w-72 h-[400px] ${bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="relative flex justify-center items-center h-full">
              <div className="">
                {bg === "bg-black" && (
                  <p
                    className={`text-white text-center text-xl font-poppins absolute top-5 w-full left-0`}
                  >
                    {note}
                  </p>
                )}
                <div className="flex justify-center">
                  <img src={google} alt="google" className="w-28" />
                </div>
                {bg === "bg-white" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } text-center text-xl font-poppins mt-5`}
                  >
                    {note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
        <div className="flex justify-between">
          <p className="text-lg text-white font-poppins no-select">
            Vibecard Social Media
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
