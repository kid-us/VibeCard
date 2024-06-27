import { useState } from "react";
import Colors from "./Sidebar/Colors";

import { sidebarIcons } from "../../../services/sidebarIcons";
import Texts from "./Sidebar/Texts";
import Content from "./Sidebar/Content";
import Layout from "./Sidebar/Layout";
import { useCardData } from "../../../store/useCardData";
import { userPic } from "../../../assets";
import { Link } from "react-router-dom";
import useAuthStore from "../../../store/useUserData";

const Sidebar = () => {
  const [selected, setSelected] = useState("Content");
  const [dropdown, setDropdown] = useState(false);
  const { preview } = useCardData();
  const { user } = useAuthStore();
  return (
    <div className="grid grid-cols-5 bg-stone-800 -md w-full h-[100dvh] pt-[55px]">
      {/* Icon */}
      <div className="relative text-white bg-stone-900 shadow shadow-stone-400 overflow-hidden">
        {sidebarIcons.map((icons) => (
          <div
            key={icons.id}
            onClick={() => setSelected(icons.title)}
            className={`py-5 text-center cursor-pointer ${
              selected === icons.title ? "bg-stone-700" : "hover:bg-stone-800"
            } p-3`}
          >
            <p className={`${icons.icon} text-xl`}></p>
            <p className="text-[10px] font-poppins text-gray-300 py-1">
              {icons.title}
            </p>
          </div>
        ))}
        <div className="absolute bottom-8 py-5 p-3">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer"
          >
            <img
              src={preview.profile ? preview.profile : userPic}
              alt="user"
              className="w-full overflow-hidden border-2 border-black rounded-full"
            />

            {/* Dropdown */}
            {dropdown && (
              <div className="absolute w-44 h-20 bg-white shadow shadow-zinc-800 top-11 -left-28 rounded px-4 pt-2">
                <p className="text sm font-poppins mb-3 text-gray-500">
                  @Lorem
                </p>
                <Link
                  to="/logout"
                  className="bi-box-arrow-in-left bg-teal-500 px-8 text-white py-1 rounded shadow shadow-zinc-800"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contents */}
      <div className="col-span-4 p-2 mt-3 overflow-y-scroll">
        {/* Layout */}
        {selected === "Layout" && <Layout />}
        {/* Color */}
        {selected === "Colors" && <Colors />}
        {/* Text */}
        {selected === "Text" && <Texts />}
        {/* Content */}
        {selected === "Content" && <Content />}
      </div>
    </div>
  );
};

export default Sidebar;
