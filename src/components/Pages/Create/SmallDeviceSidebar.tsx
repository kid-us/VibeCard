import { sidebarIcons } from "../../../services/sidebarIcons";

interface Props {
  active: string;
  handleClick: (value: string) => void;
}

const SmallDeviceSidebar = ({ active, handleClick }: Props) => {
  return (
    <div className="grid grid-cols-5 bg-stone-800 w-full">
      {/* Icon */}
      {sidebarIcons.map((icons) => (
        <div
          key={icons.id}
          onClick={() => handleClick(icons.title)}
          className={`text-center cursor-pointer ${
            active === icons.title
              ? "bg-stone-700 text-gray-400 rounded-md"
              : "hover:bg-stone-800 text-white"
          } p-3`}
        >
          <p className={`${icons.icon} text-xl`}></p>
          <p className="text-[10px] font-poppins text-gray-300">
            {icons.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SmallDeviceSidebar;
