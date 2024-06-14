import { create } from "zustand";

// Define the Props interface
interface Props {
  font: string;
  color: string;
}

// Define the State type
type State = {
  pronouns: Props;
  name: Props;
  tagLine: Props;
  jobTitle: Props;
  company: Props;
  location: Props;
};

// Define the Action type
type Action = {
  updateFont: (key: keyof State, font: string) => void;
  updateColor: (key: keyof State, color: string) => void;
};

// Create the Zustand store
const useTextColorStore = create<State & Action>((set) => ({
  pronouns: { font: "", color: "" },
  name: { font: "", color: "" },
  tagLine: { font: "", color: "" },
  jobTitle: { font: "", color: "" },
  company: { font: "", color: "" },
  location: { font: "", color: "" },

  updateFont: (key: keyof State, font: string) =>
    set((state) => ({
      [key]: { ...state[key], font },
    })),

  updateColor: (key: keyof State, color: string) =>
    set((state) => ({
      [key]: { ...state[key], color },
    })),
}));

export default useTextColorStore;
