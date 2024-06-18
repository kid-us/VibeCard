import { create } from "zustand";

type State = {
  layout: string;
};

type Action = {
  updateLayout: (layout: string) => void;
};

export const useLayoutStore = create<State & Action>((set) => ({
  layout: "default",
  updateLayout: (layout) => set(() => ({ layout })),
}));
