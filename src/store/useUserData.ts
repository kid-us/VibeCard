// import { create } from "zustand";

// type State = {
//   username: string | null;
//   email: string | null;
//   type: string | null;
// };

// type Action = {
//   updateUsername: (username: string) => void;
//   updateEmail: (email: string) => void;
//   updateType: (type: string) => void;
//   logout: () => void;
// };

// export const useUserData = create<State & Action>((set) => ({
//   username: null,
//   email: null,
//   type: null,
//   updateUsername: (username) => set(() => ({ username })),
//   updateEmail: (email) => set(() => ({ email })),
//   updateType: (type) => set(() => ({ type })),
//   logout: () => set(() => ({ username: null, email: null, type: null })),
// }));

import create from "zustand";

interface AuthState {
  user: string | null;
  email: string | null;
  isAuthenticated: boolean;
  login: (user: string, email: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  email: null,
  isAuthenticated: false,

  login: (user, email) => set({ user, email, isAuthenticated: true }),
  logout: () => set({ user: null, email: null, isAuthenticated: false }),
}));

export default useAuthStore;
