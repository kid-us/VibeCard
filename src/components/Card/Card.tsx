import { qrCode, userPic } from "../../assets";
import Magnetic from "../GsapMagnetic/Magnetic";

interface Props {
  passLength: number;
  email: string;
  submitted: boolean;
  username?: string;
}

const Card = ({ passLength, email, submitted, username }: Props) => {
  const renderPasswordLength = () => {
    let spans = [];
    for (let i = 0; i < passLength; i++) {
      spans.push(
        <span key={i} className="text-stone-400 text-[10px] bi-asterisk"></span>
      );
    }
    return spans;
  };
  return (
    <div className="flex justify-center ms-5">
      <div className="content-center">
        <Magnetic>
          <div className="bg-teal-600 w-[95%] rounded text-white p-5 shadow-xl shadow-teal-950 relative overflow-hidden lg:block md:block hidden">
            <div className="z-10">
              <div className="z-10 absolute -bottom-11 -left-2 w-14 h-14 bg-slate-100 blur-sm rounded-full"></div>
              <div className="z-10 absolute -bottom-11 left-9 w-14 h-14 bg-slate-100 blur-sm rounded-full"></div>
              <div className="z-10 absolute -bottom-11 left-20 w-14 h-14 bg-slate-100 blur-sm rounded-full"></div>
              <div className="z-10 absolute -bottom-11 left-32 w-14 h-14 bg-slate-100 blur-sm rounded-full"></div>
              <div className="z-10 absolute -bottom-11 left-44 w-14 h-14 bg-slate-100 blur-sm rounded-full"></div>
              <div className="z-10 absolute -bottom-11 left-56 w-14 h-14 bg-slate-100 blur-sm rounded-full"></div>
            </div>

            <div className="absolute w-96 h-80 bg-slate-900 -rotate-12 -left-28 -top-4 z-0"></div>

            <div className="z-10 relative">
              <h1 className="text-end text-sm z-10 float-end">Member card</h1>
              <h1 className="text-2xl text-teal-400 logo-font">vibecard</h1>
              <div className={`${username && "flex"}`}>
                <div>
                  <img
                    src={userPic}
                    alt="User Icon"
                    className="aspect-square w-14 blur-sm mt-4"
                  />
                </div>
                {username && (
                  <div className="mt-8 ms-6">
                    <p className="first-letter:uppercase text-gray-200">
                      {username}
                    </p>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <p className="mt-5 mb-3 font-poppins text-orange-500">
                    <span className="bi-envelope-fill text-blue-400 me-3"></span>
                    Email:{" "}
                    <span className="text-sm text-stone-400">{email}</span>
                  </p>

                  <p className="font-poppins text-orange-500 text-nowrap overflow-hidden">
                    <span className="bi-lock-fill text-blue-400 me-3"></span>
                    Password : {passLength === 0 ? "" : renderPasswordLength()}
                  </p>
                </div>
                <div className={`${submitted && "animate-pulse"}`}>
                  <img src={qrCode} alt="qr code" className="blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Card;
