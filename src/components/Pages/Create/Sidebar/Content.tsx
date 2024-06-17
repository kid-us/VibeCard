import { useState } from "react";
import {
  SocialMediaContent,
  socialMedias,
} from "../../../../services/contents";
import { useContentStore } from "../../../../store/useContentStore";

const Content = () => {
  const [socialMediaId, setSocialMediaId] = useState<number>();
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [error, setError] = useState(false);

  const { socialMedia, updateSocialMedia } = useContentStore();

  const handleSocialMedia = (socialInfo: SocialMediaContent) => {
    if (socialMediaLink) {
      updateSocialMedia([
        ...socialMedia,
        {
          link: socialMediaLink,
          color: socialInfo.color.replace("text", "bg").toString(),
          icon: socialInfo.icon,
        },
      ]);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <p className="text-sm text-gray-300 mb-4">Contents</p>

      <div className="bg-white rounded p-2 mb-5">
        <p className="text-xs">Recommended</p>

        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-linkedin text-blue-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-instagram text-red-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-globe2 text-zinc-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>

        <p className="text-xs my-5">Contact</p>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-geo-alt-fill text-zinc-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>
        <div className="flex justify-between bg-indigo-50 p-2 rounded-lg mt-3 shadow shadow-zinc-800">
          <p className="bi-telegram text-cyan-500 text-xl"></p>
          <p className="bi-plus bg-white shadow shadow-zinc-900 rounded px-2 cursor-pointer active:shadow-none"></p>
        </div>

        <p className="text-xs my-5">Social Media</p>
        {socialMedias.map((social) => (
          <div key={social.id}>
            <div
              className={`relative flex justify-between p-2 bg-teal-100 rounded-lg mt-3 shadow shadow-zinc-800`}
            >
              <p className={`${social.icon + " " + social.color} text-xl`}>
                <span className="text-xs ms-5">{social.label}</span>
              </p>
              {socialMediaId === social.id ? (
                <p
                  onClick={() => {
                    setSocialMediaId(0);
                    setError(false);
                  }}
                  className="bi-x-lg bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                ></p>
              ) : (
                <p
                  onClick={() => setSocialMediaId(social.id)}
                  className="bi-plus bg-zinc-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                ></p>
              )}
            </div>
            {social.id === socialMediaId && (
              <div className="relative bg-white animate__animated animate__fadeInDown mt-2">
                <input
                  type="text"
                  className={`bg-gray-300 w-full py-2 px-3 rounded shadow shadow-zinc-900 placeholder:text-sky-900 text-sm focus:outline-none ${
                    error && "border border-red-500"
                  }`}
                  placeholder="Link"
                  onChange={(e) => setSocialMediaLink(e.currentTarget.value)}
                />
                <p
                  onClick={() => handleSocialMedia(social)}
                  className="absolute bi-check top-0 right-0 text-xl px-1 me-1 mt-1 text-center bg-sky-800 text-white rounded cursor-pointer shadow hover:bg-sky-900"
                ></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
