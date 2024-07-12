import { useState } from "react";
import Faq from "../Home/FAQ";

const Chat = () => {
  const [chatBox, setChaBox] = useState(false);
  const [activeTap, setActiveTap] = useState("home");
  return (
    <div className="relative">
      {chatBox && (
        <div className="fixed bottom-24 right-3 z-50 lg:h-[85%] h-[80%] lg:w-96 w-[95%] rounded-xl bg-white shadow-xl shadow-slate-950">
          {/* <div className="relative"> */}
          <div className="text- w-full lg:p-6 p-2">
            <p className="text-5xl lg:mt-10 mt-2 font-extrabold">Hi there 👋</p>
            <p className="text-3xl mt-3">How can we help?</p>
          </div>

          <div className="mx-2 rounded border border-gradient px-3 pt-6 lg:h-[56%] h-[59%] overflow-scroll">
            <Faq textSize={true} />
          </div>

          <div className="fixed bottom-[6.1em] rounded-xl text-white lg:w-96 w-[95%] px-5 lg:py-5 py-3 secondary-bg">
            <div className="flex justify-between">
              <div
                onClick={() => setActiveTap("home")}
                className={`text-center cursor-pointer ${
                  activeTap === "home" && "text-sky-400"
                }`}
              >
                <button
                  className={`bi-house-fill lg:text-3xl text-xl`}
                ></button>
                <p className="lg:text-md text-sm">Home</p>
              </div>
              <div
                onClick={() => setActiveTap("messages")}
                className={`text-center cursor-pointer ${
                  activeTap === "messages" && "text-sky-400"
                }`}
              >
                <button
                  className={`bi-chat-square-quote-fill lg:text-3xl text-xl`}
                ></button>
                <p className="lg:text-md text-sm">Messages</p>
              </div>
              <div
                onClick={() => setActiveTap("help")}
                className={`text-center cursor-pointer ${
                  activeTap === "help" && "text-sky-400"
                }`}
              >
                <button
                  className={`bi-question-circle lg:text-3xl text-xl`}
                ></button>
                <p className="lg:text-md text-sm">Help</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}

      <div
        onClick={() => setChaBox(!chatBox)}
        className={`fixed bottom-5 right-4 z-50 text-white text-center rounded-full lg:w-16 lg:h-16 w-14 h-14 p-0 shadow cursor-pointer ${
          chatBox ? "btn-bg" : "border-gradient"
        } `}
      >
        <p className="bi-robot lg:text-3xl text-2xl pt-3"></p>
      </div>
    </div>
  );
};

export default Chat;
