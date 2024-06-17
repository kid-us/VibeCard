import { useEffect, useState } from "react";
import {
  SocialMediaContent,
  socialMedias,
} from "../../../../services/contents";
import { useContentStore } from "../../../../store/useContentStore";

const Content = () => {
  const { socialMedia, updateSocialMedia } = useContentStore();
  const [links, setLinks] = useState([""]);

  useEffect(() => {
    if (socialMedia.length > 0) {
      const icons = socialMedia.map((item) => item.icon);
      setLinks(icons);
    }
  }, [socialMedia]);

  const [socialMediaId, setSocialMediaId] = useState<number>();
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [error, setError] = useState(false);

  const handleSocialMedia = (socialInfo: SocialMediaContent) => {
    if (socialMediaLink) {
      const iconExists = socialMedia.some(
        (media) => media.icon == socialInfo.icon
      );

      if (iconExists) {
        updateSocialMedia(
          socialMedia.map((media) =>
            media.icon == socialInfo.icon
              ? { ...media, link: socialMediaLink }
              : media
          )
        );
      } else {
        updateSocialMedia([
          ...socialMedia,
          {
            link: socialMediaLink,
            color: socialInfo.color.replace("text", "bg").toString(),
            icon: socialInfo.icon,
          },
        ]);
      }
    } else {
      setError(true);
    }
  };

  function handleDelete(iconToDelete: string) {
    const filtered = socialMedia.filter((media) => media.icon !== iconToDelete);
    const linkFilter = links.filter((link) => link !== iconToDelete);
    setLinks(linkFilter);
    updateSocialMedia(filtered);
    setSocialMediaId(0);
    setError(false);
  }

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
              className={`relative flex justify-between p-2 rounded-lg mt-3 shadow shadow-zinc-800`}
              style={{ backgroundColor: social.color.replace("text", "bg") }}
            >
              <p
                className={`${social.icon} text-xl text-white ms-3`}
                // style={{ color: social.color }}
              >
                <span className="text-xs ms-5 text-gray-200">
                  {social.label}
                </span>
              </p>

              {socialMediaId === social.id ? (
                <p
                  onClick={() => {
                    setSocialMediaId(0);
                    setError(false);
                  }}
                  className="bi-x-lg bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                ></p>
              ) : links.includes(social.icon) ? (
                <div className="flex space-x-2">
                  <p
                    onClick={() => handleDelete(social.icon)}
                    className="bi-trash bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                  ></p>
                  <p
                    onClick={() => setSocialMediaId(social.id)}
                    className="bi-pen-fill bg-green-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1"
                  ></p>
                </div>
              ) : (
                <p
                  onClick={() => setSocialMediaId(social.id)}
                  className="bi-plus-lg bg-white rounded-full w-8 h-8 px-2 cursor-pointer shadow-zinc-900 shadow-lg active:shadow-none pt-1"
                ></p>
              )}
            </div>

            {/* Link Input */}
            {social.id === socialMediaId && (
              <div className="relative bg-white animate__animated animate__fadeInDown mt-1">
                <input
                  type="text"
                  className={`bg-white w-full py-2 px-3 rounded shadow-md border border-black shadow-zinc-950 placeholder:text-sky-900 text-sm focus:outline-none ${
                    error && "border border-red-500 font-poppins font-semibold"
                  }`}
                  placeholder={
                    socialMedia.find((s) => s.icon === social.icon)?.link ||
                    "Link"
                  }
                  onChange={(e) => setSocialMediaLink(e.currentTarget.value)}
                />
                <p
                  onClick={() => {
                    handleSocialMedia(social);
                    setSocialMediaId(0);
                  }}
                  className="absolute bi-check top-0 right-0 text-xl px-3 me-1 mt-1 text-center bg-sky-800 text-white rounded cursor-pointer shadow-md shadow-zinc-900 hover:bg-sky-900"
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
