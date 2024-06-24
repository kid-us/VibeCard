import { useTextColorStore } from "../../store/useTextColorStore";

const Button = () => {
  const { button } = useTextColorStore();
  return (
    <button
      className={`w-full rounded-lg py-4 mb-14 mt-6 shadow-md font-poppins font-extrabold shadow-zinc-950`}
      style={{ backgroundColor: button.color, color: button.font }}
    >
      Save Contact
    </button>
  );
};

export default Button;
