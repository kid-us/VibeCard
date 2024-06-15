import { useState } from "react";
import { fontSize, fonts } from "../../../../services/fonts";
import { State, useTextColorStore } from "../../../../store/useTextColorStore";

interface Props {
    view: string;
    viewState: 
}

const FontStylesSize = () => {
  const [fontStyle, setFontStyle] = useState({
    style: "font-poppins",
    name: "Poppins",
  });

  const { updateFont, updateSize } = useTextColorStore();

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
      {/* Font Styles */}
      <div className="flex my-5">
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
      </div>
      {/* Font Sizes */}
      <div className="flex my-3">
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
      </div>
    </>
  );
};

export default FontStylesSize;
