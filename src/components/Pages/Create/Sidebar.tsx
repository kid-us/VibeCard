import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("layout");

  return (
    <div className="grid grid-cols-5 bg-stone-800 -md w-full h-[100dvh] pt-14">
      <div className="text-white bg-stone-900 overflow-hidden">
        <div
          onClick={() => setSelected("layout")}
          className={`py-5 text-center cursor-pointer ${
            selected === "layout" ? "bg-stone-800" : "hover:bg-stone-800"
          } p-3`}
        >
          <p className="bi-grid-1x2-fill text-xl"></p>
          <p className="text-[10px] font-poppins text-gray-300 py-1">Layout</p>
        </div>
        <div
          onClick={() => setSelected("text")}
          className={`py-5 text-center cursor-pointer ${
            selected === "text" ? "bg-stone-800" : "hover:bg-stone-800"
          } p-3`}
        >
          <p className="bi-fonts text-xl"></p>
          <p className="text-[10px] font-poppins text-gray-300 py-1">Text</p>
        </div>
        <div
          onClick={() => setSelected("content")}
          className={`py-5 text-center cursor-pointer ${
            selected === "content" ? "bg-stone-800" : "hover:bg-stone-800"
          } p-3`}
        >
          <p className="bi-body-text text-xl"></p>
          <p className="text-[10px] font-poppins text-gray-300 py-1">Content</p>
        </div>
        <div
          onClick={() => setSelected("setting")}
          className={`py-5 text-center cursor-pointer ${
            selected === "setting" ? "bg-stone-800" : "hover:bg-stone-800"
          } p-3`}
        >
          <p className="bi-gear-fill text-center text-xl"></p>
          <p className="text-[10px] font-poppins text-gray-300 py-1">Setting</p>
        </div>
      </div>
      <div className="col-span-4 p-4"></div>
    </div>
  );
};

export default Sidebar;
