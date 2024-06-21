import { create } from "zustand";

type State = {
  username: string | null;
  email: string | null;
  type: string | null;
};

type Action = {
  updateUsername: (username: string) => void;
  updateEmail: (email: string) => void;
  updateType: (type: string) => void;
};

export const useUserData = create<State & Action>((set) => ({
  username: null,
  email: null,
  type: null,
  updateUsername: (username) => set(() => ({ username })),
  updateEmail: (email) => set(() => ({ email })),
  updateType: (type) => set(() => ({ type })),
}));
