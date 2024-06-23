import create from "zustand";

export interface PreviewProps {
  profile: string | null;
  cover: string | null;
  logo: string | null;
}

interface State {
  pronoun: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  tagLine: string | null;
  jobTitle: string | null;
  location: string | null;
  company: string | null;
  preview: PreviewProps;
}

interface Actions {
  setCardName: (name: string | null) => void;
  setCardPhone: (phone: string | null) => void;
  setCardEmail: (email: string | null) => void;
  setCardPronoun: (pronoun: string | null) => void;
  setCardJob: (jobTitle: string | null) => void;
  setCardTagLine: (tagLine: string | null) => void;
  setCardCompany: (company: string | null) => void;
  setCardLocation: (location: string | null) => void;
  setPreview: (type: keyof PreviewProps, value: string | null) => void;
}

export const useCardData = create<State & Actions>((set) => ({
  name: null,
  phone: null,
  email: null,
  tagLine: null,
  jobTitle: null,
  company: null,
  location: null,
  pronoun: null,
  preview: {
    cover: null,
    logo: null,
    profile: null,
  },

  setCardName: (name) => set({ name }),
  setCardPhone: (phone) => set({ phone }),
  setCardEmail: (email) => set({ email }),
  setCardPronoun: (pronoun) => set({ pronoun }),
  setCardJob: (jobTitle) => set({ jobTitle }),
  setCardTagLine: (tagLine) => set({ tagLine }),
  setCardCompany: (company) => set({ company }),
  setCardLocation: (location) => set({ location }),

  setPreview: (type, value) =>
    set((state) => ({
      preview: {
        ...state.preview,
        [type]: value,
      },
    })),
}));
