import { useState } from "react";
import Colors from "./Sidebar/Colors";
import { sidebarIcons } from "../../services/sidebarIcons";
import Texts from "./Sidebar/Texts";
import Content from "./Sidebar/Content";
import Layout from "./Sidebar/Layout";
import { useCardData } from "../../store/useCardData";
import { userPic } from "../../assets";
import useAuthStore from "../../store/useUserData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/request";

const Sidebar = () => {
  const [selected, setSelected] = useState("Colors");
  const { preview } = useCardData();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        `${baseUrl}/api/v1/auth/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        logout();
        navigate("/");
      })
      .catch((err) => {
        console.error("Logout failed: ", err);
      });
  };

  return (
    <div className="grid grid-cols-5 bg-[#050a19] -md w-full h-[100dvh] border border-stone-900 rounded-r">
      {/* Icon */}
      <div className="relative z-50 text-white bg-[#050a19] shadow shadow-stone-400 overflow-hidden">
        {sidebarIcons.map((icons) => (
          <div
            key={icons.id}
            onClick={() => setSelected(icons.title)}
            className={`py-5 text-center cursor-pointer ${
              selected === icons.title ? "secondary-bg" : "hover:bg-blue-950"
            } p-3`}
          >
            <p className={`${icons.icon} text-xl`}></p>
            <p className="text-[10px] font-poppins text-gray-300 py-1">
              {icons.title}
            </p>
          </div>
        ))}
        <div className="absolute bottom-0 p-2 w-16">
          <img
            src={preview.profile ? preview.profile : userPic}
            alt="user"
            className="w-full overflow-hidden border-2 border-black rounded-full"
          />
          <p className="uppercase text-xs text-center mt-2 text-gray-400 text-ellipsis text-nowrap overflow-hidden">
            {user}
          </p>
          <p
            onClick={() => handleLogout()}
            className="text-center mt-2 bi-arrow-bar-right text-xl cursor-pointer"
            title="Logout"
          ></p>
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
