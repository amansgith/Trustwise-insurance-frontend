import { createChatBotMessage } from "react-chatbot-kit";
import ContactOptions from "./widget/ContactOptions";

const config = {
  botName: "TrustwiseBot",
  initialMessages: [
    createChatBotMessage("Hi! welcome to Trustwise Insurance How can I assist you today?"),
  ],
  widgets: [
    {
      widgetName: "contactOptions",
      widgetFunc: (props) => <ContactOptions {...props} />,
    },
  ],
  botAvatar: "/Navlogo.png",
};

export default config;