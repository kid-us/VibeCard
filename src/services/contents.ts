export interface SocialMediaContent {
  id: number;
  icon: string;
  label: string;
  color: string;
}

export const socialMedias: SocialMediaContent[] = [
  { id: 1, icon: "bi-linkedin", label: "LinkedIn", color: "#0284c7" },
  { id: 2, icon: "bi-twitter", label: "Twitter (X)", color: "#22d3ee" },
  { id: 3, icon: "bi-github", label: "Github", color: "#3f3f46" },
  { id: 4, icon: "bi-tiktok", label: "Tik Tok", color: "#000000" },
  { id: 5, icon: "bi-youtube", label: "YouTube", color: "#b91c1c" },
  { id: 6, icon: "bi-snapchat", label: "Snapchat", color: "#eab308" },
  { id: 7, icon: "bi-instagram", label: "Instagram", color: "#ef4444" },
  { id: 8, icon: "bi-facebook", label: "Facebook", color: "#1d4ed8" },
];

export const contactContents: SocialMediaContent[] = [
  // { id: 9, icon: "bi-geo-alt", label: "Address", color: "#028487" },
  { id: 10, icon: "bi-telegram", label: "Telegram", color: "#06b6d4" },
  { id: 11, icon: "bi-whatsapp", label: "Whatsapp", color: "#22c55e" },
  { id: 12, icon: "bi-globe", label: "Website", color: "#08326e" },
];
