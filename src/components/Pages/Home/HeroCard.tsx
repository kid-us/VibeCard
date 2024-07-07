import { Link } from "react-router-dom";
import { ceo, logo } from "../../../assets";
// import { bgColors } from "./Products";
import { useState } from "react";

const socials = [
  { id: 1, icon: "bi-instagram", bg: "bg-red-500" },
  { id: 2, icon: "bi-facebook", bg: "bg-blue-500" },
  { id: 4, icon: "bi-github", bg: "bg-zinc-700" },
  { id: 5, icon: "bi-tiktok", bg: "bg-black" },
  { id: 3, icon: "bi-linkedin", bg: "bg-sky-700" },
  { id: 6, icon: "bi-snapchat", bg: "bg-yellow-500" },
  { id: 7, icon: "bi-twitter", bg: "bg-cyan-600" },
  { id: 8, icon: "bi-youtube", bg: "bg-red-700" },
];

const bgCover = [
  { style: "bg-gray-500", textColor: "text-black" },
  { style: "bg-lime-500", textColor: "text-black" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-fuchsia-700", textColor: "text-black" },
];

const bgColors = [
  { style: "bg-teal-900", textColor: "text-white" },
  { style: "bg-black", textColor: "text-white" },
  { style: "bg-sky-900", textColor: "text-white" },
  { style: "bg-zinc-900", textColor: "text-white" },
  { style: "bg-rose-900", textColor: "text-white" },
  { style: "bg-white", textColor: "text-black" },
];

const HeroCard = () => {
  const [coverBg, setCoverBg] = useState("bg-amber-500");
  const [cardBg, setCardBg] = useState({
    bg: "bg-zinc-900",
    color: "text-white",
  });

  return (
    <>
      <div className="lg:grid grid-cols-3 lg:my-32 my-24 px-3">
        <div className="relative lg:block hidden">
          <p className="absolute w-44 border border-teal-500 -right-10 top-8"></p>
          <div className="absolute right-32 top-0 bg-white w-52 rounded py-3 px-3">
            <div>
              {bgCover.map((bg) => (
                <button
                  onClick={() => setCoverBg(bg.style)}
                  key={bg.style}
                  className={`${bg.style} w-6 h-6 border border-black me-3 rounded`}
                  // style={{ background: bg.value }}
                ></button>
              ))}
            </div>
          </div>
          <p className="absolute w-64 border border-teal-500 -right-10 bottom-40"></p>
          <div className="absolute right-52 bottom-32 bg-white w-60 rounded py-3 px-3">
            <div>
              {bgColors.map((bg) => (
                <button
                  onClick={() =>
                    setCardBg({ bg: bg.style, color: bg.textColor })
                  }
                  key={bg.style}
                  className={`${bg.style} w-6 h-6 border border-black me-3 rounded`}
                  style={{ background: bg.style }}
                ></button>
              ))}
            </div>
          </div>
        </div>
        {/* Card */}
        <div>
          {/* Cover Bg */}
          <div className="ms-2 mb-3 flex lg:hidden justify-center">
            {bgCover.map((bg) => (
              <button
                onClick={() => setCoverBg(bg.style)}
                key={bg.style}
                className={`${bg.style} w-6 h-6 border border-white me-3 rounded`}
              ></button>
            ))}
          </div>
          {/* Card */}
          <div className="flex justify-center">
            <div
              className={`rounded-2xl overflow-hidden shadow-md lg:shadow-black shadow-gray-400 z-0 lg:mb-0 lg:h-[70vh] w-80 secondary-bg lg:pb-0 pb-10 ${cardBg.bg}`}
            >
              <div
                className={`lg:h-28 h-32 w-full relative flex justify-between z-0 ${coverBg}`}
              >
                <div className="absolute lg:top-16 left-2 top-16">
                  <img
                    src={ceo}
                    alt="user"
                    className="lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-gradient object-cover"
                  />
                </div>
                <p className="text-xs logo-font ps-3 pt-1">vibecard</p>

                {/* Pronoun and Name */}
                <div className="content-center">
                  <p
                    className={`absolute right-0 me-1 w-48 text-center text-xl ${cardBg.color} chakra`}
                  >
                    <span className="">Mr </span>
                    Omar
                  </p>
                </div>
              </div>
              <div className="px-5 mt-10 text-white">
                <div className="relative">
                  <img
                    src={logo}
                    alt="Cover"
                    className="absolute right-0 -top-6 w-14 h-14 rounded-full border-gradient bg-white object-cover"
                  />
                  {/* Job Title */}
                  <p className={`mb-1 lg:mt-0 mt-4 text-xl ${cardBg.color}`}>
                    CEO
                  </p>
                  {/* Company */}
                  <p className={`text-lg ${cardBg.color}`}>vibecard</p>
                  {/* Tag Line */}
                  <p className={`mt-3 text-xs ${cardBg.color}`}>
                    YourPersonalized Networking Companion
                  </p>

                  {/* Location */}
                  <p className={`my-2 text-md ${cardBg.color}`}>
                    <span
                      className={`bi-geo-alt-fill me-2 ${cardBg.color}`}
                    ></span>
                    Germany
                  </p>
                </div>

                {/* Contacts */}
                <div className={`flex gap-4 justify-center lg:my-6 my-5`}>
                  <Link
                    to={`/`}
                    className={`bi-envelope-fill text-4xl text-center rounded-lg py-2 shadow-inner text-zinc-400`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-globe text-4xl text-center rounded-lg py-2 shadow-inner text-violet-700`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-telephone-fill text-4xl text-center rounded-lg py-2 shadow-inner text-yellow-400`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-telegram text-4xl text-center rounded-lg py-2 shadow-inner text-cyan-400`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-whatsapp text-4xl text-center rounded-lg py-2 shadow-inner text-green-500`}
                  ></Link>
                </div>

                {/* Social Media */}
                <div className="grid grid-cols-4 gap-3 justify-center">
                  {socials.map((s) => (
                    <div
                      key={s.id}
                      className={`${s.bg} text-center p-2 rounded-lg shadow shadow-zinc-900`}
                    >
                      <Link
                        to={`/`}
                        className={`${s.icon} text-3xl text-center rounded-lg py-2`}
                      ></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Card Bg */}
          <div className="flex lg:hidden justify-center mt-5 mb-14">
            {bgColors.map((bg) => (
              <button
                onClick={() => setCardBg({ bg: bg.style, color: bg.textColor })}
                key={bg.style}
                className={`${bg.style} w-6 h-6 border border-white me-3 rounded`}
                style={{ background: bg.style }}
              ></button>
            ))}
          </div>
        </div>
        {/* Note */}
        <div className="lg:text-start text-center mt-16">
          <h1 className="bi-hand-index-fill text-4xl text-teal-500 mb-3 mt-10"></h1>
          <h1 className="font-extrabold text-white text-3xl mb-5">
            Transform Your Connections with a Tap
          </h1>
          <div className="relative lg:block hidden lg:-top-32 -top-40">
            <div className="absolute lg:right-[15em] w-full right-36 top-40 bulb"></div>
          </div>
          <p className="text-white lg:text-xl text-start ">
            Discover VibeCard, your ultimate tool for seamless networking. Our
            innovative NFC business cards and RFID solutions revolutionize the
            way you share your professional and personal information. Say
            goodbye to traditional business cards and embrace a sustainable,
            smart networking experience that leaves a lasting impression.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
