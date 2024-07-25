import { create } from "zustand";

interface Card {
  text: string;
  bgColor: string;
  image: File | null;
  textSize: string;
  textAlignment: string;
  fontStyle: string;
  imageSize: string;
}

type State = {
  front: Card;
  back: Card;
  productId: number | string;
};

type Actions = {
  updateFront: (card: Partial<Card>) => void;
  updateBack: (card: Partial<Card>) => void;
  setProductId: (id: number | string) => void;
};

// Create the Zustand store
const useProduct = create<State & Actions>((set) => ({
  front: {
    text: "",
    textAlignment: "text-center",
    textSize: "text-4xl",
    image: null,
    bgColor: "",
    fontStyle: "syne",
    imageSize: "40",
  },
  back: {
    text: "",
    textAlignment: "text-center",
    textSize: "text-4xl",
    image: null,
    bgColor: "",
    fontStyle: "syne",
    imageSize: "40",
  },
  productId: 0,

  updateFront: (card) =>
    set((state) => ({
      front: { ...state.front, ...card },
    })),

  updateBack: (card) =>
    set((state) => ({
      back: { ...state.back, ...card },
    })),

  setProductId: (id) => set({ productId: id }),
}));

export default useProduct;
