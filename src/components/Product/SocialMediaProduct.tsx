import { Link } from "react-router-dom";

interface Props {
  name: string;
  bg: string;
}

const SocialMediaProduct = ({ name, bg }: Props) => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to={`/products/card-social-media-${name}`}>
        <div className="flex justify-center items-center relative px-8 py-5 pb-0 bg-white rounded h-[450px]">
          <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
            Best Seller
          </p>
          <div
            className={`rounded-md lg:w-72 w-[90%] h-[400px] ${bg} mb-5 shadow-lg shadow-zinc-900`}
          >
            <div className="flex justify-center items-center h-full px-10">
              <div>
                <p className={`text-white bi-${name} text-center text-9xl`}></p>
                <p
                  className={`text-white text-center text-3xl font-poppins mt-5 first-letter:uppercase`}
                >
                  {name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Color */}
      <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
        <p className="text-lg text-white font-poppins">Vibecard Social Media</p>
        <p className="text-xs text-white font-poppins">
          Available in{" "}
          <span className="text-teal-500 font-poppins text-sm font-bold">
            Metal{" "}
          </span>
          ,{" "}
          <span className="text-teal-500 font-poppins text-sm font-bold">
            Bamboo{" "}
          </span>
          and{" "}
          <span className="text-teal-500 font-poppins text-sm font-bold">
            Recycled Paper
          </span>
        </p>
      </div>
    </div>
  );
};

export default SocialMediaProduct;
