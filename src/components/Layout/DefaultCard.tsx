import { qrCode, user } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import Contacts from "./Contacts";

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

const DefaultCard = ({
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
  const { company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();
  const { companyLogo, socialMedia, contact } = useContentStore();

  return (
    <div
      className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 z-0`}
      style={{ backgroundColor: cardColorBg }}
    >
      <div
        className={`h-24 relative flex justify-between p-2 z-0 ${
          !preview?.cover
            ? coverColorBg === "gradient-cover" && `${coverColorBg} z-0`
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
        <div className="absolute top-10 w-20 h-20 border-[4px] rounded-full border-white overflow-hidden z-0">
          <img src={preview?.profile ? preview.profile : user} alt="user" />
        </div>
        {/* Pronoun and Name */}
        <div className="content-center">
          <p
            className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
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
      </div>
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {companyLogo && (
            <img
              src={preview?.logo ? preview.logo : qrCode}
              alt="Cover"
              className="absolute right-0 -top-2 w-14 h-14 rounded-full border-2 bg-white"
            />
          )}
          {/* Job Title */}
          <p
            className={`${
              jobTitle.font + " " + jobTitle.size
            } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
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
            <span className="bi-info"></span>
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