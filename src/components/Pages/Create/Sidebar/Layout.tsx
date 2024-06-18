import { layout } from "../../../../services/layouts";
import { useLayoutStore } from "../../../../store/useLayoutStore";

const Layout = () => {
  const { updateLayout } = useLayoutStore();
  return (
    <div>
      <p className="text-sm text-gray-300 mb-4">Card Layouts</p>
      <div className="bg-white rounded p-2">
        {layout.map((layouts) => (
          <div
            key={layouts.id}
            className="cursor-pointer mb-5"
            onClick={() => updateLayout(layouts.name)}
          >
            <img
              src={layouts.img}
              alt="Layout image"
              className="shadow shadow-black rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
