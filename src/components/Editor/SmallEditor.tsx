import React, { useCallback, useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import CustomSlider from "./Slider";
import { fonts } from "@/services/fonts";
import { fontSize, imageSize, textAlignment } from "@/services/editor";
import SmallDevicePreview from "./SmallDevicePreview";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "@/store/useProduct";

export interface Image {
  width: string;
  height: string;
}

export interface Style {
  name: string;
  style: string;
}

const SmallEditor: React.FC = () => {
  // Product Id
  const { productId } = useParams<{ productId: string }>();

  // Zustand
  const { setProductId, updateBack, updateFront } = useProduct();

  const navigate = useNavigate();

  // Cropper
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [aspect, setAspect] = useState<number>();

  // Input Ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Front and Back
  const [switchBtn, setSwitchBtn] = useState(false);
  const [tab, setTab] = useState<string>("image");
  const [pickedBg, setPickBg] = useState("#ffffff");
  const [active, setActive] = useState<string>("front");

  // Front Card
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [frontFile, setFrontFile] = useState<File | null>();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [bg, setBg] = useState<string>("bg-white");
  const [name, setName] = useState<string>("");
  const [font, setFontSize] = useState<string>("4xl");
  const [image, setImage] = useState("40");
  const [align, setAlign] = useState({
    name: "Center Center",
    style: "text-center",
  });
  const [fontStyle, setFontStyle] = useState<Style>({
    style: "syne",
    name: "Syne",
  });

  // Back Card
  const [backImageSrc, setBackImageSrc] = useState<string | null>(null);
  const [backCroppedImage, setBackCroppedImage] = useState<string | null>(null);
  const [backFile, setBackFile] = useState<File | null>();
  const [backPickedBg, setBackPickBg] = useState("#ffffff");
  const [backBg, setBackBg] = useState<string>("bg-white");
  const [backName, setBackName] = useState<string>("");
  const [backFont, setBackFontSize] = useState<string>("4xl");
  const [backImage, setBackImage] = useState("40");
  const [backAlign, setBackAlign] = useState({
    name: "Center Center",
    style: "",
  });
  const [backFontStyle, setBackFontStyle] = useState<Style>({
    style: "syne",
    name: "Syne",
  });

  // Error
  const [error, setError] = useState<boolean>(false);

  // On Crop Complete
  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  // Showing Cropped Image
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

  // Live Preview
  const updateCroppedImage = useCallback(async () => {
    if (croppedAreaPixels) {
      try {
        if (active === "front") {
          const croppedImage = await getCroppedImg(
            imageSrc!,
            croppedAreaPixels,
            rotation
          );
          setCroppedImage(croppedImage as string);
        } else if (active === "back") {
          const croppedImage = await getCroppedImg(
            backImageSrc!,
            croppedAreaPixels,
            rotation
          );
          setBackCroppedImage(croppedImage as string);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [imageSrc, croppedAreaPixels, rotation]);
  useEffect(() => {
    updateCroppedImage();
  }, [updateCroppedImage]);

  // On File Change
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Set the file to the respective state
      if (active === "front") {
        setFrontFile(file);
      } else {
        setBackFile(file);
      }

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const result = reader.result as string;
        if (active === "front") {
          setImageSrc(result);
        } else {
          setBackImageSrc(result);
        }

        // Create an Image object and set the aspect ratio
        const img = new Image();
        img.src = result;
        img.onload = () => {
          setAspect(img.width / img.height);
        };
      });
      reader.readAsDataURL(file);
    }
  };

  // On order asked
  const handleSubmit = () => {
    if (backFile || frontFile) {
      // Product
      setProductId(productId ? productId : "");
      // Set Front
      updateFront({
        bgColor: bg,
        fontStyle: fontStyle.style,
        image: frontFile,
        text: name,
        textAlignment: align.style,
        textSize: font,
        imageSize: image,
      });
      // Set Back
      updateBack({
        bgColor: backBg,
        fontStyle: backFontStyle.style,
        image: backFile,
        text: backName,
        textAlignment: backAlign.style,
        textSize: backFont,
        imageSize: backImage,
      });

      navigate("/pay");
    } else {
      setError(true);
    }
  };

  // Error hide
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 10000);
  }, [error]);

  return (
    <>
      {error && (
        <div className="fixed flex top-3 right-0 z-50 text-white bg-red-500 rounded ps-5 text-sm py-2">
          <p>Please at least insert your logo </p>
          <p
            onClick={() => setError(false)}
            className="text-white ms-5 me-2 text- bi-x-lg bg-black rounded px-2 py-1"
          ></p>
        </div>
      )}
      <div className="px-2">
        <div className="secondary-bg rounded mt-1 relative">
          {/* Device Preview */}
          <div className="col-span-5">
            <div className={`relative px-2 py-5 bg-gray-200 h-full rounded`}>
              <SmallDevicePreview
                product={productId}
                active={active}
                activeCard={(value: string) => setActive(value)}
                // Front
                pickedBg={pickedBg}
                setPickBg={(value) => setPickBg(value)}
                align={align}
                bg={bg}
                setBg={(value: string) => setBg(value)}
                croppedImage={croppedImage ? croppedImage : ""}
                fSize={font}
                fontStyle={fontStyle}
                image={image}
                name={name}
                // Back
                backPickedBg={backPickedBg}
                setBackPickBg={(value) => setBackPickBg(value)}
                backBg={backBg}
                setBackBg={(value: string) => setBackBg(value)}
                backAlign={backAlign}
                backCroppedImage={backCroppedImage ? backCroppedImage : ""}
                backFontSize={backFont}
                backFontStyle={backFontStyle}
                backImage={backImage}
                backName={backName}
                // Switch
                setSwitch={(value) => setSwitchBtn(value)}
                switchBtn={switchBtn}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Device Editors */}
      <div
        className={`absolute w-full px-5 bg-secondary border border-gray-600 rounded-xl bottom-10 sm-scroll ${
          imageSrc ? "sm-" : backImageSrc ? "sm-scrollbar" : ""
        }`}
      >
        {/* Image */}
        {tab === "image" && (
          <>
            <div className="w-full">
              <div className="flex justify-between mt-2">
                <p className="text-gray-400 text-sm">Image / Logo</p>
                {active === "front" && croppedImage && (
                  <button
                    onClick={() => setCroppedImage(null)}
                    className="bg-red-500 rounded text-xs w-14 text-white"
                  >
                    Reset
                  </button>
                )}
                {active === "back" && backCroppedImage && (
                  <button
                    onClick={() => setBackCroppedImage(null)}
                    className="bg-red-500 rounded text-xs w-14 text-white"
                  >
                    Reset
                  </button>
                )}
              </div>
              {!imageSrc && (
                <div className="flex justify-between">
                  <div className="bg-white border w-full h-20 mt-3 rounded pb-3 ps-3 text-center">
                    <input
                      type="file"
                      id={`logo-file`}
                      className="hidden"
                      onChange={onFileChange}
                      accept="image/*"
                      ref={inputRef}
                    />

                    <label htmlFor={`logo-file`} className="cursor-pointer">
                      <div className="flex flex-col pt-3">
                        <i className="bi-image text-2xl"></i>
                        <span className="text-sm">
                          Upload front / back Image
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Front Card */}
              {imageSrc && (
                <>
                  {/* Scroll Animation */}
                  <div className="relative">
                    <div className="fixed right-1 scroll-thumb bi-hand-index-thumb-fill top-96 text-gray-500 "></div>
                  </div>
                  {/* Editor */}
                  <div className="h-[300px] w-full relative mt-4 mb-10 rounded overflow-hidden">
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      zoom={zoom}
                      aspect={aspect}
                      rotation={rotation}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onRotationChange={setRotation}
                      onCropComplete={onCropComplete}
                      cropShape="rect"
                      showGrid={true}
                    />
                    <div className="absolute w-full bottom-7">
                      <CustomSlider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={setZoom}
                      />
                    </div>
                    <p
                      onClick={() => showCroppedImage()}
                      className="absolute  bottom-0 z-50 bg-green-400 bi-check text- text-xl cursor-pointer rounded px-3"
                    ></p>
                    <p
                      onClick={() => setRotation((rotation + 90) % 360)}
                      className="absolute right-0 bottom-0 z-50 bg-gray-400 bi-arrow-repeat text- text-xl cursor-pointer rounded px-3"
                    ></p>
                  </div>
                </>
              )}

              {/* Card Back */}
              {backImageSrc && (
                <>
                  {/* Scroll Animation */}
                  <div className="relative">
                    <div className="fixed right-1 scroll-thumb bi-hand-index-thumb-fill top-96 text-gray-500 "></div>
                  </div>
                  {/* Editor */}
                  <div className="h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden">
                    <Cropper
                      image={backImageSrc}
                      crop={crop}
                      zoom={zoom}
                      aspect={aspect}
                      rotation={rotation}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onRotationChange={setRotation}
                      onCropComplete={onCropComplete}
                      cropShape="rect"
                      showGrid={true}
                    />
                    <div className="absolute w-full bottom-7">
                      <CustomSlider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={setZoom}
                      />
                    </div>
                    <p
                      onClick={() => showCroppedImage()}
                      className="absolute  bottom-0 z-50 bg-green-400 bi-check text- text-xl cursor-pointer rounded px-3"
                    ></p>
                    <p
                      onClick={() => setRotation((rotation + 90) % 360)}
                      className="absolute right-0 bottom-0 z-50 bg-gray-400 bi-arrow-repeat text- text-xl cursor-pointer rounded px-3"
                    ></p>
                  </div>
                </>
              )}

              <div className="mt-3">
                <div className="mb-5">
                  <label
                    htmlFor="width"
                    className="text-gray-400 block text-xs"
                  >
                    Image Size
                  </label>
                  <select
                    name="width"
                    className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                    onChange={(e) =>
                      active === "front"
                        ? setImage(e.currentTarget.value)
                        : setBackImage(e.currentTarget.value)
                    }
                    value={active === "front" ? image : backImage}
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                    }}
                  >
                    {imageSize.map((size) =>
                      size !== image ? (
                        <option key={size} value={`${size}`}>
                          {size}
                        </option>
                      ) : (
                        <option selected value={image}>
                          {image}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
          </>
        )}

        {/* text */}
        {tab === "text" && (
          <div className="w-full">
            <p className="text-gray-400 text-xs mb-3 mt-3">
              Company Name / Your Name
            </p>
            <input
              type="text"
              className="rounded w-full h-11 px-4 focus:outline-none mb-4 placeholder:font-bold placeholder:text-sm placeholder:text-gray-600"
              placeholder="name goes here"
              onChange={
                active === "front"
                  ? (e) => setName(e.currentTarget.value)
                  : (e) => setBackName(e.currentTarget.value)
              }
            />
            <div>
              {/* Font Size */}
              <div>
                <p className="text-gray-400 text-xs">Font Size</p>
                <select
                  name="height"
                  className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                  onChange={(e) =>
                    active === "front"
                      ? setFontSize(e.currentTarget.value)
                      : setBackFontSize(e.currentTarget.value)
                  }
                  value={active === "front" ? font : backFont}
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
            <div className="mt-3">
              {/* Text Align */}
              <div>
                <p className="text-gray-400 text-xs">Text Align</p>
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
                          textAlign.style === align.style && "text-teal-500"
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
                <p className="text-gray-400 text-xs mt-3">Font Style</p>
                <div className="relative">
                  <p className="bg-white rounded py-2 px-1 text-sm my-2 w-40">
                    {active === "front" ? fontStyle.name : backFontStyle.name}
                  </p>
                  <div className="w-full bg-white rounded p-2 text-sm mb-5">
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
          </div>
        )}
      </div>

      {/* Card Taps*/}
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between px-10 secondary-bg py-2 border rounded border-gray-800">
          <p
            onClick={() => setTab("image")}
            className={`${
              tab === "image" && "text-white text-3xl"
            } bi-image text-2xl text-gray-500`}
          ></p>
          <button
            onClick={() => handleSubmit()}
            className="rounded shadow-none px-8  text-center py-0 btn-bg text-sm text-white"
          >
            Order
          </button>
          <p
            onClick={() => setTab("text")}
            className={`${
              tab === "text" && "text-white text-3xl"
            } bi-fonts text-2xl text-gray-500`}
          ></p>
        </div>
      </div>
    </>
  );
};

export default SmallEditor;
