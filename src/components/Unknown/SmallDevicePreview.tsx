import { userPic } from "@/assets";
import { Style } from "./ImageEditor";
import { bgColors } from "../Product/ProductColor";
import "./switch.css";

interface Props {
  product?: number | string;
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

const SmallDevicePreview = ({
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
      {/* Colors */}
      <div className="absolute top-0 flex justify-between gap-x-2 p-2 w-full h-10">
        {switchBtn ? (
          <div className={`relative`}>
            <p className="text-xs mb-2 text-black lg:block hidden">
              Pick you Color here
            </p>
            <div className="lg:0 w-32 h-32">
              <input
                type="color"
                className="w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900"
                onChange={(e) =>
                  switchBtn && active === "front"
                    ? setPickBg(e.currentTarget.value)
                    : setBackPickBg(e.currentTarget.value)
                }
                value={pickedBg}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-x-1">
            {bgColors.map((b) => (
              <p
                key={b.style}
                onClick={() =>
                  active === "front" ? setBg(b.style) : setBackBg(b.style)
                }
                className={`${b.style} rounded border border-gray-600 lg:w-6 lg:h-6 w-5 h-5 cursor-pointer`}
              ></p>
            ))}
          </div>
        )}

        <div className="lg:me-0 me-1">
          <label className="switch">
            <input
              onClick={() => setSwitch(switchBtn ? false : true)}
              type="checkbox"
            />
            <span className="slider w-11 h-5"></span>
          </label>
        </div>
      </div>

      {/* Product 1 */}
      {Number(product) === 1 && (
        <>
          <div>
            <div className="flex justify-end gap-x-10 mt-6">
              <p
                onClick={() => activeCard("front")}
                className={`text-sm mb-2 ${
                  active === "front" && "btn-bg p-0 w-20 rounded"
                }`}
              >
                Front
              </p>
              <p
                onClick={() => activeCard("back")}
                className={`text-sm mb-2 ${
                  active === "back" && "btn-bg p-0 w-20 rounded"
                }`}
              >
                Back
              </p>
            </div>

            {/* Front */}
            {active === "front" && (
              <div
                className={`${
                  !switchBtn && bg
                } relative rounded-md w-full h-[200px] mb-5 shadow-md shadow-zinc-900 cursor-pointer overflow-hidden`}
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
            )}

            {/* Back */}
            {active === "back" && (
              <div
                className={`${
                  !switchBtn && backBg
                } relative rounded-md w-full h-[200px] mb-5 shadow-md shadow-zinc-900 cursor-pointer overflow-hidden`}
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
            )}
          </div>
        </>
      )}

      {/* Product 2  */}
      {Number(product) === 2 && (
        <>
          <div className="flex justify-end gap-x-10 mt-6">
            <p
              onClick={() => activeCard("front")}
              className={`text-sm mb-2 ${
                active === "front" && "btn-bg p-0 w-20 rounded"
              }`}
            >
              Front
            </p>
            <p
              onClick={() => activeCard("back")}
              className={`text-sm mb-2 ${
                active === "back" && "btn-bg p-0 w-20 rounded"
              }`}
            >
              Back
            </p>
          </div>
          <div className="flex justify-center gap-x-5">
            {/* Front */}
            {active === "front" && (
              <div
                onClick={() => activeCard("front")}
                className={`${
                  !switchBtn && bg
                } relative rounded-md w-48 h-[240px] shadow-lg shadow-zinc-900 overflow-hidden`}
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
            )}
            {/* Back */}
            {active === "back" && (
              <div
                onClick={() => activeCard("back")}
                className={`${
                  !switchBtn && backBg
                } relative rounded-md w-48 h-[240px] shadow-lg shadow-zinc-900 overflow-hidden`}
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
            )}
          </div>
        </>
      )}

      {/* Product 3 */}
      {Number(product) === 3 && (
        <div className="flex justify-center items-center h-full mt-7">
          {/* Front */}
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md w-full h-[200px] shadow-lg shadow-zinc-900  overflow-hidden`}
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

      {/* Product 4 for small and laptop */}
      {Number(product) === 4 && (
        <div className="flex justify-center items-center h-full mt-10">
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md w-full h-[200px] shadow-lg shadow-zinc-900 overflow-hidden`}
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
      {Number(product) === 5 && (
        <div>
          <div className="flex justify-center h-full mt-5">
            <div
              className={`${bg} relative rounded-md w-48 h-[240px] shadow-lg shadow-zinc-900 overflow-hidden`}
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
        </div>
      )}
    </>
  );
};

export default SmallDevicePreview;
