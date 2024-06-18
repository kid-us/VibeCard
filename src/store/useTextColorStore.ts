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
  button: Props;
};

// Define the Action type
type Action = {
  updateFont: (key: keyof State, font: string) => void;
  updateColor: (key: keyof State, color: string) => void;
  updateSize: (key: keyof State, size: string) => void;
};

// Create the Zustand store
export const useTextColorStore = create<State & Action>((set) => ({
  pronoun: { font: "font-monospace", color: "#9ca3af", size: "text-xs" },
  name: { font: "font-poppins", color: "#ffffff", size: "text-md" },
  tagLine: { font: "pompiere", color: "#9ca3af", size: "text-xs" },
  jobTitle: { font: "chakra", color: "#2dd4bf", size: "text-sm" },
  company: { font: "chakra", color: "#9ca3af", size: "text-xs" },
  location: { font: "chakra", color: "#9ca3af", size: "text-sm" },
  button: { font: "", color: "#14b8a6", size: "" },

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
