interface Footer {
  id: number;
  name: string;
  path: string;
}

export const explore: Footer[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about-us" },
  { id: 5, name: "Tutorial", path: "/" },
  { id: 6, name: "Contact", path: "/" },
  { id: 3, name: "Create Card", path: "/create" },
  { id: 4, name: "Privacy Policy", path: "/privacy-policy" },
];

export const shop: Footer[] = [
  { id: 7, name: "Sho All", path: "/products" },
  { id: 71, name: "Bamboo Card", path: "/" },
  { id: 8, name: "Metal Card", path: "/" },
  { id: 9, name: "Leather  Wallets", path: "/" },
  { id: 102, name: "Synthetic  Wallets", path: "/" },
  { id: 103, name: "Basic Stands", path: "/" },
  { id: 104, name: "Advanced Stands", path: "/" },
];
