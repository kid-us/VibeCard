import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import useProduct from "@/store/useProduct";
import axios from "axios";
import { baseUrl } from "@/services/request";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

interface LocalStorageData {
  cardType: string;
  quantity: string | number;
  vibecardLogo: boolean;
}

interface Props {
  closeOrder: () => void;
  frontFile: File | null;
  backFile: File | null;
  view: boolean;
}

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstName must be greater than 3 characters." }),
  lastName: z
    .string()
    .min(3, { message: "lastName must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required." }),
  street: z.string().min(2, { message: "Street name required" }),
  streetNo: z.string().min(2, { message: "Street name required" }),
  address: z.string().min(2, { message: "Address required." }),
  plz: z.string().min(2, { message: "PLZ required." }),
  location: z.string().min(2, { message: "Location required." }),
  phone: z.string().min(10, { message: "Phone number required." }),
  referral: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Order = ({ closeOrder, frontFile, backFile, view }: Props) => {
  const { back, front, orientation } = useProduct();

  const navigate = useNavigate();

  const captureRef = useRef<HTMLDivElement>(null);

  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [streetNo, setStreetNo] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [plz, setPlz] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [referral, setReferral] = useState<string>("");

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  //   Get images from a file
  useEffect(() => {
    if (front.image) {
      const url = URL.createObjectURL(front.image);
      setFrontImage(url);
    }
    if (back.image) {
      const url = URL.createObjectURL(back.image);
      setBackImage(url);
    }
  }, [front, back]);

  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/products/order-metadata`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setAddress(response.data.order_metadata.address);
        setFName(response.data.order_metadata.fname);
        setLName(response.data.order_metadata.lname);
        setEmail(response.data.order_metadata.email);
        setLocation(response.data.order_metadata.location);
        setPhone(response.data.order_metadata.phone);
        setPlz(response.data.order_metadata.plz);
        setStreet(response.data.order_metadata.street);
        setStreetNo(response.data.order_metadata.street_no);
        setReferral(response.data.order_metadata.referral);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data: FieldValues) => {
    setLoader(true);
    const productsInfo = localStorage.getItem("product");
    const product: LocalStorageData | null = productsInfo
      ? (JSON.parse(productsInfo) as LocalStorageData)
      : null;
    if (product) {
      const frontDesign = {
        bgColor: front.bgColor,
        fontStyle: front.fontStyle,
        text: front.text,
        textPosition: front.textPosition,
        textSize: front.textSize,
        imageSize: front.imageSize,
        imagePosition: front.imagePosition,
        pickedBg: front.pickedBg,
        color: front.color,
        extraText: front.extraText,
        extraTextColor: front.extraTextColor,
        extraFont: front.extraTextFontSize,
        extraFontStyle: front.extraTextFontStyle,
        extraTextPosition: front.extraTextPosition,
      };

      const backDesign = {
        bgColor: back.bgColor,
        fontStyle: back.fontStyle,
        text: back.text,
        textPosition: back.textPosition,
        textSize: back.textSize,
        imageSize: back.imageSize,
        imagePosition: back.imagePosition,
        pickedBg: back.pickedBg,
        color: back.color,
        extraText: back.extraText,
        extraTextColor: back.extraTextColor,
        extraFont: back.extraTextFontSize,
        extraFontStyle: back.extraTextFontStyle,
        extraTextPosition: back.extraTextPosition,
      };

      const deliveryData = {
        fname: data.firstName,
        lname: data.lastName,
        email: data.email,
        address: data.address,
        location: data.location,
        plz: data.plz,
        phone: data.phone,
        street: data.street,
        street_no: data.streetNo,
      };

      const formData = new FormData();

      if (captureRef.current) {
        html2canvas(captureRef.current, {
          scale: window.devicePixelRatio,
          useCORS: true,
          backgroundColor: null,
        }).then((canvas) => {
          // Convert canvas to Blob
          canvas.toBlob((blob) => {
            if (blob) {
              // Append the captured image blob to the FormData
              formData.append("card_img", blob, "capture.png");
              // Continue appending other form data
              frontFile && formData.append("front_image", frontFile);
              backFile && formData.append("back_image", backFile);
              formData.append("front_style", JSON.stringify(frontDesign));
              formData.append("back_style", JSON.stringify(backDesign));
              formData.append("orientation", orientation);
              formData.append("save_info", checkbox.toString());
              formData.append("quantity", product.quantity.toString());
              formData.append("vibecardLogo", product.vibecardLogo.toString());
              formData.append("order_metadata", JSON.stringify(deliveryData));
              formData.append("card_type", product.cardType);

              // Send the form data to the server
              axios
                .post(`${baseUrl}/api/v1/products/purchase-product`, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                  withCredentials: true,
                })
                .then((response) => {
                  window.location.href = response.data.checkout_url;
                  localStorage.clear();
                })
                .catch((error) => {
                  setLoader(false);
                  console.log(error);
                });
            }
          }, "image/png");
        });
      }
    } else {
      navigate("/products");
    }
  };

  return (
    <>
      <div className="overlay z-40"></div>
      <div className="fixed z-50 lg:grid grid-cols-2 secondary-bg h-[100vh] w-full lg:overflow-auto overflow-y-scroll">
        <p
          onClick={() => closeOrder()}
          className="absolute z-50 cursor-pointer bi-x-lg right-4 top-2 font-bold text-red-700 text-xl"
        ></p>
        {/* Card Preview */}
        <div className="lg:mt-24 mt-10">
          <div
            className={`lg:fixed lg:w-[45%] w-[100%] h-auto rounded-lg lg:overflow-auto overflow-y-scroll`}
          >
            <div
              ref={captureRef}
              className={`${
                view
                  ? " lg:flex gap-x-5 h-full items-center lg:my-0 my-14 lg:px-16 lg:ms-0 lg:w-full w-[50%] lg:m-0 m-auto"
                  : "lg:px-20 px-2"
              }`}
            >
              {/* Front */}
              <div
                className={`relative rounded-md  ${
                  view
                    ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                    : "lg:h-[280px] h-[30vh] w-full"
                }  mb-5 shadow-md shadow-zinc-800 overflow-hidden ${
                  front.pickedBg === "#ffffff" ? front.bgColor : ""
                }`}
                style={{
                  backgroundColor:
                    front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                }}
              >
                <div
                  className={`flex justify-center items-center h-full overflow-hidden`}
                >
                  {frontImage && (
                    <div
                      className={`absolute`}
                      style={{
                        transform: `translate(${front.imagePosition.x}px, ${front.imagePosition.y}px)`,
                      }}
                    >
                      <img
                        src={frontImage}
                        alt="user"
                        className={`h-${front.imageSize} w-${front.imageSize} object-cover`}
                      />
                    </div>
                  )}
                  {front.text !== "" && (
                    <div
                      className={`absolute ${view ? "top-3" : "top-3"} `}
                      style={{
                        transform: `translate(${front.textPosition.x}px, ${front.textPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${front.fontStyle} text-${front.textSize}`}
                        style={{
                          color: front.color,
                        }}
                      >
                        {front.text}
                      </p>
                    </div>
                  )}
                  {front.extraText !== "" && (
                    <div
                      className="absolute bottom-5"
                      style={{
                        transform: `translate(${front.extraTextPosition.x}px, ${front.extraTextPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${front.extraTextFontStyle} text-${front.extraTextFontSize}`}
                        style={{
                          color: front.extraTextColor,
                        }}
                      >
                        {front.extraText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* Back */}

              <div
                className={`relative rounded-md ${
                  view
                    ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                    : "lg:h-[280px] h-[30vh] w-full"
                } lg:mb-5 shadow-md shadow-zinc-800 overflow-hidden ${
                  back.pickedBg === "#ffffff" ? back.bgColor : ""
                }`}
                style={{
                  backgroundColor:
                    back.pickedBg === "#ffffff" ? "" : back.pickedBg,
                  margin: "",
                }}
              >
                <div
                  className={`flex justify-center items-center h-full overflow-hidden`}
                >
                  {backImage && (
                    <div
                      className={`absolute`}
                      style={{
                        transform: `translate(${back.imagePosition.x}px, ${back.imagePosition.y}px)`,
                      }}
                    >
                      <img
                        src={backImage}
                        alt="user"
                        className={`h-${back.imageSize} w-${back.imageSize} object-cover`}
                      />
                    </div>
                  )}
                  {back.text !== "" && (
                    <div
                      className="absolute top-3"
                      style={{
                        transform: `translate(${back.textPosition.x}px, ${back.textPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${back.fontStyle} text-${back.textSize}`}
                        style={{
                          color: back.color,
                        }}
                      >
                        {back.text}
                      </p>
                    </div>
                  )}
                  {back.extraText !== "" && (
                    <div
                      className="absolute bottom-5"
                      style={{
                        transform: `translate(${back.extraTextPosition.x}px, ${back.extraTextPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${back.extraTextFontStyle} text-${back.extraTextFontSize}`}
                        style={{
                          color: back.extraTextColor,
                        }}
                      >
                        {back.extraText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="relative bg-white rounded shadow-lg shadow-zinc-950 lg:p-10 mx-2 lg:mt-0 mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:px-5 px-6 py-5">
            <p className="text-2xl mb-10 font-poppins text-black">
              Please insert your delivery information
            </p>
            <div className="lg:grid grid-cols-2 gap-x-8">
              {/* first name */}
              <div className="mb-5">
                <label
                  className="text-sm text-gray-500 block"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  className={`text-black bg-gray-100 py-3 rounded h-12 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.firstName && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setFName(e.currentTarget.value)}
                  value={fName}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              {/* last name */}
              <div className="mb-5">
                <label
                  className="text-sm text-gray-500 block"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  name="lastName"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.lastName && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setLName(e.currentTarget.value)}
                  value={lName}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.email && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* street */}
              <div className="grid grid-cols-3 gap-x-5 mb-5">
                <div className="col-span-2">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="street"
                  >
                    Street
                  </label>
                  <input
                    {...register("street")}
                    type="text"
                    name="street"
                    className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      errors.street && "border-red-600 border-1 border"
                    }`}
                    onChange={(e) => setStreet(e.currentTarget.value)}
                    value={street}
                  />
                  {errors.street && (
                    <p className="text-red-600 text-xs pt-1">
                      {errors.street.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="streetNo"
                  >
                    StreetNo
                  </label>
                  <input
                    {...register("streetNo")}
                    type="text"
                    name="streetNo"
                    className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      errors.streetNo && "border-red-600 border-1 border"
                    }`}
                    onChange={(e) => setStreetNo(e.currentTarget.value)}
                    value={streetNo}
                  />
                  {errors.streetNo && (
                    <p className="text-red-600 text-xs pt-1">
                      {errors.streetNo.message}
                    </p>
                  )}
                </div>
              </div>
              {/* address */}
              <div className="mb-5">
                <label
                  className="text-sm text-gray-500 block"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.address && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  value={address}
                />
                {errors.address && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
              {/* PLZ */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block" htmlFor="plz">
                  Plz
                </label>
                <input
                  {...register("plz")}
                  type="text"
                  name="plz"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.plz && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setPlz(e.currentTarget.value)}
                  value={plz}
                />
                {errors.plz && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.plz.message}
                  </p>
                )}
              </div>
              {/* location */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block" htmlFor="plz">
                  Location
                </label>
                <input
                  {...register("location")}
                  type="text"
                  name="location"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.location && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setLocation(e.currentTarget.value)}
                  value={location}
                />
                {errors.location && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>
              {/* phone */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block" htmlFor="plz">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  name="phone"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.phone && "border-red-600 border-1 border"
                  }`}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  value={phone}
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              {/* phone */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block" htmlFor="plz">
                  Referral
                </label>
                <input
                  {...register("referral")}
                  type="tel"
                  name="referral"
                  className={`text-black bg-gray-100 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm`}
                  onChange={(e) => setReferral(e.currentTarget.value)}
                  value={referral}
                />
              </div>
            </div>
            <div className="flex gap-x-4 mt-2">
              <input
                type="checkbox"
                name="save"
                className="w-4 h-4"
                onChange={() => setCheckbox(!checkbox)}
              />
              <label htmlFor="save" className="text-black text-sm">
                Do you want to save this info for future time use.
              </label>
            </div>
            <div className="mt-20">
              <Button label="Order" loader={loader} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;