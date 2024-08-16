export interface SocialMediaContent {
  id: number;
  icon: string;
  label: string;
  color: string;
  path: string;
  placeholder: string;
}

export const socialMedias: SocialMediaContent[] = [
  {
    id: 1,
    icon: "bi-linkedin",
    label: "LinkedIn",
    color: "#0284c7",
    path: "https://www.linkedin.com/in/",
    placeholder: "Username",
  },
  {
    id: 2,
    icon: "bi-twitter",
    label: "Twitter (X)",
    color: "#22d3ee",
    path: "https://x.com/",
    placeholder: "Username",
  },
  {
    id: 3,
    icon: "bi-github",
    label: "Github",
    color: "#3f3f46",
    path: "https://github.com/",
    placeholder: "Username",
  },
  {
    id: 4,
    icon: "bi-tiktok",
    label: "Tik Tok",
    color: "#000000",
    path: "https://www.tiktok.com/@",
    placeholder: "Username",
  },
  {
    id: 5,
    icon: "bi-youtube",
    label: "YouTube",
    color: "#b91c1c",
    path: "https://www.linkedin.com/in/",
    placeholder: "Username / Channel Name",
  },
  {
    id: 6,
    icon: "bi-snapchat",
    label: "Snapchat",
    color: "#eab308",
    path: "https://www.snapchat.com/add/",
    placeholder: "Username",
  },
  {
    id: 7,
    icon: "bi-instagram",
    label: "Instagram",
    color: "#ef4444",
    path: "https://www.instagram.com/",
    placeholder: "Username",
  },
  {
    id: 8,
    icon: "bi-facebook",
    label: "Facebook",
    color: "#1d4ed8",
    path: "https://www.facebook.com/",
    placeholder: "Username",
  },
  {
    id: 9,
    icon: "bi-spotify",
    label: "Spotify",
    color: "#16a34a",
    path: "https://open.spotify.com/user/",
    placeholder: "Username",
  },
  {
    id: 10,
    icon: "deezer",
    label: "Deezer",
    color: "#111111",
    path: "https://www.deezer.com/user/",
    placeholder: "Username",
  },
  {
    id: 11,
    icon: "bi-google",
    label: "Goggle Review",
    color: "#525252",
    path: "",
    placeholder: "Link",
  },
  {
    id: 12,
    icon: "trustpilot",
    label: "Trust Pilot",
    color: "#14532d",
    path: "",
    placeholder: "Link",
  },
];

export const contactContents: SocialMediaContent[] = [
  {
    id: 14,
    icon: "bi-telegram",
    label: "Telegram",
    color: "#06b6d4",
    path: "https://t.me/",
    placeholder: "Username",
  },
  {
    id: 15,
    icon: "bi-whatsapp",
    label: "Whatsapp",
    color: "#22c55e",
    path: "https://wa.me/",
    placeholder: "Phone Number",
  },
  {
    id: 16,
    icon: "bi-globe",
    label: "Website",
    color: "#08326e",
    path: "",
    placeholder: "Address",
  },
];
