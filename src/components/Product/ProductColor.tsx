interface BgColor {
  style: string;
  textColor: string;
}

interface Props {
  setBg: (style: string, color: string) => void;
  defaultBg: string;
  bgColors: BgColor[];
  title?: string;
  price?: string;
}

const ProductColor = ({ defaultBg, setBg, bgColors, title, price }: Props) => {
  return (
    <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
      <div className="flex justify-between">
        <p className="text-lg text-white">{title}</p>
        <p className="text-white font-poppins">{price}</p>
      </div>
      <div className="flex justify-center gap-x-2 mt-4">
        {bgColors.map((bg) => (
          <div
            key={bg.style}
            className={`border ${
              bg.style === defaultBg ? "border-black" : ""
            } rounded-full w-7 h-7 text-center`}
          >
            <button
              onClick={() => setBg(bg.style, bg.textColor)}
              className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColor;
