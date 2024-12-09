import React, { useState } from 'react';
import videopath from "../images/chatbot.mp4";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative">
      {/* Video Button */}
      <div
        className="fixed bottom-4 right-4 w-20 h-20 rounded-full shadow-xs bg-teal-900 overflow-hidden cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={videopath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Chat window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 p-4 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Chat with us</h3>
            <button
              className="text-gray-600"
              onClick={() => setIsChatOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-gray-100 rounded-md">
              <p className="text-sm">Hello! How can I help you today?</p>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
