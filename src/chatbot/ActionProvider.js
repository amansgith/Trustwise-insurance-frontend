import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  provideContactInfo = () => {
    const message = this.createChatBotMessage(
      `You can reach our customer care team here:📧 **Email:** support@trustwise.com\n📞 **Phone:** +1 800-123-4567`
    );

    this.updateChatbotState(message);
  };

  handleUnknownMessage = () => {
    const message = this.createChatBotMessage("I'm not sure about that. You can ask for 'contact' or 'customer care'.");

    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
