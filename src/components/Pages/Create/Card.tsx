import { Link } from "react-router-dom";
import { qrCode, user } from "../../../assets";

interface Preview {
  profile: string | null;
  cover: string | null;
  logo: string | null;
}

interface Props {
  pronoun?: string;
  email?: string;
  phone?: string;
  website?: string;
  tagLine?: string;
  jobTitle?: string;
  company?: string;
  name?: string;
  location?: string;
  preview?: Preview;
}

const Card = ({
  company,
  email,
  jobTitle,
  location,
  name,
  phone,
  tagLine,
  website,
  pronoun,
  preview,
}: Props) => {
  return (
    <div className="px-20 mt-14">
      <div className="rounded-2xl w-full overflow-hidden bg-stone-900 shadow-lg shadow-zinc-800">
        <div
          className={`h-24 relative flex justify-between p-2 ${
            !preview?.cover ? "gradient-cover" : ""
          }`}
          style={{
            backgroundImage:
              preview?.cover && preview?.cover
                ? `url("${preview.cover}")`
                : undefined,
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
            <p className="absolute right-0 font-poppins me-1 text-white w-48 text-center overflow-hidden text-ellipsis text-nowrap">
              <span className="text-gray-300 text-xs">
                {pronoun && "(" + pronoun + ")"}{" "}
              </span>

              {name && name}
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
              className={`text-teal-400 font-poppins mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
                !jobTitle && "invisible"
              } `}
            >
              {jobTitle && jobTitle}
            </p>

            <p className={`text-gray-400 ${!company && "invisible"} text-xs`}>
              {company && "At " + company}
            </p>
            <p
              className={`text-xs text-gray-400 mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
                !tagLine && "invisible"
              }`}
            >
              <span className="bi-info"></span>
              {tagLine && tagLine}
            </p>
            <p className={`my-2 ${!location && "invisible"} text-gray-400`}>
              <span className="bi-geo-alt-fill me-2 text-xs text-blue-600"></span>
              {location && location}
            </p>
          </div>

          <div
            className={`grid grid-cols-3 gap-5 my-8 ${
              !phone && !email && website && "invisible"
            }`}
          >
            {email && (
              <Link
                to={email}
                className="bi-envelope-fill text-center text-2xl"
              ></Link>
            )}
            {phone && (
              <div className={`bi-telephone-fill text-center text-2xl`}></div>
            )}
            {website && (
              <Link
                to={website}
                className="bi-globe text-center text-2xl"
              ></Link>
            )}
          </div>

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
