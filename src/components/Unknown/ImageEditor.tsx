import React, { ChangeEvent, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import CustomSlider from "./Slider";
import { userPic } from "@/assets";
import { fonts } from "@/services/fonts";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const imageWidth = ["w-44", "w-52", "w-56", "w-60", "w-64", "w-72", "w-80"];
const imageHeight = ["h-36", "h-40", "h-44", "h-52", "h-56"];
const fontSize = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
const textAlignment = [
  { name: "Default", style: "relative" },
  {
    name: "Center Center",
    style: "absolute",
  },
  {
    name: "Top Left",
    style: "absolute top-2 left-2",
  },
  {
    name: "Top Right",
    style: "absolute top-2 right-2",
  },
  {
    name: "Bottom Left",
    style: "absolute bottom-2 left-2",
  },
  {
    name: "Bottom Right",
    style: "absolute bottom-2 right-2",
  },
];

const ImageEditor: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [backImageSrc, setBackImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [backCroppedImage, setBackCroppedImage] = useState<string | null>(null);
  const [frontFile, setFrontFile] = useState<File | null>();
  const [backFile, setBackFile] = useState<File | null>();
  const [tab, setTab] = useState<string>("image");

  //
  const [active, setActive] = useState<string>("front");
  const [bg, setBg] = useState<string>("bg-white");
  const [align, setAlign] = useState({
    name: "Center Center",
    style: "",
  });
  const [backAlign, setBackAlign] = useState({
    name: "Center Center",
    style: "",
  });
  const [name, setName] = useState<string>("");
  const [backName, setBackName] = useState<string>("");
  const [font, setFontSize] = useState<string>("4xl");
  const [backFont, setBackFontSize] = useState<string>("4xl");
  const [fontStyle, setFontStyle] = useState({
    style: "syne",
    name: "Syne",
  });
  const [backFontStyle, setBackFontStyle] = useState({
    style: "syne",
    name: "Syne",
  });
  const [image, setImage] = useState({
    width: "w-52",
    height: "h-32",
  });
  const [backImage, setBackImage] = useState({
    width: "w-52",
    height: "h-32",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      if (active === "front") {
        const croppedImage = await getCroppedImg(
          imageSrc!,
          croppedAreaPixels,
          rotation
        );
        setCroppedImage(croppedImage as string);
        setImageSrc(null);
      } else {
        const croppedImage = await getCroppedImg(
          backImageSrc!,
          croppedAreaPixels,
          rotation
        );
        setBackCroppedImage(croppedImage as string);
        setBackImageSrc(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      active === "front" ? setFrontFile(file) : setBackFile(file);

      const reader = new FileReader();
      reader.addEventListener("load", () =>
        active === "front"
          ? setImageSrc(reader.result as string)
          : setBackImageSrc(reader.result as string)
      );
      reader.readAsDataURL(file);
    }
  };

  // Width
  const handleWidthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newWidth = e.currentTarget.value;
    active === "front"
      ? setImage((prevImage) => ({ ...prevImage, width: newWidth }))
      : setBackImage((prevImage) => ({ ...prevImage, width: newWidth }));
  };

  // Height
  const handleHeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newHeight = e.currentTarget.value;
    active === "front"
      ? setImage((prevImage) => ({ ...prevImage, height: newHeight }))
      : setBackImage((prevImage) => ({ ...prevImage, height: newHeight }));
  };

  const handleSubmit = () => {
    console.log(frontFile, backFile);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-10 secondary-bg rounded mt-10 relative">
          {/* Edit */}
          <div className={`col-span-5 relative px-5`}>
            <div className="grid grid-cols-12 gap-x-10">
              <div className="col-span-2 w-full border-r border-gray-600 pt-10">
                <p
                  onClick={() => setTab("image")}
                  className={`${
                    tab === "image" && "bg-blue-950 py-5 rounded me-1"
                  }  px-3 bi-image text-center text-5xl text-white cursor-pointer`}
                ></p>
                <p
                  onClick={() => setTab("text")}
                  className={`${
                    tab === "text" && "bg-blue-950 py-5 rounded me-1"
                  } px-3 bi-fonts mt-10 text-center text-5xl text-white cursor-pointer`}
                ></p>
              </div>
              <div className="col-span-10 pb-10 h-[90dvh] overflow-y-scroll pe-20">
                {/* image */}
                {tab === "image" && (
                  <div className="w-full">
                    <p className="text-font py-5 text-white">
                      Design with Image
                    </p>
                    <p className="text-white">Image / Logo</p>
                    <div className="flex justify-between">
                      <div className="bg-white border w-full h-32 mt-5 rounded pb-3 ps-3 text-center">
                        <input
                          type="file"
                          id={`logo-file`}
                          className="hidden"
                          onChange={onFileChange}
                          accept="image/*"
                          ref={inputRef}
                        />
                        <label htmlFor={`logo-file`} className="cursor-pointer">
                          <div className="flex flex-col pt-10">
                            <i className="bi-image text-2xl"></i>
                            <span className="text-sm">
                              Upload front / back Image
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {imageSrc && (
                      <div className="h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden">
                        <Cropper
                          image={imageSrc}
                          crop={crop}
                          zoom={zoom}
                          aspect={4 / 3}
                          rotation={rotation}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onRotationChange={setRotation}
                          onCropComplete={onCropComplete}
                          cropShape="rect"
                          showGrid={true}
                        />
                      </div>
                    )}

                    {backImageSrc && (
                      <div className="h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden">
                        <Cropper
                          image={backImageSrc}
                          crop={crop}
                          zoom={zoom}
                          aspect={4 / 3}
                          rotation={rotation}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onRotationChange={setRotation}
                          onCropComplete={onCropComplete}
                          cropShape="rect"
                          showGrid={true}
                        />
                      </div>
                    )}

                    <CustomSlider
                      value={zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      onChange={setZoom}
                    />
                    <button
                      className="bg-white border-2 border-black w-full rounded p-2 mb-3"
                      onClick={() => setRotation((rotation + 90) % 360)}
                    >
                      Rotate <i className="bi-arrow-repeat"></i>
                    </button>

                    <div className="my-8">
                      <div className="mb-5">
                        <label
                          htmlFor="width"
                          className="text-white block text-sm"
                        >
                          Image Width
                        </label>
                        <select
                          name="width"
                          className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                          onChange={handleWidthChange}
                          value={
                            active === "front" ? image.width : backImage.width
                          }
                          style={{ backgroundColor: "#f0f0f0", color: "#333" }}
                        >
                          {imageWidth.map((w) =>
                            w !== image.width ? (
                              <option key={w} value={`${w}`}>
                                {w.replace("w-", "")}
                              </option>
                            ) : (
                              <option selected value={image.width}>
                                {image.width.replace("w-", "")}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="height"
                          className="text-white block text-sm"
                        >
                          Image Height
                        </label>
                        <select
                          name="height"
                          className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                          onChange={handleHeightChange}
                          value={
                            active === "front" ? image.height : backImage.height
                          }
                        >
                          {imageHeight.map((h) =>
                            h !== image.height ? (
                              <option key={h} value={`${h}`}>
                                {h.replace("h-", "")}
                              </option>
                            ) : (
                              <option selected value={image.height}>
                                {image.height.replace("h-", "")}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    <button
                      className="btn-bg shadow w-full rounded p-2 text-white"
                      onClick={() => showCroppedImage()}
                    >
                      Save <i className="bi-save2-fill"></i>
                    </button>
                  </div>
                )}

                {/* text */}
                {tab === "text" && (
                  <div className="w-full">
                    <p className="text-font py-5 text-white">
                      Design with Image
                    </p>
                    <p className="text-white text-sm mb-4">
                      Company Name / Your Name
                    </p>
                    <input
                      type="text"
                      className="rounded w-full h-11 px-4 focus:outline-none mb-4 placeholder:font-thin placeholder:text-sm"
                      placeholder="Name goes here"
                      onChange={
                        active === "front"
                          ? (e) => setName(e.currentTarget.value)
                          : (e) => setBackName(e.currentTarget.value)
                      }
                    />
                    <div className="mt-4">
                      {/* Font Size */}
                      <div>
                        <p className="text-white text-xs">Font Size</p>
                        <select
                          name="height"
                          className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                          onChange={(e) =>
                            active === "front"
                              ? setFontSize(e.currentTarget.value)
                              : setBackFontSize(e.currentTarget.value)
                          }
                          value={font}
                        >
                          {fontSize.map((f) =>
                            f !== font ? (
                              <option key={f} value={f}>
                                {f}
                              </option>
                            ) : (
                              <option
                                selected
                                value={active === "front" ? font : backFont}
                              >
                                {active === "front" ? font : backFont}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    {/* Text Align */}
                    <div className="mt-5">
                      <div>
                        <p className="text-white text-xs">Text Align</p>
                        <div className="relative">
                          <p className="bg-white rounded py-2 px-1 text-sm my-2 w-36">
                            {active === "front" ? align.name : backAlign.name}
                          </p>
                          <div className=" w-full bg-white rounded p-2 text-sm">
                            {textAlignment.map((textAlign) => (
                              <p
                                onClick={() =>
                                  active === "front"
                                    ? setAlign({
                                        name: textAlign.name,
                                        style: textAlign.style,
                                      })
                                    : setBackAlign({
                                        name: textAlign.name,
                                        style: textAlign.style,
                                      })
                                }
                                className={`${
                                  textAlign.style === align.style &&
                                  "text-teal-500"
                                } cursor-pointer mb-1`}
                              >
                                {textAlign.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Font Style */}
                      <div>
                        <p className="text-white text-xs mt-5">Font Style</p>
                        <div className="relative">
                          <p className="bg-white rounded py-2 px-1 text-sm my-2 w-40">
                            {active === "front"
                              ? fontStyle.name
                              : backFontStyle.name}
                          </p>
                          <div className="w-full bg-white rounded p-2 text-sm">
                            {fonts.map((font) => (
                              <p
                                onClick={() =>
                                  active === "front"
                                    ? setFontStyle({
                                        name: font.name,
                                        style: font.style,
                                      })
                                    : setBackFontStyle({
                                        name: font.name,
                                        style: font.style,
                                      })
                                }
                                className={`cursor-pointer mb-1`}
                              >
                                {font.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* TE */}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order */}

          <div className="absolute -bottom-5 left-[45%] z-50">
            <button
              onClick={() => handleSubmit()}
              className="btn-bg rounded shadow-xl py-3 shadow-zinc-950"
            >
              Order this Card
            </button>
          </div>

          {/* Preivew */}
          <div className="col-span-5">
            <div className="relative lg:px-20 px-2 py-5 bg-gray-200 rounded">
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
              {/* Front */}
              <p className="mt-8 text-sm mb-2">Front</p>
              <div
                onClick={() => setActive("front")}
                className={`${bg} ${
                  active === "front" && "border-2 border-sky-600"
                } relative rounded-md w-full h-[285px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer`}
              >
                <div
                  className={`flex justify-center items-center h-full px-10`}
                >
                  {croppedImage && (
                    <img
                      src={croppedImage ? croppedImage : userPic}
                      alt="user"
                      className={`${image.width} ${image.height} object-cover`}
                    />
                  )}
                  {name !== "" && (
                    <p
                      className={`${
                        bg === "bg-white" ? "text-black" : "text-white"
                      } ${align.style} ${
                        fontStyle.style
                      } text-${font} overflow-hidden text-ellipsis px-2`}
                    >
                      {name}
                    </p>
                  )}
                </div>
              </div>
              {/* Back */}
              <p className="mt-8 text-sm mb-2">Back</p>
              <div
                onClick={() => setActive("back")}
                className={`${bg} ${
                  active === "back" && "border-2 border-sky-500"
                } relative rounded-md w-full h-[285px] mb-5 shadow-lg shadow-zinc-900 cursor-pointer`}
              >
                <div
                  className={`flex justify-center items-center h-full px-10`}
                >
                  {backCroppedImage && (
                    <img
                      src={backCroppedImage ? backCroppedImage : userPic}
                      alt="user"
                      className={`${backImage.width} ${backImage.height} object-cover`}
                    />
                  )}
                  {backName !== "" && (
                    <p
                      className={`${
                        bg === "bg-white" ? "text-black" : "text-white"
                      } ${backAlign.style} ${
                        backFontStyle.style
                      } text-${backFont} overflow-hidden text-ellipsis px-2`}
                    >
                      {backName}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImageEditor;
