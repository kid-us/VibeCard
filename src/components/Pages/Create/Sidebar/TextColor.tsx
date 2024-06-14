import { textColor } from "../../../../services/coverColor";
import { useTextColorStore } from "../../../../store/useTextColorStore";

type State = {
  pronoun: Props;
  name: Props;
  tagLine: Props;
  jobTitle: Props;
  company: Props;
  location: Props;
  icon: Props;
};

interface Props {
  bg: string;
  name: keyof State;
  title: string;
}

const TextColor = ({ bg, name, title }: Props) => {
  const { updateColor } = useTextColorStore();

  return (
    <>
      <p className="text-xs text-gray-300 mb-2 ms-5">{title} color</p>
      <div className="bg-white rounded p-2 mb-5">
        <p className="text-xs mt-2">Default</p>
        <div
          className={`w-full h-10 rounded-lg my-2 shadow shadow-zinc-900`}
          style={{ backgroundColor: bg }}
        ></div>
        <p className="text-xs mt-3">Choose Colors</p>
        <div className="grid grid-cols-6 gap-3 overflow-hidden py-5">
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
