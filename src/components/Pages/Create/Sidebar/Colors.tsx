import BackgroundColor from "./BackgroundColor";
import TextColor from "./TextColor";
// Zustand store
import { useTextColorStore } from "../../../../store/useTextColorStore";
import { useCardColorStore } from "../../../../store/useCardColorStore";
import { useCoverColorStore } from "../../../../store/useCoverColorStore";
import { useState } from "react";

const texts = [
  "Pronoun",
  "Name",
  "Location",
  "Website",
  "Icons",
  "Job Title",
  "Tag Line",
];

const Colors = () => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("Pronoun");

  const { company, jobTitle, location, name, pronoun, tagLine, icon } =
    useTextColorStore();

  const { cardColorBg } = useCardColorStore();
  const { coverColorBg } = useCoverColorStore();
  return (
    <>
      <p className="text-sm text-gray-300 mb-4">Card Background Color</p>
      <BackgroundColor
        bgColors={cardColorBg}
        cardType="card"
        colorPicker={false}
      />

      {/* Cover Background */}
      <p className="text-xs text-gray-300 mb-2">Cover Background Color</p>
      <BackgroundColor bgColors={coverColorBg} cardType="cover" colorPicker />

      {/* Text Colors */}
      <div className="relative text-sm mb-4 border-teal-500 shadow shadow-stone-300 rounded">
        <p className="px-2 py-2 text-gray-50">Choose Text</p>
        <p
          onClick={() => setDropdown(!dropdown)}
          className={`${
            dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
          } absolute top-2 right-3 cursor-pointer`}
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
                } hover:text-gray-400 w-full cursor-pointer`}
              >
                {text}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Pronoun */}
      {view === "Pronoun" && (
        <TextColor name={"pronoun"} bg={pronoun.color} title={"Pronoun"} />
      )}
      {/* Name */}
      {view === "Name" && (
        <TextColor name={"name"} bg={name.color} title={"Name"} />
      )}
      {/* Job Title */}
      {view === "Job Title" && (
        <TextColor name={"jobTitle"} bg={jobTitle.color} title={"Job Title"} />
      )}
      {/* Location */}
      {view === "Location" && (
        <TextColor name={"location"} bg={location.color} title={"Location"} />
      )}
      {/* Company */}
      {view === "Company" && (
        <TextColor name={"company"} bg={company.color} title={"Company"} />
      )}
      {/* Tag Title */}
      {view === "Tag Line" && (
        <TextColor name={"tagLine"} bg={tagLine.color} title={"Tag Line"} />
      )}
      {/* Icons */}
      {view === "Icons" && (
        <TextColor name={"icon"} bg={icon.color} title={"Icons"} />
      )}
    </>
  );
};

export default Colors;
