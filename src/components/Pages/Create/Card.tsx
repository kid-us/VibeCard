import { Link } from "react-router-dom";
import { qrCode, user } from "../../../assets";
import { useCoverColorStore } from "../../../store/useCoverColorStore";
import { useCardColorStore } from "../../../store/useCardColorStore";
import { useTextColorStore } from "../../../store/useTextColorStore";

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

const Card = ({
  companyVal,
  emailVal,
  jobTitleVal,
  locationVal,
  nameVal,
  phoneVal,
  tagLineVal,
  websiteVal,
  pronounVal,
  preview,
}: Props) => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const { company, jobTitle, location, name, pronoun, tagLine, icon } =
    useTextColorStore();

  return (
    <div className="px-20 mt-14">
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
          <div className="absolute top-10 w-20 h-20 border-[4px] rounded-full border-white overflow-hidden">
            <img
              src={preview?.profile ? preview.profile : user}
              alt="user"
              className=""
            />
          </div>
          <div className="content-center">
            <p
              className={`absolute right-0 font-poppins me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap`}
              style={{ color: name.color }}
            >
              <span className={`text-xs`} style={{ color: pronoun.color }}>
                {pronounVal && "(" + pronounVal + ")"}{" "}
              </span>

              {nameVal && nameVal}
            </p>
          </div>
        </div>
        <div className="px-5 mt-10 text-white text-sm">
          <div className="relative">
            {/* {cover && ( */}
            <img
              src={preview?.logo ? preview.logo : qrCode}
              alt="Cover"
              className="absolute right-0 -top-2 w-14 h-14 rounded-full border-2 bg-white"
            />
            {/* )} */}

            <p
              className={`font-poppins mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
                !jobTitleVal && "invisible"
              } `}
              style={{ color: jobTitle.color }}
            >
              {jobTitleVal && jobTitleVal}
            </p>

            <p
              className={`${!companyVal && "invisible"} text-xs`}
              style={{ color: company.color }}
            >
              {companyVal && "At " + companyVal}
            </p>
            <p
              className={`text-xs mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
                !tagLineVal && "invisible"
              }`}
              style={{ color: tagLine.color }}
            >
              <span className="bi-info"></span>
              {tagLineVal && tagLineVal}
            </p>
            <p
              className={`my-2 ${!locationVal && "invisible"}`}
              style={{ color: location.color }}
            >
              <span
                className="bi-geo-alt-fill me-2 text-xs"
                style={{ color: location.color }}
              ></span>
              {locationVal && locationVal}
            </p>
          </div>

          {/* Icons */}
          <div
            className={`grid grid-cols-3 gap-5 my-8 ${
              !phoneVal && !emailVal && !websiteVal && "invisible"
            }`}
            style={{ color: icon.color }}
          >
            {emailVal && (
              <Link
                to={emailVal}
                className="bi-envelope-fill text-center text-2xl"
              ></Link>
            )}
            {phoneVal && (
              <div className={`bi-telephone-fill text-center text-2xl`}></div>
            )}
            {websiteVal && (
              <Link
                to={websiteVal}
                className="bi-globe text-center text-2xl"
              ></Link>
            )}
          </div>
          {/* Social Media */}
          <div className="grid grid-cols-3 gap-5 mt-5 mb-5">
            <Link
              to="/"
              className="bi-twitter text-3xl text-center bg-sky-400 rounded-lg py-3 shadow-inner"
            ></Link>
            <Link
              to="/"
              className="bi-instagram text-3xl text-center bg-red-500 rounded-lg py-3"
            ></Link>
            <Link
              to="/"
              className="bi-github text-3xl text-center bg-zinc-600 rounded-lg py-3"
            ></Link>
          </div>
          <button className="w-full bg-teal-500 rounded-lg py-4 mb-9 mt-5 shadow-md text-black font-poppins font-extrabold shadow-zinc-50">
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
