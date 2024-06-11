import { qrCode, user } from "../../../assets";
import Magnetic from "../../GsapMagnetic/Magnetic";
const HeroCard = () => {
  return (
    <>
      {/* Phone Card*/}
      <Magnetic>
        <div className="absolute bg-white w-52 h-[380px] rounded-xl -top-24 left-10 overflow-hidden border shadow-lg shadow-black hover:z-30">
          <div className="flex justify-center bg-black  w-full h-28 relative">
            <div className="absolute border-4 border-white w-24 h-24 rounded-full mt-4">
              <img src={user} alt="user" className="blur-sm" />
            </div>
          </div>
          {/* Info */}
          <div className="text-black mt-2 text-xs text-center">
            <p className="text-[10px] font-poppins font-extrabold">
              Lorem Ipsum
            </p>
            <p className="text-[7px] font-poppins font-extrabold">
              Developer at <span className="logo-font">vibecard</span> Co.
            </p>
            <p className="text-[6px] font-poppins font-extrabold">
              lorem@gmail.com
            </p>
          </div>
          {/* Button */}
          <div className="text-center mt-4">
            <button className="bg-teal-600 rounded px-3 py-1 font-poppins shadow shadow-zinc-800">
              Save Contact
            </button>
          </div>
          {/* Social */}
          <div className="flex px-3 flex-wrap mt-8">
            <p className="bi-twitter text-sky-600 text-4xl border rounded p-1 bg-sky-100 me-5"></p>
            <p className="bi-instagram text-red-600 text-4xl border rounded p-1 bg-red-100 me-5"></p>
            <p className="bi-facebook text-blue-700 text-4xl border rounded p-1 bg-blue-200 "></p>
            <p className="bi-github text-zinc-900 text-4xl border rounded p-1 bg-zinc-200 me-5 mt-5"></p>
            <p className="bi-linkedin text-blue-700 text-4xl border rounded p-1 bg-blue-200 me-5 mt-5"></p>
            <p className="bi-telegram text-sky-500 text-4xl border rounded p-1 bg-blue-200 mt-5"></p>
          </div>
        </div>
      </Magnetic>

      {/* Business Card */}
      <Magnetic>
        <div className="content-center hover:z-40">
          <div className="bg-zinc-900 rounded-md h-56 p-5 w-[400px] text-sm relative shadow-lg shadow-black">
            <p className="text-2xl text-teal-400 logo-font">vibecard</p>
            <div className="grid grid-cols-3">
              <div className="col-span-2 mt-4">
                <div className="flex mb-5">
                  <img src={user} alt="user" className="w-10 blur-sm" />
                  <span className="text-gray-200 ms-6 mt-3">Lorem</span>
                </div>
                <p className="text-gray-400 text-xs mb-2">
                  {" "}
                  <span className="bi-geo-alt-fill text-xs text-yellow-400 font-poppins">
                    {" "}
                    Developer at VibeCard
                  </span>{" "}
                </p>
                <p className="mb-2">
                  <span className="bi-envelope-fill text-xs text-sky-500 font-poppins">
                    {" "}
                    lorem@gmail.com
                  </span>
                </p>
                <p>
                  <span className="bi-phone-fill text-xs text-gray-400 font-poppins">
                    {" "}
                    +25199090889
                  </span>
                </p>
              </div>
              <div className="p-1 bg-white rounded mt-4">
                <img src={qrCode} alt="qr code" className="w-32 pt-2 blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </Magnetic>
      {/* Contact Card */}
      <Magnetic>
        <div className="absolute bg-stone-600 w-56 h-36 bottom-0 right-14 rounded shadow-lg shadow-black hover:z-50 z-10">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border-2 mt-1">
              <img src={user} alt="user" className="blur-sm" />
            </div>
          </div>
          <p className="text-sm text-center font-poppins mt-1">Lorem Ipsum</p>
          <div className="text-center mt-2">
            <button className="font-poppins bg-sky-800 p-2 text-xs rounded shadow shadow-zinc-800">
              Save Contact
            </button>
          </div>
        </div>
      </Magnetic>
    </>
  );
};

export default HeroCard;
