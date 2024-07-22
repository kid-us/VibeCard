import { userPic } from "@/assets";
import { Style } from "./ImageEditor";
import { bgColors } from "../Product/ProductColor";
import "./switch.css";

interface Props {
  product?: number;
  setBg: (value: string) => void;
  setBackBg: (value: string) => void;
  activeCard: (value: string) => void;
  active: string;
  setPickBg: (value: string) => void;
  setBackPickBg: (value: string) => void;
  //   Front
  bg: string;
  fontStyle: Style;
  croppedImage: string;
  name: string;
  image: string;
  align: Style;
  fSize: string;
  pickedBg: string;
  //   Back
  backPickedBg: string;
  backBg: string;
  backFontStyle: Style;
  backImage: string;
  backName: string;
  backAlign: Style;
  backCroppedImage: string;
  backFontSize: string;
  // Other
  setSwitch: (value: boolean) => void;
  switchBtn: boolean;
}

const Preview = ({
  product,
  bg,
  setBg,
  backBg,
  setBackBg,
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
  setSwitch,
  switchBtn,
  backPickedBg,
  pickedBg,
  setPickBg,
  setBackPickBg,
}: Props) => {
  return (
    <>
      <div className="absolute top-0 flex justify-between gap-x-2 p-2 w-full">
        {switchBtn ? (
          <div className={`relative`}>
            <p className="text-xs mb-2 text-black">Pick you Color here</p>
            <input
              type="color"
              className="w-full h-14 border-none outline-none shadow shadow-orange-900"
              onChange={(e) =>
                switchBtn && active === "front"
                  ? setPickBg(e.currentTarget.value)
                  : setBackPickBg(e.currentTarget.value)
              }
            />
          </div>
        ) : (
          <div className="flex gap-x-1">
            {bgColors.map((b) => (
              <p
                key={b.style}
                onClick={() =>
                  active === "front" ? setBg(b.style) : setBackBg(b.style)
                }
                className={`${b.style} rounded border border-gray-600 w-6 h-6 cursor-pointer`}
              ></p>
            ))}
          </div>
        )}

        <div>
          <label className="switch">
            <input
              onClick={() => setSwitch(switchBtn ? false : true)}
              type="checkbox"
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Product 1 */}
      {product === 1 && (
        <>
          <div className="px-20">
            <p className="mt-8 text-sm mb-2">Front</p>
            {/* Front */}
            <div
              onClick={() => activeCard("front")}
              className={`${!switchBtn && bg} ${
                active === "front" && "border-2 border-sky-600"
              } relative rounded-md w-full h-[275px] mb-5 shadow-md shadow-zinc-900 cursor-pointer overflow-hidden`}
              style={{
                backgroundColor: switchBtn ? pickedBg : "",
              }}
            >
              <div
                className={`flex justify-center items-center h-full overflow-hidden`}
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
              className={`${!switchBtn && backBg} ${
                active === "back" && "border-2 border-sky-500"
              } relative rounded-md w-full h-[275px] mb-5 shadow-md shadow-zinc-900 cursor-pointer overflow-hidden`}
              style={{
                backgroundColor: switchBtn ? backPickedBg : "",
              }}
            >
              <div
                className={`flex justify-center items-center h-full overflow-hidden`}
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
          <div className="lg:flex hidden justify-between px-4 mt-10">
            <p className="mt-8 text-sm mb-2">Front</p>

            <p className="mt-8 text-sm mb-2">Back</p>
          </div>
          <div className="flex justify-center gap-x-5 lg:mt-0 mt-10">
            {/* Front */}
            <div
              onClick={() => activeCard("front")}
              className={`${!switchBtn && bg} ${
                active === "front" && "border-2 border-sky-600"
              } relative flex rounded-md lg:w-[310px] w-[300px] h-[470px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer overflow-hidden`}
              style={{
                backgroundColor: switchBtn ? pickedBg : "",
              }}
            >
              <div
                className={`flex justify-center items-center h-full overflow-hidden`}
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
              className={`${!switchBtn && backBg} ${
                active === "back" && "border-2 border-sky-500"
              } relative rounded-md lg:w-[310px] w-[20px] h-[470px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer overflow-hidden`}
              style={{
                backgroundColor: switchBtn ? backPickedBg : "",
              }}
            >
              <div
                className={`flex justify-center items-center h-full overflow-hidden`}
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
          {/* Front */}
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md  w-full h-[290px] shadow-lg shadow-zinc-900 mx-20 overflow-hidden`}
            style={{
              backgroundColor: switchBtn ? pickedBg : "",
            }}
          >
            <div className={`h-full`}>
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
        <div className="flex justify-center items-center h-full lg:mt-0 mt-10">
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md  w-full lg:h-[290px] h-[250px] shadow-lg shadow-zinc-900 lg:mx-20 overflow-hidden`}
            style={{
              backgroundColor: switchBtn ? pickedBg : "",
            }}
          >
            <div className={`h-full`}>
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
            className={`${bg} relative rounded-md lg:w-[310px] w-[20px] h-[470px] shadow-lg shadow-zinc-900 overflow-hidden`}
            style={{
              backgroundColor: switchBtn ? pickedBg : "",
            }}
          >
            <div className={`h-full`}>
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
