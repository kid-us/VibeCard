import { defaultLayout, centeredLayout } from "../assets";

interface Layouts {
  id: number;
  name: string;
  img: string;
}

export const layout: Layouts[] = [
  { id: 1, name: "default", img: defaultLayout },
  { id: 1, name: "centered", img: centeredLayout },
  { id: 1, name: "right", img: defaultLayout },
];
