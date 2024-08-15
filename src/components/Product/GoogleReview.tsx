import { google } from "@/assets";
import { Link } from "react-router-dom";

interface Props {
  bg: string;
  note: string;
  tablet?: boolean;
}

const GoogleReview = ({ bg, note, tablet }: Props) => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to={`/products/card-google-review`}>
        <div className="flex justify-center items-center relative px-8 py-5 bg-white pb-0 rounded h-[450px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md ${
              tablet ? "lg:w-72 md:w-[42%] w-[90%]" : "lg:w-72 w-[90%]"
            }  h-[400px] ${bg} mb-5 shadow-lg shadow-zinc-900`}
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
        <p className="text-lg text-white font-poppins no-select">
          Vibecard Google Review
        </p>
        <p className="text-xs text-white font-poppins">
          Available in{" "}
          <span className="text-teal-500 font-poppins text-sm font-bold">
            Metal{" "}
          </span>
          ,{" "}
          <span className="text-teal-500 font-poppins text-sm font-bold">
            Bamboo{" "}
          </span>
          and{" "}
          <span className="text-teal-500 font-poppins text-sm font-bold">
            Recycled Paper
          </span>
        </p>
      </div>
    </div>
  );
};

export default GoogleReview;
