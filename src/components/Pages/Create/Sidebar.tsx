import { useState } from "react";
import coverColor from "../../../services/coverColor";
import { useCoverColorStore } from "../../../sotre/useCoverColorStore";

const Sidebar = () => {
  const { coverColorBg, updateCoverColor } = useCoverColorStore();

  const [selected, setSelected] = useState("layout");

  const [color, setColor] = useState("#000000");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);

    if (newColor !== "#000000") {
      updateCoverColor(newColor);
    }
  };

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
      <div className="col-span-4 p-2">
        {/* Layout */}
        <p className="text-xs text-gray-300 mb-1">Cover Background Color</p>
        <div className="bg-white rounded p-2">
          <p className="text-xs mt-2">Default</p>
          <div
            className={`${
              coverColorBg === "gradient-cover" && coverColorBg
            } w-full h-20 rounded-lg my-2 shadow shadow-zinc-900`}
            style={{ backgroundColor: coverColorBg }}
          ></div>
          <p className="text-xs mt-2">Trend Colors</p>
          <div className="grid grid-cols-6 gap-3 overflow-hidden py-5">
            {coverColor.map((cover) => (
              <button
                key={cover.id}
                onClick={() => updateCoverColor(cover.value)}
                className={`${cover.value} p-3 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
              ></button>
            ))}
          </div>
          <div className={`relative ${color}`}>
            <p className="text-xs mb-2">Pick you Color here</p>
            <input
              type="color"
              className="w-full h-14 border-none outline-none shadow shadow-orange-900"
              value={color}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
