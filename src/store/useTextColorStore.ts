import { create } from "zustand";

// Define the Props interface
interface Props {
  font: string;
  color: string;
}

// Define the State type
type State = {
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
};

// Create the Zustand store
export const useTextColorStore = create<State & Action>((set) => ({
  pronoun: { font: "", color: "#9ca3af" },
  name: { font: "", color: "#ffffff" },
  tagLine: { font: "", color: "#9ca3af" },
  jobTitle: { font: "", color: "#2dd4bf" },
  company: { font: "", color: "#9ca3af" },
  location: { font: "", color: "#9ca3af" },
  icon: { font: "", color: "#ffffff" },

  updateFont: (key: keyof State, font: string) =>
    set((state) => ({
      [key]: { ...state[key], font },
    })),

  updateColor: (key: keyof State, color: string) =>
    set((state) => ({
      [key]: { ...state[key], color },
    })),
}));
