import { Link } from "react-router-dom";
import { pageNotFound } from "../../assets";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useState } from "react";

const Page404 = () => {
  const [title] = useState("404:Page not Found");
  useDocumentTitle(title);

  return (
    <div className="lg:px-40 px-2">
      <div className="flex justify-center h-[100dvh]">
        <div className="content-center">
          <div className="lg:w-[500px] lg:h-64 bg-zinc-800 rounded relative p-3 shadow-lg shadow-zinc-950">
            <Link to="/" className="logo-font text-teal-400 text-2xl">
              vibecard
            </Link>
            <div className="grid grid-cols-2 gap-5 secondary-bg rounded">
              <div className="mt-3">
                <img
                  src={pageNotFound}
                  alt="not found"
                  className="grayscale rounded-md"
                />
              </div>
              <div className="mt-3 font-extrabold">
                <p className="text-2xl font-poppins text-white">404</p>
                <p className="font-poppins mb-5 text-gray-300">
                  Page Not Found
                </p>
                <p className="text-xs font-extralight text-gray-200">
                  The page you are looking for can't be found.
                </p>
                <Link to="/">
                  <div className="mt-5 w-full bg-sky-700 py-2 rounded text-center font-semibold text-sm text-gray-200 shadow shadow-gray-500">
                    Back to Home
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
