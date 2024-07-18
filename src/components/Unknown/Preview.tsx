import { userPic } from "@/assets";
import { Style } from "./ImageEditor";

interface Props {
  product?: number;
  setBg: (value: string) => void;
  activeCard: (value: string) => void;
  active: string;
  bg: string;
  //   Front
  fontStyle: Style;
  croppedImage: string;
  name: string;
  image: string;
  align: Style;
  fSize: string;
  //   Back
  backFontStyle: Style;
  backImage: string;
  backName: string;
  backAlign: Style;
  backCroppedImage: string;
  backFontSize: string;
}

const Preview = ({
  product,
  bg,
  setBg,
  activeCard,
  active,
  fontStyle,
  image,
  fSize,
  croppedImage,
  name,
  align,
  backImage,
  backAlign,
  backCroppedImage,
  backName,
  backFontSize,
  backFontStyle,
}: Props) => {
  return (
    <>
      <div className="absolute top-0 left-0 flex text-sm gap-x-2 p-2">
        <p>Color</p>
        <p
          onClick={() => setBg("bg-white")}
          className="bg-white rounded border border-gray-600 w-8 cursor-pointer"
        ></p>
        <p
          onClick={() => setBg("bg-black")}
          className="bg-black rounded border border-gray-600 w-8 cursor-pointer"
        ></p>
      </div>

      {/* Product 1 */}
      {product === 1 && (
        <>
          <div className="px-20">
            <p className="mt-8 text-sm mb-2">Front</p>
            <div
              onClick={() => activeCard("front")}
              className={`${bg} ${
                active === "front" && "border-2 border-sky-600"
              } relative rounded-md w-full h-[275px] mb-5 shadow-md shadow-zinc-900 cursor-pointer`}
            >
              <div
                className={`flex justify-center items-center h-full px-5 overflow-hidden`}
              >
                {croppedImage && (
                  <img
                    src={croppedImage ? croppedImage : userPic}
                    alt="user"
                    className={`h-${image} w-${image} object-cover`}
                  />
                )}
                {name !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${align.style} ${
                      fontStyle.style
                    } text-${fSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {name}
                  </p>
                )}
              </div>
            </div>
            {/* Back */}
            <p className="mt-8 text-sm mb-2">Back</p>
            <div
              onClick={() => activeCard("back")}
              className={`${bg} ${
                active === "back" && "border-2 border-sky-500"
              } relative rounded-md w-full h-[275px] mb-5 shadow-md shadow-zinc-900 cursor-pointer`}
            >
              <div
                className={`flex justify-center items-center h-full px-5 overflow-hidden`}
              >
                {backCroppedImage && (
                  <img
                    src={backCroppedImage ? backCroppedImage : userPic}
                    alt="user"
                    className={`h-${backImage} w-${backImage} object-cover`}
                  />
                )}
                {backName !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${backAlign.style} ${
                      backFontStyle.style
                    } text-${backFontSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {backName}
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Product 2  */}
      {product === 2 && (
        <>
          <div className="flex justify-between px-4 mt-10">
            <p className="mt-8 text-sm mb-2">Front</p>

            <p className="mt-8 text-sm mb-2">Back</p>
          </div>
          <div className="flex justify-center gap-x-5">
            <div
              onClick={() => activeCard("front")}
              className={`${bg} ${
                active === "front" && "border-2 border-sky-600"
              } relative rounded-md lg:w-[310px] w-[20px] h-[470px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer`}
            >
              <div
                className={`flex justify-center items-center h-full px-5 overflow-hidden`}
              >
                {croppedImage && (
                  <img
                    src={croppedImage ? croppedImage : userPic}
                    alt="user"
                    className={`h-${image} w-${image} object-cover`}
                  />
                )}
                {name !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${align.style} ${
                      fontStyle.style
                    } text-${fSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {name}
                  </p>
                )}
              </div>
            </div>
            {/* Back */}
            <div
              onClick={() => activeCard("back")}
              className={`${bg} ${
                active === "back" && "border-2 border-sky-500"
              } relative rounded-md lg:w-[310px] w-[20px] h-[470px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer`}
            >
              <div
                className={`flex justify-center items-center h-full px-5 overflow-hidden`}
              >
                {backCroppedImage && (
                  <img
                    src={backCroppedImage ? backCroppedImage : userPic}
                    alt="user"
                    className={`h-${backImage} w-${backImage} object-cover`}
                  />
                )}
                {backName !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${backAlign.style} ${
                      backFontStyle.style
                    } text-${backFontSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {backName}
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Product 3 */}
      {product === 3 && (
        <div className="flex justify-center items-center h-full">
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md  w-full h-[285px] shadow-lg shadow-zinc-900`}
          >
            <div className={`px-10 h-full`}>
              <div className={`flex justify-center items-center h-full`}>
                {croppedImage && (
                  <img
                    src={croppedImage ? croppedImage : userPic}
                    alt="user"
                    className={`h-${image} w-${image} object-cover`}
                  />
                )}
                {name !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${align.style} ${
                      fontStyle.style
                    } text-${fSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product 4 */}
      {product === 4 && (
        <div className="flex justify-center items-center h-full">
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md  w-full h-[285px] shadow-lg shadow-zinc-900`}
          >
            <div className={`px-10 h-full`}>
              <div className={`flex justify-center items-center h-full`}>
                {name !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${align.style} ${
                      fontStyle.style
                    } text-${fSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {name}
                  </p>
                )}
                {croppedImage && (
                  <img
                    src={croppedImage ? croppedImage : userPic}
                    alt="user"
                    className={`h-${image} w-${image} object-cover`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Front */}
      {product === 5 && (
        <div className="flex justify-center items-center h-full">
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md lg:w-[310px] w-[20px] h-[470px] shadow-lg shadow-zinc-900`}
          >
            <div className={`px-10 h-full`}>
              <div className={`flex justify-center items-center h-full`}>
                {croppedImage && (
                  <img
                    src={croppedImage ? croppedImage : userPic}
                    alt="user"
                    className={`h-${image} w-${image} object-cover`}
                  />
                )}
                {name !== "" && (
                  <p
                    className={`${
                      bg === "bg-white" ? "text-black" : "text-white"
                    } ${align.style} ${
                      fontStyle.style
                    } text-${fSize} overflow-hidden text-ellipsis px-2`}
                  >
                    {name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
