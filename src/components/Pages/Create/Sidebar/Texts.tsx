import { useState } from "react";
import "../fonts.css";
import { useTextColorStore } from "../../../../store/useTextColorStore";
import FontStylesSize from "./FontStylesSize";

const texts = ["pronoun", "name", "location", "jobTitle", "tagLine", "company"];

const Texts = () => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("pronoun");

  const { pronoun, company, jobTitle, name, tagLine, location } =
    useTextColorStore();

  return (
    <>
      <p className="chakra text-white mb-4">Text Styles</p>

      <div className="z-50">
        <div className="relative text-sm border-teal-500 shadow shadow-stone-300 rounded">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="bg-white cursor-pointer text-black"
          >
            <p className="px-2 py-2 chakra">Choose Text </p>
            <p
              className={`${
                dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
              } absolute top-2 right-3`}
            ></p>
          </div>
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
                    view === text && "text-white text-xl"
                  } hover:text-gray-400 w-full cursor-pointer first-letter:uppercase text-sm pb-1 chakra`}
                >
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>

        {view === "pronoun" && (
          <>
            <FontStylesSize
              defaultFontStyle={pronoun.font}
              view={view}
              defaultFontSize={pronoun.size}
            />
          </>
        )}
        {view === "name" && (
          <>
            <FontStylesSize
              defaultFontStyle={name.font}
              view={view}
              defaultFontSize={name.size}
            />
          </>
        )}
        {view === "company" && (
          <>
            <FontStylesSize
              defaultFontStyle={company.font}
              view={view}
              defaultFontSize={company.size}
            />
          </>
        )}
        {view === "tagLine" && (
          <>
            <FontStylesSize
              defaultFontStyle={tagLine.font}
              view={view}
              defaultFontSize={tagLine.size}
            />
          </>
        )}
        {view === "location" && (
          <>
            <FontStylesSize
              defaultFontStyle={location.font}
              view={view}
              defaultFontSize={location.size}
            />
          </>
        )}
        {view === "jobTitle" && (
          <>
            <FontStylesSize
              defaultFontStyle={jobTitle.font}
              view={view}
              defaultFontSize={jobTitle.size}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Texts;
