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
