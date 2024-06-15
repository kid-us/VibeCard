import { create } from "zustand";

// Define the Props interface
interface Props {
  font: string;
  color: string;
  size: string;
}

// Define the State type
export type State = {
  pronoun: Props;
  name: Props;
  tagLine: Props;
  jobTitle: Props;
  company: Props;
  location: Props;
  icon: Props;
};

// Define the Action type
type Action = {
  updateFont: (key: keyof State, font: string) => void;
  updateColor: (key: keyof State, color: string) => void;
  updateSize: (key: keyof State, size: string) => void;
};

// Create the Zustand store
export const useTextColorStore = create<State & Action>((set) => ({
  pronoun: { font: "font-monospace", color: "#9ca3af", size: "" },
  name: { font: "font-poppins", color: "#ffffff", size: "" },
  tagLine: { font: "pompiere", color: "#9ca3af", size: "" },
  jobTitle: { font: "chakra", color: "#2dd4bf", size: "" },
  company: { font: "chakra", color: "#9ca3af", size: "" },
  location: { font: "chakra", color: "#9ca3af", size: "" },
  icon: { font: "", color: "#ffffff", size: "" },

  updateFont: (key: keyof State, font: string) =>
    set((state) => ({
      [key]: { ...state[key], font },
    })),

  updateColor: (key: keyof State, color: string) =>
    set((state) => ({
      [key]: { ...state[key], color },
    })),

  updateSize: (key: keyof State, size: string) =>
    set((state) => ({
      [key]: { ...state[key], size },
    })),
}));
