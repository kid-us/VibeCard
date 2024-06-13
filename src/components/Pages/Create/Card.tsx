import { user } from "../../../assets";

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
    <div className="px-20 mt-14">
      <div className="rounded-md shadow w-full h-96 overflow-hidden bg-stone-900">
        <div className="bg-sky-200 h-20 relative flex justify-between p-4">
          <div className="absolute top-8 w-20 h-20 border-[7px] rounded-full border-white">
            <img src={user} alt="user" />
          </div>
          <div className="content-center">
            <p className="absolute right-0 font-poppins text-lg me-10">
              {name && name}
            </p>
          </div>
        </div>
      </div>
      <p>{pronoun && pronoun}</p>

      <p>{name && name}</p>
      <p>{email && email}</p>
      <p>{phone && phone}</p>
      <p>{website && website}</p>
      <p>{company && company}</p>
      <p>{tagLine && tagLine}</p>
      <p>{jobTitle && jobTitle}</p>
      <p>{location && location}</p>
    </div>
  );
};

export default Card;
