import { useState } from "react";
import { cardColor, coverColor } from "../../../../services/coverColor";
import { useCoverColorStore } from "../../../../store/useCoverColorStore";
import { useCardColorStore } from "../../../../store/useCardColorStore";

interface Props {
  cardType: string;
  colorPicker: boolean;
  bgColors: string;
}
const BackgroundColor = ({ colorPicker, bgColors, cardType }: Props) => {
  const [color, setColor] = useState("#000000");

  const { updateCoverColor } = useCoverColorStore();
  const { updateCardColor } = useCardColorStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);

    if (newColor !== "#000000") {
      updateCoverColor(newColor);
    }
  };

  return (
    <div className="bg-white rounded p-2 mb-5">
      <p className="text-xs mt-2">Default</p>
      <div
        className={`${
          bgColors === "gradient-cover" && bgColors
        } w-full h-20 rounded-lg my-2 shadow shadow-zinc-900`}
        style={{ backgroundColor: bgColors }}
      ></div>
      <p className="text-xs mt-2">Trend Colors</p>
      <div className="grid grid-cols-6 gap-3 overflow-hidden py-5">
        {cardType === "cover"
          ? coverColor.map((cover) => (
              <button
                key={cover.id}
                onClick={() => updateCoverColor(cover.value)}
                className={`p-3 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
                style={{ backgroundColor: cover.value }}
              ></button>
            ))
          : cardColor.map((card) => (
              <button
                key={card.id}
                onClick={() => updateCardColor(card.value)}
                className={`p-3 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
                style={{ backgroundColor: card.value }}
              ></button>
            ))}
      </div>
      {colorPicker && (
        <div className={`relative ${color}`}>
          <p className="text-xs mb-2">Pick you Color here</p>
          <input
            type="color"
            className="w-full h-14 border-none outline-none shadow shadow-orange-900"
            value={color}
            onChange={(e) => handleChange(e)}
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundColor;