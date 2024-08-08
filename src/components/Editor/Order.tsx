import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import useProduct from "@/store/useProduct";
import axios from "axios";
import { baseUrl } from "@/services/request";

interface LocalStorageData {
  cardType: string;
  quantity: string | number;
  vibecardLogo: boolean;
}

interface Props {
  closeOrder: () => void;
  frontFile: File | null;
  backFile: File | null;
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
});

type FormData = z.infer<typeof schema>;

const Order = ({ closeOrder, frontFile, backFile }: Props) => {
  const { back, front, orientation } = useProduct();

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

      // Orders
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
  };

  return (
    <>
      <div className="overlay z-40"></div>

      <div className="fixed z-50 lg:h-[100vh] w-full">
        <div className="flex justify-center items-center h-full">
          <div className="relative lg:w-[50%] w-[98%] secondary-bg h-auto rounded shadow-lg shadow-zinc-950 lg:p-10">
            <p
              onClick={() => closeOrder()}
              className="absolute cursor-pointer bi-x-lg right-4 top-2 font-bold text-red-400 text-xl"
            ></p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:px-5 lg:overflow-auto overflow-scroll lg:h-auto h-[100vh] px-6 py-5"
            >
              <p className="text-2xl mb-5 font-poppins text-white">
                Please insert your delivery information
              </p>
              <div className="lg:grid grid-cols-2 gap-x-8">
                {/* first name */}
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="email"
                  >
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
                <div className="grid grid-cols-3 gap-x-5 mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
              </div>
              <div className="flex gap-x-4 mt-2">
                <input
                  type="checkbox"
                  name="save"
                  className="w-4 h-4"
                  onChange={() => setCheckbox(!checkbox)}
                />
                <label htmlFor="save" className="text-white text-sm">
                  Do you want to save this info for future time use.
                </label>
              </div>

              <Button label="Order" loader={loader} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
