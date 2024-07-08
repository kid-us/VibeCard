import BackgroundColor from "./BackgroundColor";
import TextColor from "./TextColor";
// Zustand store
import { useTextColorStore } from "../../../store/useTextColorStore";
import { useCardColorStore } from "../../../store/useCardColorStore";
import { useCoverColorStore } from "../../../store/useCoverColorStore";
import { useState } from "react";

const texts = [
  "Pronoun",
  "Name",
  "Location",
  "Job Title",
  "Company",
  "Tag Line",
];

const Colors = () => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("Pronoun");

  const { company, jobTitle, location, name, pronoun, tagLine, button } =
    useTextColorStore();

  const { cardColorBg } = useCardColorStore();
  const { coverColorBg } = useCoverColorStore();
  return (
    <>
      {/* Background */}
      <p className="chakra text-white mb-4">Card Background Color</p>
      <div className="lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-3">
        <BackgroundColor
          bgColors={cardColorBg}
          cardType="card"
          colorPicker={false}
        />

        {/* Cover Background */}
        <p className="chakra text-white mb-3">Cover Background Color</p>
        <BackgroundColor bgColors={coverColorBg} cardType="cover" colorPicker />

        {/* Button Color */}
        <p className="chakra text-white mb-3">Button Background Color</p>
        <BackgroundColor
          bgColors={button.color}
          cardType="button"
          colorPicker={false}
        />

        <p className="chakra text-white mb-3">Button Text Color</p>
        <TextColor name={"button"} bg={button.font} />
        {/* Text Colors */}
        <div className="relative text-sm mb-4 border-teal-500 shadow shadow-stone-300 rounded-lg">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer bg-white text-black rounded-lg "
          >
            <p className="px-2 py-2 chakra text-lg">Choose Text</p>
            <p
              className={`${
                dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
              } absolute top-3 right-3 text-lg`}
            ></p>
          </div>
          {dropdown && (
            <div
              className={`absolute bg-white w-full mt-1 rounded px-2 py-3 shadow-md shadow-zinc-900 space-y-1 z-10`}
            >
              {texts.map((text) => (
                <p
                  onClick={() => {
                    setView(text);
                    setDropdown(false);
                  }}
                  key={text}
                  className={`${
                    view === text && "text-teal-900 text-xl"
                  } hover:text-gray-400 w-full cursor-pointer chakra text-lg text-black`}
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
          <TextColor
            name={"jobTitle"}
            bg={jobTitle.color}
            title={"Job Title"}
          />
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
      </div>
    </>
  );
};

export default Colors;
