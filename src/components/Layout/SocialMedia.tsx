import { Link } from "react-router-dom";
import { useContentStore } from "../../store/useContentStore";

const SocialMedia = () => {
  const { socialMedia } = useContentStore();

  return (
    <div
      className={`lg:mb-0 mb-5 ${
        socialMedia.length > 0
          ? `grid ${
              socialMedia.length <= 3 ? "grid-cols-3" : "grid-cols-4"
            }  gap-x-3 gap-y-2`
          : "invisible"
      }`}
    >
      {socialMedia.map((media) => (
        <Link
          key={media.icon}
          to={`${media.link}`}
          className={`${media.icon} text-3xl text-center rounded-md py-2 shadow-inner`}
          style={{ backgroundColor: media.color }}
        ></Link>
      ))}
    </div>
  );
};

export default SocialMedia;
