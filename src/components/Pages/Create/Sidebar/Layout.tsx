import { layout } from "../../../../services/layouts";
import { useLayoutStore } from "../../../../store/useLayoutStore";

const Layout = () => {
  const { updateLayout } = useLayoutStore();
  return (
    <div>
      <p className="text-sm text-gray-300 mb-4">Card Layouts</p>
      <div className="bg-white rounded py-5 px-2">
        {layout.map((layouts) => (
          <div
            key={layouts.id}
            className="cursor-pointer mb-5"
            onClick={() => updateLayout(layouts.name)}
          >
            <p className="text-xs first-letter:uppercase mb-1">
              {layouts.name}
            </p>
            <img
              src={layouts.img}
              alt="Layout image"
              className="shadow-md shadow-black rounded-2xl h-96 w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
