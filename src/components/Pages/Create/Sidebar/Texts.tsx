import { useState } from "react";
import "../fonts.css";
import { fonts } from "../../../../services/fonts";
import { State, useTextColorStore } from "../../../../store/useTextColorStore";

const texts = [
  "pronoun",
  "name",
  "location",
  "jobTitle",
  "icons",
  "website",
  "tagLine",
];

const Texts = () => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("pronoun");

  const [fontStyle, setFontStyle] = useState({
    style: "font-poppins",
    name: "Poppins",
  });

  const { updateFont, pronoun } = useTextColorStore();

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
      <p className="text-xs text-gray-300 mb-2">Text Styles</p>

      <div className="bg-white rounded p-2 z-50">
        <div className="relative text-xs bg-teal-500 shadow shadow-stone-300 rounded">
          <p className="px-2 py-2 text-gray-50">Default Text Styles</p>
          <p
            onClick={() => setDropdown(!dropdown)}
            className={`${
              dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
            } absolute top-2 right-3 cursor-pointer`}
          ></p>
          {dropdown && (
            <div
              className={`absolute bg-white w-full mt-1 rounded p-2 shadow shadow-zinc-900 space-y-1 z-10`}
            >
              {texts.map((text) => (
                <p
                  onClick={() => {
                    setView(text);
                    setDropdown(false);
                  }}
                  key={text}
                  className={`${
                    view === text && "text-sky-700 text-sm"
                  } hover:text-gray-400 w-full cursor-pointer`}
                >
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>

        <p className="my-3 first-letter:uppercase">{view}</p>

        <p className="my-3 text-sm">Font Style</p>

        {view === "pronoun" && (
          <div className="">
            <div className="bg-zinc-800 w-full rounded p-2">
              {fonts.map((font) => (
                <p
                  key={font.name}
                  onClick={() =>
                    handleFontStyle(font.style, font.name, view as keyof State)
                  }
                  className={`${font.style} hover:gray-300 hover:text-teal-400
            cursor-pointer  pb-2 ${
              pronoun.font === font.style ? "text-teal-400" : "text-white"
            }`}
                >
                  {font.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Texts;
