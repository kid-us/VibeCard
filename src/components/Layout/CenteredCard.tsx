import { qrCode, userPic } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";
import Button from "./Button";
import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";
import { useCardData } from "../../store/useCardData";

const CenteredCard = () => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const {
    companyVal,
    jobTitleVal,
    tagLineVal,
    locationVal,
    nameVal,
    preview,
    pronounVal,
  } = useCardData();
  const { company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();
  const { socialMedia, contact } = useContentStore();

  return (
    <div
      className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14`}
      style={{ backgroundColor: cardColorBg }}
    >
      <div
        className={`lg:h-24 h-32 relative flex justify-between ${
          !preview?.cover
            ? coverColorBg === "gradient-cover" && coverColorBg
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

        <div className="absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
          <img src={preview?.profile ? preview.profile : userPic} alt="user" />
        </div>
        {preview.logo && (
          <img
            src={preview?.logo ? preview.logo : qrCode}
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
        {contact.length > 0 && <Contacts />}

        {/* Social Media */}
        {socialMedia.length > 0 && <SocialMedia />}

        {/* Button */}
        <Button />
      </div>
    </div>
  );
};

export default CenteredCard;
