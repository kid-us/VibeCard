import Loader from "../Loader/Loader";

interface Props {
  label: string;
  loader?: boolean;
}

const Button = ({ label, loader }: Props) => {
  return (
    <button className="bg-teal-400 w-full py-3 rounded-xl font-poppins mt-5 shadow-lg">
      {loader ? <Loader /> : label}
    </button>
  );
};

export default Button;
