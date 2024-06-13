import { Link } from "react-router-dom";
import { user } from "../../../assets";
import Magnetic from "../../GsapMagnetic/Magnetic";

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
}: Props) => {
  return (
    <Magnetic>
      <div className="px-20 mt-14">
        <div className="rounded-2xl w-full overflow-hidden bg-stone-900 shadow-lg shadow-zinc-800">
          <div className="gradient-cover h-20 relative flex justify-between p-4">
            <div className="absolute top-8 w-20 h-20 border-[7px] rounded-full border-white">
              <img src={user} alt="user" />
            </div>
            <div className="content-center">
              <p className="absolute right-0 font-poppins text-lg me-10 text-white">
                {pronoun && pronoun} {name && name}
              </p>
            </div>
          </div>
          <div className="px-5 mt-10 text-white text-sm">
            <p
              className={`text-teal-400 font-poppins mb-1 ${
                !jobTitle && "invisible"
              } `}
            >
              {jobTitle && jobTitle}
            </p>

            <p className={`text-gray-400 ${!company && "invisible"} text-xs`}>
              {company && "At " + company}
            </p>
            <p
              className={`text-xs text-gray-400 mt-3 ${
                !tagLine && "invisible"
              }`}
            >
              <span className="bi-info"></span>
              {tagLine && tagLine}
            </p>
            <p className={`my-2 ${!location && "invisible"} text-gray-400`}>
              <span className="bi-geo-alt-fill me-2 text-sm text-blue-600"></span>
              {location && location}
            </p>

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
                className="bi-twitter text-3xl text-center bg-sky-400 rounded-lg py-3"
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
    </Magnetic>
  );
};

export default Card;
