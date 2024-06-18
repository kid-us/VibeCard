import { defaultLayout } from "../assets";

interface Layouts {
  id: number;
  name: string;
  img: string;
}

export const layout: Layouts[] = [
  { id: 1, name: "default", img: defaultLayout },
  { id: 1, name: "centered", img: defaultLayout },
  { id: 1, name: "right", img: defaultLayout },
];
