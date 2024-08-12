import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "@/services/request";

interface Props {
  id: string;
  quantity: string | number;
  img: string;
  hideModal: () => void;
}

interface Wallet {
  wallet_id: string;
  quantity: number | string;
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

const WalletOrder = ({ id, quantity, img, hideModal }: Props) => {
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

  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   useEffect(() => {
  //     axios
  //       .get(`${baseUrl}/api/v1/products/order-metadata`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         setAddress(response.data.order_metadata.address);
  //         setFName(response.data.order_metadata.fname);
  //         setLName(response.data.order_metadata.lname);
  //         setEmail(response.data.order_metadata.email);
  //         setLocation(response.data.order_metadata.location);
  //         setPhone(response.data.order_metadata.phone);
  //         setPlz(response.data.order_metadata.plz);
  //         setStreet(response.data.order_metadata.street);
  //         setStreetNo(response.data.order_metadata.street_no);
  //         setReferral(response.data.order_metadata.referral);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  const onSubmit = (data: FieldValues) => {
    const singleWallet: Wallet = { wallet_id: id, quantity: quantity };

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

    const orderWallet = {
      wallets: [singleWallet],
      order_metadata: deliveryData,
    };

    setLoader(true);
    // Send the form data to the server
    axios
      .post(`${baseUrl}/api/v1/products/order-wallet`, orderWallet, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        window.location.href = response.data.checkout_url;
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  return (
    <div className="fixed z-50 lg:grid grid-cols-2 secondary-bg h-[100vh] w-full lg:overflow-auto overflow-y-scroll">
      <div className="flex justify-center items-center">
        <img
          src={img}
          alt="wallet"
          className="lg:w-[70%] w-[95%] h-[500px] object-cover rounded"
        />
      </div>
      <div className="relative bg-white rounded shadow-lg shadow-zinc-950 lg:p-10 mx-2 lg:mt-0 mt-5">
        <button
          onClick={() => hideModal()}
          className="fixed top-3 right-10 text-red-500 bi-x-lg text-xl"
        ></button>
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
              <label className="text-sm text-gray-500 block" htmlFor="lastName">
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
                <label className="text-sm text-gray-500 block" htmlFor="street">
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
              <label className="text-sm text-gray-500 block" htmlFor="address">
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
            {/* Referral */}
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
  );
};

export default WalletOrder;
