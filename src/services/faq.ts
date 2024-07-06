interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faq: FAQ[] = [
  {
    id: 99,
    question: "Why Choose VibeCard?",
    answer:
      "Instant Impact: Make a memorable impact at every meeting with a card that carries not just your contact details but your professional brand.• Enhanced Security: Protect your information with state-of-the-art encryption and security features that come standard with our RFID wallets.• Versatile Solutions: From individual entrepreneurs to large enterprises, our products meet the needs of every professional environment.",
  },
  {
    id: 100,
    question: "What is an NFC digital business card?",
    answer:
      "An NFC digital business card is a physical card embedded with a Near Field Communication chip that allows the transfer of information to a compatible device, such as a smartphone, through close proximity (usually a few centimeters). It typically stores contact details and other professional information that can be updated anytime without needing to reprint the physical card.",
  },
  {
    id: 101,
    question: "How do NFC digital business cards work?",
    answer:
      "NFC digital business cards work by utilizing NFC technology, which involves communication between two electronic devices over a short distance. When an NFC-enabled device, like a smartphone, comes into close contact with the NFC card, it triggers a transfer of data. This can instantly import contact information or redirect to a digital portfolio, social media, or websites.",
  },
  {
    id: 102,
    question: "Are NFC business cards compatible with all smartphones?",
    answer:
      "Most modern smartphones are equipped with NFC technology and can read NFC tags without any additional apps. However, it’s important to check if the smartphone settings are enabled for NFC. Older models or certain budget smartphones might not support NFC.",
  },
  {
    id: 103,
    question: "How do you find talent?",
    answer:
      "NFC digital business cards offer several advantages over traditional cards: Eco-Friendly: Reduces the need for paper, contributing to less waste. Cost-Effective: Although there might be an initial investment, digital cards can be updated without reprinting, saving on continual costs. Convenience: Provides a quick and easy way to share a comprehensive set of contact information, including links to websites, social profiles, and portfolios.Hygienic: Minimizes physical contact, an important consideration in post-pandemic scenarios.",
  },
];

export default faq;
