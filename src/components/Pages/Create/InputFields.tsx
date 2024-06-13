interface Props {
  label: string;
  type: string;
  inputName: string;
  name?: (name: string) => void;
  emailAddress?: (email: string) => void;
  website?: (website: string) => void;
  tag?: (tag: string) => void;
  company?: (company: string) => void;
  phone?: (phone: string) => void;
  jobTitle?: (job: string) => void;
  location?: (location: string) => void;
}

const InputFields = ({
  label,
  type,
  inputName,
  name,
  location,
  website,
  emailAddress,
  tag,
  jobTitle,
  phone,
  company,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    switch (inputName) {
      case "Name":
        name && name(value);
        break;
      case "Email":
        emailAddress && emailAddress(value);
        break;
      case "Website":
        website && website(value);
        break;
      case "Tag Line":
        tag && tag(value);
        break;
      case "Company":
        company && company(value);
        break;
      case "Phone":
        phone && phone(value);
        break;
      case "Job Title":
        jobTitle && jobTitle(value);
        break;
      case "Location":
        location && location(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="mb-4">
      <label className="text-xs text-gray-600 block" htmlFor={label}>
        {inputName}
      </label>
      <input
        type={type}
        name={label}
        className={`bg-gray-100 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm px-3`}
        // onChange={name && (event) => name(event.currentTarget.value)}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFields;
