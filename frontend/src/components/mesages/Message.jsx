import React from "react";

const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble">
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div className="chat-footer opacity-50 text-xs text-gray-200 flex gap-1 items-center ">
        12:00
      </div>
    </div>
  );
};

export default Message;
