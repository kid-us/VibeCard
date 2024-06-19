import { user } from "../../../../assets";
import { useLayoutStore } from "../../../../store/useLayoutStore";

const Layout = () => {
  const { updateLayout } = useLayoutStore();
  return (
    <div>
      <p className="text-sm text-gray-400 mb-4">Card Layouts</p>
      <div className="bg-white rounded p-2">
        <div>
          <p className="text-gray-600 chakra">Default</p>
          <div
            onClick={() => updateLayout("default")}
            className="relative shadow bg-gray-100 shadow-zinc-800 rounded-lg mt-3 cursor-pointer"
          >
            <div className="w-full h-20 bg-gray-600 rounded ">
              <div className={`h-24 relative flex justify-between p-2 z-0`}>
                <div className="absolute top-10 w-16 h-16 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img src={user} alt="user" />
                </div>
                {/* Pronoun and Name */}
                <div className="content-center mb-2">
                  <p
                    className={`absolute right-0 me-2 bg-gray-400 w-36 h-8 text-center rounded`}
                  ></p>
                </div>
              </div>
            </div>
            <div className="px-5 mt-10 text-white">
              <div className="relative">
                <img
                  src={user}
                  alt="Cover"
                  className="absolute right-0 -top-7 w-14 h-14 rounded-full border-2 border-white"
                />
                {/* Job Title */}
                <p className={`mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
                {/* Company */}
                <p className={`mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
                {/* Tag Line */}
                <p className={`mt-3 mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
                {/* Location */}
                <p className={`my-2 mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
              </div>
            </div>
            <div className="grid grid-cols-5 px-3 mt-4 pb-4">
              <p className="bi-envelope-fill text-3xl text-gray-400"></p>
              <p className="bi-telegram text-3xl text-gray-400"></p>
              <p className="bi-whatsapp text-3xl text-gray-400"></p>
              <p className="bi-globe text-3xl text-gray-400"></p>
              <p className="bi-telephone-fill text-3xl text-gray-400"></p>
            </div>
          </div>

          {/* Right */}
          <p className="mt-5 text-gray-600 chakra">Right</p>
          <div
            onClick={() => updateLayout("right")}
            className="relative bg-gray-100 shadow shadow-zinc-800 rounded-lg mt-3 cursor-pointer"
          >
            <div className="w-full h-20 bg-gray-600 rounded ">
              <div className={`h-24 relative flex justify-between p-2 z-0`}>
                <div className="absolute top-10 right-0 w-16 h-16 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img src={user} alt="user" />
                </div>
                {/* Pronoun and Name */}
                <div className="content-center mb-2">
                  <p
                    className={`absolute left-2 bg-gray-400 w-36 h-8 text-center rounded`}
                  ></p>
                </div>
              </div>
            </div>
            <div className="px-5 mt-10 text-white">
              <div className="relative">
                <img
                  src={user}
                  alt="Cover"
                  className="absolute left-0 -top-7 w-14 h-14 rounded-full border-2 border-white"
                />
                {/* Job Title */}
                <p className={`mb-1 bg-gray-400 w-40 ms-4 h-6 rounded`}></p>
                {/* Company */}
                <p className={`mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
                {/* Tag Line */}
                <p className={`mt-3 mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
                {/* Location */}
                <p className={`my-2 mb-1 bg-gray-400 w-44 h-6 rounded`}></p>
              </div>
            </div>
            <div className="grid grid-cols-5 px-3 mt-4 pb-4">
              <p className="bi-envelope-fill text-3xl text-gray-400"></p>
              <p className="bi-telegram text-3xl text-gray-400"></p>
              <p className="bi-whatsapp text-3xl text-gray-400"></p>
              <p className="bi-globe text-3xl text-gray-400"></p>
              <p className="bi-telephone-fill text-3xl text-gray-400"></p>
            </div>
          </div>

          {/* Center */}
          <p className="mt-5 text-gray-600 chakra">Center</p>
          <div
            onClick={() => updateLayout("centered")}
            className="relative bg-gray-100 shadow shadow-zinc-800 rounded-lg mt-3 cursor-pointer"
          >
            <div className="w-full h-20 bg-gray-600 rounded ">
              <div className={`h-24 relative flex justify-between p-2 z-0`}>
                <div className="absolute top-10 right-20 w-16 h-16 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img src={user} alt="user" />
                </div>
                <img
                  src={user}
                  alt="Cover"
                  className="absolute right-20 top-20 w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>
            <div className="px-5 mt-5 text-white">
              <div className="relative">
                {/* Pronoun and Name */}
                <p
                  className={`bg-gray-400 w-40  ms-3 h-6 text-center rounded mt-12 mb-2`}
                ></p>
                {/* Job Title */}
                <p className={`mb-1 bg-gray-400 w-40 ms-3 h-6 rounded`}></p>
                {/* Company */}
                <p className={`mb-1 bg-gray-400 w-40 ms-3 h-6 rounded`}></p>
                {/* Tag Line */}
                <p className={`mb-1 bg-gray-400 w-40 ms-3 h-6 rounded`}></p>
                {/* Location */}
                <p
                  className={`my-2 mb-1 bg-gray-400 w-40 ms-3 h-6 rounded`}
                ></p>
              </div>
            </div>
            <div className="grid grid-cols-5 px-3 mt-4 pb-4">
              <p className="bi-envelope-fill text-3xl text-gray-400"></p>
              <p className="bi-telegram text-3xl text-gray-400"></p>
              <p className="bi-whatsapp text-3xl text-gray-400"></p>
              <p className="bi-globe text-3xl text-gray-400"></p>
              <p className="bi-telephone-fill text-3xl text-gray-400"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
