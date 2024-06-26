import { qrCode, user } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import Contacts from "./Contacts";
import { useCardData } from "../../store/useCardData";

const DefaultCard = () => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const { company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();
  const { socialMedia, contact } = useContentStore();
  const {
    companyVal,
    jobTitleVal,
    tagLineVal,
    locationVal,
    nameVal,
    preview,
    pronounVal,
  } = useCardData();

  return (
    <div
      className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14`}
      style={{ backgroundColor: cardColorBg }}
    >
      <div
        className={`lg:h-24 h-32 w-full relative flex justify-between z-0 ${
          !preview.cover
            ? coverColorBg === "gradient-cover" && `${coverColorBg} z-0`
            : ""
        }`}
      >
        {preview.cover && (
          <img
            src={preview.cover}
            alt="cover"
            className="w-full object-cover
            "
          />
        )}

        <div className="absolute lg:top-10 left-2 top-16 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
          <img src={preview?.profile ? preview.profile : user} alt="user" />
        </div>
        {/* Pronoun and Name */}
        <div className="content-center">
          <p
            className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
              name.font + " " + name.size
            } ${preview.cover && "glass-effect text-shadow"} `}
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
      </div>
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {preview.logo && (
            <img
              src={preview?.logo ? preview.logo : qrCode}
              alt="Cover"
              className="absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
            />
          )}
          {/* Job Title */}
          <p
            className={`${
              jobTitle.font + " " + jobTitle.size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase lg:mt-0 mt-4 ${
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
            }`}
            style={{ color: company.color }}
          >
            {companyVal && "At " + companyVal}
          </p>
          {/* Tag Line */}
          <p
            className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
              !tagLineVal && "invisible"
            } ${tagLine.font + " " + tagLine.size}`}
            style={{ color: tagLine.color }}
          >
            {tagLineVal && tagLineVal}
          </p>
          {/* Location */}
          <p
            className={`${location.font + " " + location.size} my-2 ${
              !locationVal && "invisible"
            }`}
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
        {contact.length > 0 && <Contacts />}

        {/* Social Media */}
        {socialMedia.length > 0 && <SocialMedia />}

        <Button />
      </div>
    </div>
  );
};

export default DefaultCard;
