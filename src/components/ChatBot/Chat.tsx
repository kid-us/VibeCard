import { useState } from "react";

const Chat = () => {
  const [chatBox, setChaBox] = useState(false);
  return (
    <div className="relative">
      {chatBox && (
        <div className="fixed bottom-24 right-3 z-50 h-[85%] w-96 rounded-md border-gradient overflow-y-scroll"></div>
      )}

      <div
        onClick={() => setChaBox(!chatBox)}
        className={`fixed bottom-5 right-4 z-50 text-white text-center rounded-full w-16 h-16 p-0 shadow cursor-pointer ${
          chatBox ? "btn-bg" : "border-gradient"
        } `}
      >
        <p className="bi-robot text-3xl pt-3"></p>
      </div>
    </div>
  );
};

export default Chat;
