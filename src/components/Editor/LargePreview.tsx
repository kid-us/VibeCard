import { userPic } from "@/assets";
import { Style } from "./LargeEditor";
import { bgColors } from "../Product/ProductColor";
import "./switch.css";
// import Drag from "./Drag";
import Draggable from "react-draggable";
// import Drag from "./Drag";
import { useEffect, useRef, useState } from "react";

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
  textColor: string;
  frontNewText: string;
  //   Back
  backPickedBg: string;
  backBg: string;
  backFontStyle: Style;
  backImage: string;
  backName: string;
  backAlign: Style;
  backCroppedImage: string;
  backFontSize: string;
  backTextColor: string;
  backNewText: string;
  // Other
  setSwitch: (value: boolean) => void;
  switchBtn: boolean;
}

const LargePreview = ({
  product,
  bg,
  backBg,
  activeCard,
  setSwitch,
  switchBtn,
  active,
  // front
  frontNewText,
  name,
  align,
  image,
  fSize,
  fontStyle,
  pickedBg,
  croppedImage,
  textColor,
  setPickBg,
  setBg,
  // Back
  backNewText,
  backName,
  backImage,
  backAlign,
  backFontSize,
  backFontStyle,
  backCroppedImage,
  backPickedBg,
  backTextColor,
  setBackPickBg,
  setBackBg,
}: Props) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [showLines, setShowLines] = useState<{ x: boolean; y: boolean }>({
    x: false,
    y: false,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef1 = useRef<HTMLDivElement>(null);
  const draggableRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (image === "full") {
      setPosition({ x: 0, y: 0 });
    }
  }, [image]);

  const handleDrag1 = (e: any, data: any) => {
    setPosition({ x: data.x, y: data.y });
    checkIfCentered();
  };

  const handleDrag2 = (e: any, data: any) => {
    checkIfCentered();
  };

  const checkIfCentered = () => {
    const container = containerRef.current;
    const draggable1 = draggableRef1.current;
    const draggable2 = draggableRef2.current;

    if (!container || (!draggable1 && !draggable2)) return;

    const containerRect = container.getBoundingClientRect();

    let isCenteredX = false;
    let isCenteredY = false;

    if (draggable1) {
      const draggableRect1 = draggable1.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX1 =
        draggableRect1.left - containerRect.left + draggableRect1.width / 2;
      const draggableCenterY1 =
        draggableRect1.top - containerRect.top + draggableRect1.height / 2;

      isCenteredX = Math.abs(draggableCenterX1 - containerCenterX) < 10;
      isCenteredY = Math.abs(draggableCenterY1 - containerCenterY) < 10;
    }

    if (draggable2) {
      const draggableRect2 = draggable2.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX2 =
        draggableRect2.left - containerRect.left + draggableRect2.width / 2;
      const draggableCenterY2 =
        draggableRect2.top - containerRect.top + draggableRect2.height / 2;

      isCenteredX =
        isCenteredX || Math.abs(draggableCenterX2 - containerCenterX) < 10;
      isCenteredY =
        isCenteredY || Math.abs(draggableCenterY2 - containerCenterY) < 10;
    }

    if (isCenteredX || isCenteredY) {
      setShowLines({ x: isCenteredX, y: isCenteredY });

      // Hide lines after 5 seconds
      setTimeout(() => {
        setShowLines({ x: false, y: false });
      }, 5000);
    }
  };
  
  return (
    <>
      {/* Colors */}
      <div className="absolute top-0 flex justify-between gap-x-2 p-2 w-full">
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
                  <>
                    <p
                      className={`${align.style} ${fontStyle.style} text-${fSize} overflow-hidden text-ellipsis px-2`}
                      style={{
                        color: textColor,
                      }}
                    >
                      {name}
                    </p>
                  </>
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
                    className={`${backAlign.style} ${backFontStyle.style} text-${backFontSize} overflow-hidden text-ellipsis px-2`}
                    style={{
                      color: backTextColor,
                    }}
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
      {Number(product) === 2 && (
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
                className={`flex justify-center items-center h-full w-full overflow-hidden`}
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
                    className={`${backAlign.style} ${backFontStyle.style} text-${backFontSize} overflow-hidden text-ellipsis px-2`}
                    style={{
                      color: textColor,
                    }}
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
                className={`flex justify-center items-center h-full w-full overflow-hidden`}
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
                    className={`${backAlign.style} ${backFontStyle.style} text-${backFontSize} overflow-hidden text-ellipsis px-2`}
                    style={{
                      color: backTextColor,
                    }}
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
      {Number(product) === 3 && (
        <div className="flex justify-center items-center h-full">
          {/* Front */}
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md  w-full h-[290px] shadow-lg shadow-zinc-900 mx-20 overflow-hidden`}
            style={{
              backgroundColor: switchBtn ? pickedBg : "",
            }}
          >
            <div ref={containerRef} className="h-full">
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                {showLines.x && (
                  <line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke="blue"
                    strokeWidth="0.5"
                  />
                )}
                {showLines.y && (
                  <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="blue"
                    strokeWidth="0.5"
                  />
                )}
              </svg>
              <div className="flex justify-center items-center h-full">
                {croppedImage && (
                  <Draggable
                    bounds={image === "full" ? "" : "parent"}
                    axis="both"
                    handle=".handle"
                    defaultPosition={
                      image === "full" ? { x: 0, y: 0 } : undefined
                    }
                    grid={[10, 10]}
                    scale={1}
                    position={position}
                    onStart={(e, data) => console.log("Start:", e, data)}
                    onDrag={handleDrag1}
                    onStop={(e, data) => console.log("Stop:", e, data)}
                  >
                    <div ref={draggableRef1} className="absolute">
                      <div className="flex fixed justify-center w-full h-full items-center">
                        <button className="bi-arrows-move handle text-gray-500 hover:text-white hover:bg-[#22112286] hover:border border-gray-600 px-1 rounded"></button>
                      </div>
                      <img
                        src={croppedImage ? croppedImage : userPic}
                        alt="logo"
                        className={`h-${image} w-${image} object-cover`}
                      />
                    </div>
                  </Draggable>
                )}
                {name !== "" && (
                  <Draggable
                    bounds="parent"
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    grid={[10, 10]}
                    scale={1}
                    onStart={(e, data) => console.log("Start:", e, data)}
                    onDrag={handleDrag2}
                    onStop={(e, data) => console.log("Stop:", e, data)}
                  >
                    <div ref={draggableRef2} className="absolute">
                      <button className="bi-arrows-move handle absolute -bottom-1 -left-1 text-xs"></button>
                      <p
                        className={`${fontStyle.style} text-${fSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: textColor,
                        }}
                      >
                        {name}
                      </p>
                    </div>
                  </Draggable>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product 4 for small and laptop */}
      {Number(product) === 4 && (
        <div className="flex justify-center items-center h-full lg:mt-0 mt-10">
          <div
            onClick={() => activeCard("front")}
            className={`${bg} relative rounded-md  w-full lg:h-[290px] h-[200px] shadow-lg shadow-zinc-900 lg:mx-20 overflow-hidden`}
            style={{
              backgroundColor: switchBtn ? pickedBg : "",
            }}
          >
            <div className={`h-full`}>
              <div className={`flex justify-center items-center h-full`}>
                {name !== "" && (
                  <p
                    className={`${align.style} ${fontStyle.style} text-${fSize} overflow-hidden text-ellipsis px-2`}
                    style={{
                      color: textColor,
                    }}
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
              <div className="flex justify-center top-0 h-full w-full items-center mt-8">
                <p className="text-black  top-0 text-center w-full">
                  {frontNewText}
                  {backNewText}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Front */}
      {Number(product) === 5 && (
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
                    className={`${align.style} ${fontStyle.style} text-${fSize} overflow-hidden text-ellipsis px-2`}
                    style={{
                      color: textColor,
                    }}
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

export default LargePreview;
