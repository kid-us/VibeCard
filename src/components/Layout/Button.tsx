import { useTextColorStore } from "../../store/useTextColorStore";

const Button = () => {
  const { button } = useTextColorStore();
  return (
    <button
      className={`w-full rounded-lg py-4 mb-9 mt-5 ${
        button.color === "#000000" ? "text-white" : "text-black"
      }  shadow-md font-poppins font-extrabold shadow-zinc-50`}
      style={{ backgroundColor: button.color }}
    >
      Save Contact
    </button>
  );
};

export default Button;
