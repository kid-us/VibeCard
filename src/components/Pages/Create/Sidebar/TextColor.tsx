import { textColor } from "../../../../services/coverColor";
import { useTextColorStore } from "../../../../store/useTextColorStore";
import { State } from "../../../../store/useTextColorStore";

interface Props {
  bg: string;
  name: keyof State;
  title: string;
}

const TextColor = ({ bg, name, title }: Props) => {
  const { updateColor } = useTextColorStore();

  return (
    <>
      <div className="flex my-5 text-sm ms-1">
        <p className="first-letter:uppercase text-teal-400 chakra">{title}</p>
        <p className="ms-2 text-white text-xs chakra"> Color</p>
      </div>
      <div className="bg-white rounded p-2 mb-5">
        <p className="mt-2 chakra">Default</p>
        <div
          className={`w-full h-10 rounded-lg my-2 shadow shadow-zinc-900`}
          style={{ backgroundColor: bg }}
        ></div>
        <p className="mt-3 chakra text-black">Choose Colors</p>
        <div className="grid lg:grid-cols-6 grid-cols-7 gap-3 overflow-hidden py-5">
          {textColor.map((text) => (
            <button
              key={text.id}
              onClick={() => updateColor(name, text.value)}
              className={`p-3 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
              style={{ backgroundColor: text.value }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TextColor;
