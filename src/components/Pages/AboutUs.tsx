import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  const [title] = useState("About Us");
  useDocumentTitle(title);
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 text-white lg:px-0 px-3">
        <h1 className="text-4xl font-extrabold">About US</h1>
        <h2 className="my-5 text-xl font-extrabold">Innovation from Start</h2>
        <p className="text-lg">
          VibeCard was founded in 2023 in Emmendingen, Germany, with the vision
          to revolutionize how people exchange professional and personal
          information. As a newly established company, we are determined to take
          a leading role in the technology sector and redefine communication in
          the professional world.
        </p>
        <h1 className="my-5 text-xl font-extrabold">
          First Steps Towards a Great Future
        </h1>
        <p className="text-lg">
          Our journey began with the realization that traditional business cards
          are often inefficient and environmentally harmful. To address this
          issue, we developed an innovative NFC-based solution that allows for
          the quick, secure, and waste-free exchange of contacts. From the
          outset, our goal has been not only to offer an alternative but to
          significantly improve upon traditional methods.
        </p>
        <h1 className="my-5 text-xl font-extrabold">Ambitious Goals</h1>
        <p className="text-lg">
          Despite the challenges associated with the startup phase of a
          technology company, our ambitions are high. We aim to quickly expand
          our presence and continuously improve our products to meet the
          evolving needs of our customers. With a strong focus on customer
          satisfaction, security, and design quality, we strive to make VibeCard
          the first choice for digital business communication.
        </p>
        <h1 className="my-5 text-xl font-extrabold">
          Sustainability and Innovation
        </h1>
        <p className="text-lg">
          Another cornerstone of our company philosophy is sustainability. Our
          NFC cards are made from recycled materials and are fully recyclable.
          This underscores our commitment to environmental responsibility and
          sets a strong example in an increasingly eco-conscious world.
        </p>
        <h1 className="my-5 text-xl font-extrabold">Shaping the Future</h1>
        <p className="text-lg">
          VibeCard is at the beginning of a promising future. We are committed
          to driving continuous innovation and using cutting-edge technologies
          to enhance connectivity worldwide. Each step forward confirms our
          vision, and we are excited about the possibilities that lie ahead.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
