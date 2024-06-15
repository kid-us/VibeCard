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
            <FontStylesSize
              defaultFontStyle={pronoun.font}
              view={view}
              defaultFontSize={pronoun.size}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Texts;
