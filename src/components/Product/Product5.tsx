import { googleText } from "@/assets";
import { Link } from "react-router-dom";

const Product5 = () => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to="/products/4">
        <div className="flex justify-center items-center relative lg:px-8 px-2 py-5 bg-gray-200 rounded h-[530px]">
          <div
            className={`relative rounded-md w-full h-[230px] bg-white mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="flex items-center h-full justify-between">
              <div>
                <img src={googleText} alt="google" className="w-52 px-3" />
                <p className="font-poppins ps-3 text-xl mt-2">
                  Review my Business
                </p>
              </div>
              <p className="bi-qr-code text-7xl"></p>
              <div></div>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
        <div className="flex justify-between">
          <p className="text-lg text-white font-poppins">
            Vibecard Social Media
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product5;
