import { useState } from "react";
import "../fonts.css";
import { fontSize, fonts } from "../../../../services/fonts";
import { State, useTextColorStore } from "../../../../store/useTextColorStore";
import FontStylesSize from "./FontStylesSize";

const texts = ["pronoun", "name", "location", "jobTitle", "tagLine", "company"];

const Texts = () => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("pronoun");

  const [fontStyle, setFontStyle] = useState({
    style: "font-poppins",
    name: "Poppins",
  });

  const {
    updateFont,
    pronoun,
    company,
    jobTitle,
    name,
    tagLine,
    location,
    updateSize,
  } = useTextColorStore();

  const handleFontStyle = (
    style: string,
    name: string,
    element: keyof State
  ) => {
    updateFont(element, style);

    console.log(style, element.toLowerCase());

    setFontStyle({
      ...fontStyle,
      style: style,
      name: name,
    });
  };

  return (
    <>
      <p className="text-sm text-gray-300 mb-2 mx-2">Text Styles</p>

      <div className="p-2 z-50">
        <div className="relative text-sm border-teal-500 shadow shadow-stone-300 rounded">
          <p className="px-2 py-2 text-gray-50">Choose Texts </p>
          <p
            onClick={() => setDropdown(!dropdown)}
            className={`${
              dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
            } absolute top-2 right-3 cursor-pointer text-white`}
          ></p>
          {dropdown && (
            <div
              className={`absolute bg-teal-700 w-full mt-1 rounded px-2 py-3 shadow-md shadow-zinc-900 space-y-1 z-10`}
            >
              {texts.map((text) => (
                <p
                  onClick={() => {
                    setView(text);
                    setDropdown(false);
                  }}
                  key={text}
                  className={`${
                    view === text && "text-white text-lg"
                  } hover:text-gray-400 w-full cursor-pointer first-letter:uppercase text-sm pb-1`}
                >
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>

        {view === "pronoun" && (
          <>
            {/* Font Styles */}
            <FontStylesSize view={view} />
            {/* <div className="flex my-5">
              <p className="first-letter:uppercase text-teal-400">{view}</p>
              <p className="ms-2 text-white text-xs"> Font Style</p>
            </div>

            <div className="bg-white w-full rounded p-2">
              {fonts.map((font) => (
                <p
                  key={font.name}
                  onClick={() =>
                    handleFontStyle(font.style, font.name, view as keyof State)
                  }
                  className={`${font.style} hover:gray-300 hover:text-teal-400
            cursor-pointer  pb-2 ${
              pronoun.font === font.style ? "text-sky-600" : "text-black"
            }`}
                >
                  {font.name}
                </p>
              ))}
            </div> */}
            {/* Font Sizes */}
            {/* <div className="flex my-3">
              <p className="first-letter:uppercase text-teal-600">{view}</p>
              <p className=" ms-2 text-white text-xs"> Font Size</p>
            </div>
            <div className="bg-white w-full rounded p-2">
              {fontSize.map((size) => (
                <p
                  key={size.name}
                  onClick={() => updateSize(view as keyof State, size.size)}
                  className={`${size.size} hover:gray-300 hover:text-teal-400
            cursor-pointer  pb-2 ${
              pronoun.size === size.size ? "text-teal-400" : "text-black"
            }`}
                >
                  {size.name}
                </p>
              ))}
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default Texts;
