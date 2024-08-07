import { adapt, arrow, design, impression, secure, share } from "../assets";

interface HomeCard {
  image: string;
  id: number;
  title: string;
  note: string;
}

const homeCard: HomeCard[] = [
  {
    image: design,
    id: 1,
    title: "Design Your Own:",
    note: "Unleash your creativity with our customizable NFC cards. Choose your style, add your info, and make your card as unique as you are.",
  },
  {
    image: share,
    id: 2,
    title: "Effortless Sharing:",
    note: "Just tap your VibeCard against any smartphone – no app needed. It’s networking made simple and swift.",
  },
  {
    image: arrow,
    id: 3,
    title: "Sustainable Choices:",
    note: "Go green with our eco-friendly card options made from recycled materials.",
  },
  {
    image: impression,
    id: 4,
    title: "Memorable Impressions:",
    note: "Stand out at every interaction with a sleek, innovative card that captures more than just your contact details.",
  },
  {
    image: secure,
    id: 5,
    title: "Ultimate Security:",
    note: "Safeguard your information with advanced encryption—security that moves at the pace of business.",
  },
  {
    image: adapt,
    id: 6,
    title: "Adaptable for All:",
    note: "From solopreneurs to established enterprises, adapt VibeCard to fit any scale of business needs.",
  },
];

export default homeCard;
