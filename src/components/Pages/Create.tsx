import { Link } from "react-router-dom";
import { user } from "../../assets";

const Create = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <nav className="flex justify-between py-2">
          <div>
            <Link to={"/"} className="logo-font text-2xl">
              vibecard
            </Link>
          </div>
          <div className="space-x-10">
            <Link to={"/insight"} className="text-sm">
              <span className="bi-bar-chart-fill text-black text-xs me-1"></span>
              Insights
            </Link>
            <Link to={"/insight"} className="text-sm">
              <span className="bi-gear-fill text-black text-xs me-1"></span>
              Settings
            </Link>
          </div>
        </nav>
      </div>

      <div className="px-10 mt-7">
        <div className="grid grid-cols-4 gap-6">
          <div className="menu-bg rounded-md w-full h-96"></div>
          <div className="col-span-2 shadow rounded shadow-zinc-400 w-full h-96 p-2">
            <div className="flex">
              <img src={user} alt="user" className="w-12" />
              <div className="text-sm content-center ms-4">
                <p className="text-gray-500">Lorem</p>
                <p className="text--500">lorem@gmail.com</p>
              </div>
            </div>
            <p className="mt-6">Create your Business card</p>
            <form className="mt-6">
              <div className="grid grid-cols-3">
                <div className="relative">
                  <input
                    type="file"
                    className="h-20 bg-gray-500 rounded-lg w-40"
                  />
                  <div className="absolute top-0">
                    <p className="text-[10px] text-gray-400">
                      Select file or drag and drop here
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="shadow rounded shadow-zinc-400 w-full h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default Create;
