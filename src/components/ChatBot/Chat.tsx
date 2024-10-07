import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": any;
    }
  }
}

const Chat = () => {
  // const [chatBox, setChaBox] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      {/* {chatBox && ( */}
      <div className="rounded lg:h-[88%] h-[88.5%] lg:w-96 w-[100%]">
        <df-messenger
          intent="WELCOME"
          chat-title="Vibebot_de"
          agent-id="52d05800-ee8a-482c-9383-571b10579904"
          language-code="en"
        ></df-messenger>
      </div>
      {/* )} */}
      {/* <div
        onClick={() => setChaBox(!chatBox)}
        className={`fixed bottom-5 right-4 z-50 text-white text-center rounded-full lg:w-16 lg:h-16 w-14 h-14 p-0 shadow cursor-pointer ${
          chatBox ? "btn-bg" : "border-gradient"
        } `}
      >
        <p className="bi-robot lg:text-3xl text-2xl pt-3"></p>
      </div> */}
    </div>
  );
};

export default Chat;
