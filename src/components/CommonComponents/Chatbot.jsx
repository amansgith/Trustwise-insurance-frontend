"use client"
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../chatbot/config";
import "../../styles/globals.css"
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";
import Image from "next/image";
import bot from "../../../public/bot.png"

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Toggle Button */}
      <button
        className="bg-white rounded-full border-primary shadow-md border-spacing-2 border-4 text-white px-4 py-2"
        onClick={() => setShowChat(!showChat)}
      >
        <Image src={bot} alt="" width={30} height={30} />
      </button>

      {/* Chatbot Window */}
      {showChat && (
        <div className="absolute bottom-12 text-sm right-0 w-200 bg-white shadow-lg rounded-lg p-4">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
