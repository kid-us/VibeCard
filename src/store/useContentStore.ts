import { create } from "zustand";

interface Props {
  link: string;
  icon: string;
  color: string;
}

type State = {
  companyLogo: boolean;
  socialMedia: Props[];
  contact: Props[];
};

type Actions = {
  updateCoverLogo: (companyLogo: boolean) => void;
  updateSocialMedia: (socialMedia: Props[]) => void;
  updateContacts: (contact: Props[]) => void;
};

// Create the Zustand store
export const useContentStore = create<State & Actions>((set) => ({
  companyLogo: false,
  socialMedia: [],
  contact: [],
  updateCoverLogo: (companyLogo: boolean) => set(() => ({ companyLogo })),
  updateSocialMedia: (socialMedia: Props[]) => set(() => ({ socialMedia })),
  updateContacts: (contact: Props[]) => set(() => ({ contact })),
}));
