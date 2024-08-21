import { Data, StyleData } from "@/services/viewCard";
import BottomContent from "./BootomContent";
import { userPic } from "@/assets";
import Watermark from "../Watermark/Watermark";

interface Props {
  data: Data;
  styles: StyleData;
  profile: string | null;
  cover: string | null;
  logo: string | null;
  capture: () => void;
}

const Default = ({ data, styles, cover, profile, logo, capture }: Props) => {
  console.log(logo);

  return (
    <div
      className={`relative rounded-2xl lg:w-full md:w-[70%] w-full mx-auto overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14`}
      style={{ backgroundColor: styles.cardBg.bg_color }}
    >
      <Watermark />
      <div
        className={`lg:h-24 h-32 relative flex justify-between z-0  ${
          !cover
            ? styles.coverBG.bg_color === "gradient-cover" &&
              `${styles.coverBG.bg_color} z-0`
            : "gradient-cover"
        }`}
        style={{
          backgroundColor: `${styles.coverBG.bg_color}`,
        }}
      >
        {cover && (
          <img
            src={cover}
            alt="cover"
            className="w-full object-cover
            "
          />
        )}
        <div className="absolute lg:top-10 top-16 left-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-50">
          <img src={profile ? profile : userPic} alt="user" />
        </div>

        {/* Pronoun and Name */}
        <div className="content-center overflow-hidden">
          <p
            className={`absolute z-20 right-0 me-1 pb-2 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
              styles.name.font_style + " " + styles.name.font_size
            } ${data.covor_picture && "glass-effect text-shadow"}`}
            style={{ color: styles.name.font_color }}
          >
            <span
              className={` ${
                styles.pronoun.font_style + " " + styles.pronoun.font_size
              }`}
              style={{ color: styles.pronoun.font_color }}
            >
              {data.pronouns && "(" + data.pronouns + ")"}{" "}
            </span>

            {data.full_name && data.full_name}
          </p>
        </div>
      </div>
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {data.company_logo && (
            <img
              src={data.company_logo}
              alt="Logo"
              className="absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
            />
          )}
          {/* Job Title */}
          <p
            className={`${
              styles.jobTitle.font_style + " " + styles.jobTitle.font_size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase pb-2 lg:mt-0 mt-4 ${
              !data.job_title && "invisible"
            } `}
            style={{ color: styles.jobTitle.font_color }}
          >
            {data.job_title && data.job_title}
          </p>
          {/* Company */}
          <p
            className={`${!data.company_name && "invisible"} ${
              styles.company.font_style + " " + styles.company.font_size
            }`}
            style={{ color: styles.company.font_color }}
          >
            {data.company_name && "At " + data.company_name}
          </p>
          {/* Tag Line */}
          <p
            className={`relative mt-3 overflow-hidden pb-2 text-ellipsis text-nowrap first-letter:uppercase ${
              !data.bio && "invisible"
            } ${styles.bio.font_style + " " + styles.bio.font_size}`}
            style={{ color: styles.bio.font_color }}
          >
            {data.bio && data.bio}
          </p>
          {/* Location */}
          <p
            className={`${
              styles.location.font_style + " " + styles.location.font_size
            } my-2`}
            style={{ color: styles.location.font_color }}
          >
            <span
              className="bi-geo-alt-fill me-2"
              style={{ color: styles.location.font_color }}
            ></span>

            {data.location && data.location}
          </p>
        </div>

        <BottomContent styles={styles} data={data} capture={capture} />
      </div>
    </div>
  );
};

export default Default;
