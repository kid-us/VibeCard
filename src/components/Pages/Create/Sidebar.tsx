import { useState } from "react";
// import { coverColor, cardColor } from "../../../services/coverColor";
import { useCoverColorStore } from "../../../store/useCoverColorStore";
import { useCardColorStore } from "../../../store/useCardColorStore";
import { useTextColorStore } from "../../../store/useTextColorStore";
import TextColor from "./Sidebar/TextColor";
import BackgroundColor from "./Sidebar/BackgroundColor";

const Sidebar = () => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const { company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();

  const [selected, setSelected] = useState("layout");

  return (
    <div className="grid grid-cols-5 bg-stone-800 -md w-full h-[100dvh] pt-[51px]">
      {/* Icon */}
      <div className="text-white bg-stone-900 shadow shadow-stone-400 overflow-hidden">
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
      
      {/* Contents */}
      <div className="col-span-4 p-1 mt-3 overflow-y-scroll">
        {/* Color */}
        {/* Card Background */}
        <p className="text-xs text-gray-300 mb-2">Card Background Color</p>
        <BackgroundColor bgColors={cardColorBg} cardType="card" colorPicker />
        {/* Cover Background */}
        <p className="text-xs text-gray-300 mb-2">Cover Background Color</p>
        <BackgroundColor
          bgColors={coverColorBg}
          cardType="cover"
          colorPicker={false}
        />
        {/* Text Colors */}
        <p className="text-xs text-gray-300 mb-2">Text Colors</p>
        {/* Pronoun */}
        <TextColor name={"pronoun"} bg={pronoun.color} title={"Pronoun"} />
        {/* Name */}
        <TextColor name={"name"} bg={name.color} title={"Name"} />
        {/* Job Title */}
        <TextColor name={"jobTitle"} bg={jobTitle.color} title={"Job Title"} />
        {/* Location */}
        <TextColor name={"location"} bg={location.color} title={"Location"} />
        {/* Company */}
        <TextColor name={"company"} bg={company.color} title={"Company"} />
        {/* Tag Title */}
        <TextColor name={"tagLine"} bg={tagLine.color} title={"Tag Line"} />
      </div>
    </div>
  );
};

export default Sidebar;
