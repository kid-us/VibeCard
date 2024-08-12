export interface Nav {
  id: number;
  title: string;
  path: string;
  icon?: string;
}

export const nav: Nav[] = [
  {
    id: 2,
    title: "Resources",
    path: "/",
  },
  { id: 3, title: "Buy Products", path: "/all-products" },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    title: "Features",
    path: "/features",
  },
  {
    id: 6,
    title: "Ambassador",
    path: "/ambassador",
  },
];
