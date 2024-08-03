import create from "zustand";

interface AuthState {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  earning: number | null;
  email: string | null;
  youtube: string | null;
  website: string | null;
  twitter: string | null;
  twich: string | null;
  tiktok: string | null;
  referral_code: string | null;
  linkedin: string | null;
  instagram: string | null;
  facebook: string | null;
  isAuthenticated: boolean;
  verified: boolean | null;
  login: (
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    facebook: string | null,
    verified: boolean | null,
    twich: string | null,
    instagram: string | null,
    referral_code: string | null,
    youtube: string | null,
    earning: number | null,
    linkedin: string | null,
    tiktok: string | null,
    twitter: string | null,
    website: string | null
  ) => void;
  logout: () => void;
}

const useAmbassador = create<AuthState>((set) => ({
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  facebook: null,
  verified: null,
  twich: null,
  instagram: null,
  referral_code: null,
  youtube: null,
  earning: null,
  linkedin: null,
  tiktok: null,
  twitter: null,
  website: null,
  isAuthenticated: false,

  login: (
    id,
    firstName,
    lastName,
    email,
    facebook,
    verified,
    twich,
    instagram,
    referral_code,
    youtube,
    earning,
    linkedin,
    tiktok,
    twitter,
    website
  ) =>
    set({
      id,
      firstName,
      lastName,
      email,
      facebook,
      verified,
      twich,
      instagram,
      referral_code,
      youtube,
      earning,
      linkedin,
      tiktok,
      twitter,
      website,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      facebook: null,
      verified: null,
      twich: null,
      instagram: null,
      referral_code: null,
      youtube: null,
      earning: null,
      linkedin: null,
      tiktok: null,
      twitter: null,
      website: null,
      isAuthenticated: false,
    }),
}));

export default useAmbassador;
