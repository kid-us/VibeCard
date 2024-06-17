import { useState } from "react";
import Colors from "./Sidebar/Colors";

import { sidebarIcons } from "../../../services/sidebarIcons";
import Texts from "./Sidebar/Texts";
import Content from "./Sidebar/Content";

const Sidebar = () => {
  const [selected, setSelected] = useState("Colors");

  return (
    <div className="grid grid-cols-5 bg-stone-800 -md w-full h-[100dvh] pt-[55px]">
      {/* Icon */}
      <div className="text-white bg-stone-900 shadow shadow-stone-400 overflow-hidden">
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
      </div>

      {/* Contents */}
      <div className="col-span-4 p-2 mt-3 overflow-y-scroll">
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
