interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return (
    <button className="bg-teal-400 w-full py-3 rounded-xl font-poppins mt-5 shadow-lg">
      {label}
    </button>
  );
};

export default Button;
