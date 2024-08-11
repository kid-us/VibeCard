import { Data, StyleData } from "@/services/viewCard";
import BottomContent from "./BootomContent";
import { userPic } from "@/assets";
import Watermark from "../Watermark/Watermark";

interface Props {
  data: Data;
  styles: StyleData;
}

const Center = ({ data, styles }: Props) => {
  return (
    <div
      className={`relative rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14`}
      style={{ backgroundColor: styles.cardBg.bg_color }}
    >
      <Watermark />
      <div
        className={`lg:h-24 h-32 relative flex justify-between ${
          !data?.covor_picture
            ? styles.coverBG.bg_color === "gradient-cover" &&
              `${styles.coverBG.bg_color} z-0`
            : ""
        }`}
      >
        {data.covor_picture && (
          <img
            src={data.covor_picture}
            alt="cover"
            className="w-full object-cover
"
          />
        )}

        <div className="absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
          <img
            src={data.main_picture ? data.main_picture : userPic}
            alt="user"
          />
        </div>
        {data.company_logo && (
          <img
            src={data.company_logo}
            alt="Cover"
            className="absolute top-20 right-28 w-12 h-12 rounded-full border-2 bg-white"
          />
        )}
      </div>
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {/* Name and Pronoun */}
          <div className="content-center">
            {/* Pronoun and Name */}
            <p
              className={` text-center overflow-hidden text-ellipsis text-nowrap ${
                styles.name.font_style + " " + styles.name.font_size
              } `}
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

          {/* Job Title */}
          <p
            className={`${
              styles.jobTitle.font_style + " " + styles.jobTitle.font_size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
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
            } text-center`}
            style={{ color: styles.company.font_color }}
          >
            {data.company_name && "At " + data.company_name}
          </p>
          {/* Tag Line */}
          <p
            className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
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
            } my-2 text-center ${!data.location && "invisible"}`}
            style={{ color: styles.location.font_color }}
          >
            <span
              className="bi-geo-alt-fill me-2"
              style={{ color: styles.location.font_color }}
            ></span>
            {data.location && data.location}
          </p>
        </div>

        <BottomContent styles={styles} data={data} />
      </div>
    </div>
  );
};

export default Center;
