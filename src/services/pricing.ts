interface PricingFeatures {
  id: number;
  feature: string;
}

interface Value {
  id: number;
  value: string | number;
  icon: string;
}

interface PricingDetail {
  id: number;
  title: string;
  value1: Value;
  value2: Value;
  value3: Value;
}

export const free: PricingFeatures[] = [
  {
    id: 1,
    feature: "Digital business card and QR code",
  },
  {
    id: 2,
    feature: "Basic sharing of contact information",
  },
  {
    id: 3,
    feature: "Unlimited card shares and scans",
  },
  {
    id: 4,
    feature: "24/7 Customer Support",
  },
];

export const pro: PricingFeatures[] = [
  {
    id: 1,
    feature: "Create Up To 3 digital Cards",
  },
  {
    id: 2,
    feature: "Access to All Link Types",
  },
  {
    id: 3,
    feature: "Easy profile Update ",
  },
  {
    id: 4,
    feature: "Real-time analytics and usage statistics",
  },
  { id: 5, feature: "Integration with Google and Apple Wallet" },
  { id: 6, feature: "Lead generation and follow-up tools" },
  { id: 7, feature: "Advanced Insights" },
];

export const proPlus: PricingFeatures[] = [
  {
    id: 1,
    feature: "Create up to 10 digital business cards",
  },
  {
    id: 2,
    feature: "Priority customer support",
  },
  {
    id: 3,
    feature: "Export analytics data",
  },
  {
    id: 4,
    feature: "Lifetime Insights & Analytics",
  },
  { id: 5, feature: "Multi-language support for international use" },
];

export const pricingInfo: PricingDetail[] = [
  {
    id: 1,
    title: "Number of Users",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 1 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 1 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 1 },
  },

  {
    id: 2,
    title: "Number of Digital Business Cards",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 1 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 3 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 10 },
  },

  {
    id: 3,
    title: "Sharing of contact information",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 4,
    title: "Unlimited card shares and scans",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 5,
    title: "24/7 Customer Support",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 6,
    title: "Insights & Analytics",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 7,
    title: "Integration with Google & Apple",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 8,
    title: "Profile Update",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 9,
    title: "Export analytics data",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-dash", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 10,
    title: "Multi-language support ",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-dash", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },
];
