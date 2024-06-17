import { create } from "zustand";

type State = {
  companyLogo: boolean;
};

type Action = {
  updateCoverLogo: (compnayLogo: boolean) => void;
};

// Create the Zustand store
export const useContentStore = create<State & Action>((set) => ({
  companyLogo: false,
  updateCoverLogo: (companyLogo: boolean) => set(() => ({ companyLogo })),
}));
