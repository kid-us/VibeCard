import { useState } from "react";
import Faq from "../Home/FAQ";

const Chat = () => {
  const [chatBox, setChaBox] = useState(false);
  const [activeTap, setActiveTap] = useState("home");
  return (
    <div className="relative">
      {chatBox && (
        <div className="fixed bottom-24 right-0 z-50 lg:h-[83%] h-[80%] lg:w-96 w-[90%] rounded-lg bg-white shadow-xl shadow-slate-950 overflow-hidden">
          {activeTap === "home" && (
            <div className="lg:h-[88%] h-[88.5%] lg:w-96 w-[100%] lg:p-6 p-2">
              <p className="text-5xl lg:mt-10 mt-10 font-extrabold">
                Hi there 👋
              </p>
              <p className="text-3xl mt-3 mb-5">How can we help?</p>
              <div className="bg-black overflow-y-scroll rounded p-5 h-[76%]">
                <p className="text-white mb-10 text-2xl">FAQ</p>
                <Faq textSize={true} />
              </div>
            </div>
          )}

          {activeTap === "messages" && (
            <iframe
              className="rounded lg:h-[88%] h-[88.5%] lg:w-96 w-[100%]"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/ade34863-b44f-4399-8af0-ef82d3bfd2f5"
            ></iframe>
          )}

          <div className="lg:w-96 w-[100%] px-5 py-1 bg-white border-t">
            <div className="flex justify-between">
              <div
                onClick={() => setActiveTap("home")}
                className={`text-center cursor-pointer ${
                  activeTap === "home" ? "text-sky-800" : "text-black"
                }`}
              >
                <button className={`bi-house-fill text-2xl`}></button>
                <p className="lg:text-md text-xs">Home</p>
              </div>
              <div
                onClick={() => setActiveTap("messages")}
                className={`text-center cursor-pointer ${
                  activeTap === "messages" ? "text-sky-800" : "text-black"
                }`}
              >
                <button
                  className={`bi-chat-square-quote-fill text-2xl`}
                ></button>
                <p className="lg:text-md text-xs">Messages</p>
              </div>
            </div>
          </div>
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
