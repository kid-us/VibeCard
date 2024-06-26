import { card1, card2 } from "../assets";

interface Colors {
  id: number;
  color: string;
}

export interface Products {
  id: number;
  price: string;
  name: string;
  image: string;
  color: Colors[];
  description: string;
}

export const product: Products[] = [
  {
    id: 312,
    name: "Vibecard",
    price: "$29",
    image: card1,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 324,
    name: "Vibecard",
    price: "$29",
    image: card2,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 123,
    name: "Vibecard",
    price: "$29",
    image: card1,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 435,
    name: "Vibecard",
    price: "$29",
    image: card2,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 132,
    name: "Vibecard",
    price: "$29",
    image: card1,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 789,
    name: "Vibecard",
    price: "$29",
    image: card2,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
];

export const fetchProducts = (id: number) => {
  return product.filter((pro) => pro.id === id);
};
