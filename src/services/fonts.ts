interface Fonts {
  style: string;
  name: string;
}

interface Size {
  size: string;
  name: string;
}

// Font Styles
export const fonts: Fonts[] = [
  {
    style: "font-poppins",
    name: "Poppins",
  },
  {
    style: "pompiere",
    name: "Pompiere",
  },
  {
    style: "font-monospace",
    name: "Monospace",
  },
  {
    style: "syne",
    name: "Syne",
  },
  {
    style: "caveat",
    name: "Caveat",
  },
  {
    style: "metamorphous",
    name: "Metamorphous",
  },
  {
    style: "chakra",
    name: "Chakra",
  },
  {
    style: "playwrite",
    name: "Playwrite",
  },
  {
    style: "ubuntu",
    name: "Ubuntu",
  },
  {
    style: "roboto",
    name: "Roboto",
  },
];

// Font Size
export const fontSize: Size[] = [
  { size: "text-xl", name: "Extra Large" },
  { size: "text-lg", name: "Large" },
  { size: "text-md", name: "Medium" },
  { size: "text-sm", name: "Small" },
  { size: "text-xs", name: "Extra Small" },
];
