import Loader from "../Loader/Loader";

interface Props {
  label: string;
  loader?: boolean;
}

const Button = ({ label, loader }: Props) => {
  return (
    <>
      {loader ? (
        <div className="bg-teal-400 w-full py-3 rounded-xl font-poppins mt-5 shadow-lg">
          <Loader />
        </div>
      ) : (
        <button className="bg-teal-400 w-full py-3 rounded-xl font-poppins mt-5 shadow-lg">
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
