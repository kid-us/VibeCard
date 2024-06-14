import BackgroundColor from "./BackgroundColor";
import TextColor from "./TextColor";
// Zustand store
import { useTextColorStore } from "../../../../store/useTextColorStore";
import { useCardColorStore } from "../../../../store/useCardColorStore";
import { useCoverColorStore } from "../../../../store/useCoverColorStore";

const Colors = () => {
  const { company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();

  const { cardColorBg } = useCardColorStore();
  const { coverColorBg } = useCoverColorStore();
  return (
    <>
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
    </>
  );
};

export default Colors;
