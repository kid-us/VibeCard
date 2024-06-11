export interface Nav {
  id: number;
  title: string;
  path: string;
  icon?: string;
}

export const nav: Nav[] = [
  {
    id: 1,
    title: "VibeCard",
    path: "/",
  },
  {
    id: 2,
    title: "Resources",
    path: "/",
  },
  { id: 3, title: "Products", path: "/" },
  {
    id: 4,
    title: "Pricing",
    path: "/",
  },
];
