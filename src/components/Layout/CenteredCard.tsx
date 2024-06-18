import { Link } from "react-router-dom";
import { qrCode, user } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";

interface Preview {
  profile: string | null;
  cover: string | null;
  logo: string | null;
}

interface Props {
  pronounVal?: string;
  emailVal?: string;
  phoneVal?: string;
  websiteVal?: string;
  tagLineVal?: string;
  jobTitleVal?: string;
  companyVal?: string;
  nameVal?: string;
  locationVal?: string;
  preview?: Preview;
}

const CenteredCard = ({
  companyVal,
  jobTitleVal,
  locationVal,
  nameVal,
  tagLineVal,
  pronounVal,
  preview,
}: Props) => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();

  const { company, jobTitle, location, name, pronoun, tagLine, button } =
    useTextColorStore();
  const { companyLogo, socialMedia, contact } = useContentStore();

  return (
    <div
      className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800`}
      style={{ backgroundColor: cardColorBg }}
    >
      <div
        className={`h-24 relative flex justify-between p-2 ${
          !preview?.cover
            ? coverColorBg === "gradient-cover" && coverColorBg
            : ""
        }`}
        style={{
          backgroundImage:
            preview?.cover && preview?.cover
              ? `url("${preview.cover}")`
              : undefined,
          backgroundColor: coverColorBg,
        }}
      >
        <div className="absolute top-2 left-1/3 w-20 h-20 border-[4px] rounded-full border-white overflow-hidden">
          <img
            src={preview?.profile ? preview.profile : user}
            alt="user"
            className=""
          />
        </div>
        {/* Pronoun and Name */}
      </div>
      <div className="px-5 mt-3 text-white">
        <div className="relative">
          {companyLogo && (
            <img
              src={preview?.logo ? preview.logo : qrCode}
              alt="Cover"
              className="absolute -right-5 -top-12 w-14 h-14 rounded-full border-2 bg-white"
            />
          )}
          {/* Name and Pronoun */}
          <div className="content-center">
            <p
              className={` text-center overflow-hidden text-ellipsis text-nowrap ${
                name.font + " " + name.size
              } `}
              style={{ color: name.color }}
            >
              <span
                className={` ${pronoun.font + " " + pronoun.size}`}
                style={{ color: pronoun.color }}
              >
                {pronounVal && "(" + pronounVal + ")"}{" "}
              </span>

              {nameVal && nameVal}
            </p>
          </div>

          {/* Job Title */}
          <p
            className={`${
              jobTitle.font + " " + jobTitle.size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
              !jobTitleVal && "invisible"
            } `}
            style={{ color: jobTitle.color }}
          >
            {jobTitleVal && jobTitleVal}
          </p>
          {/* Company */}
          <p
            className={`${!companyVal && "invisible"} ${
              company.font + " " + company.size
            } text-center`}
            style={{ color: company.color }}
          >
            {companyVal && "At " + companyVal}
          </p>
          {/* Tag Line */}
          <p
            className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
              !tagLineVal && "invisible"
            } ${tagLine.font + " " + tagLine.size}`}
            style={{ color: tagLine.color }}
          >
            <span className="bi-info"></span>
            {tagLineVal && tagLineVal}
          </p>
          {/* Location */}
          <p
            className={`${
              location.font + " " + location.size
            } my-2 text-center ${!locationVal && "invisible"}`}
            style={{ color: location.color }}
          >
            <span
              className="bi-geo-alt-fill me-2"
              style={{ color: location.color }}
            ></span>
            {locationVal && locationVal}
          </p>
        </div>

        {/* Contacts */}
        {contact.length > 0 && (
          <>
            <div
              className={` ${
                contact.length > 0
                  ? `grid ${
                      contact.length <= 3 ? "grid-cols-3" : "grid-cols-5"
                    }  gap-5 my-5`
                  : "invisible"
              }`}
            >
              {contact.map((c) => (
                <Link
                  key={c.icon}
                  to={`${c.link}`}
                  className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                  style={{ color: c.color.replace("bg", "text") }}
                ></Link>
              ))}
            </div>
          </>
        )}

        {/* Social Media */}
        {socialMedia.length > 0 && (
          <>
            <div
              className={` ${
                socialMedia.length > 0
                  ? `grid ${
                      socialMedia.length <= 3 ? "grid-cols-3" : "grid-cols-4"
                    }  gap-5`
                  : "invisible"
              }`}
            >
              {socialMedia.map((media) => (
                <Link
                  key={media.icon}
                  to={`${media.link}`}
                  className={`${media.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                  style={{ backgroundColor: media.color }}
                ></Link>
              ))}
            </div>
          </>
        )}
        <button
          className={`w-full rounded-lg py-4 mb-9 mt-5 shadow-md text-black font-poppins font-extrabold shadow-zinc-50`}
          style={{ backgroundColor: button.color }}
        >
          Save Contact
        </button>
      </div>
    </div>
  );
};

export default CenteredCard;
