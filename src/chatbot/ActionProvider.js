import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  provideContactInfo = () => {
    const message = this.createChatBotMessage(
      "For more information you can reach our customer care team here:",
      {
        widget: "contactOptions", // Add a widget for contact options
      }
    );

    this.updateChatbotState(message);
  };

  handleUnknownMessage = () => {
    const message = this.createChatBotMessage(
      "I'm not sure about that. You can ask for 'contact' or 'customer care'."
    );

    this.updateChatbotState(message);
  };

  handleInsuranceTypes = () => {
    const message = this.createChatBotMessage(
      "We offer a variety of insurance types, including:\n- Home Insurance\n- Business Insurance\n- Life & Financial Insurance\n- Travel Insurance\n\nLet me know which one you'd like to learn more about!"
    );

    this.updateChatbotState(message);
  };

  handleBusinessHours = () => {
    const message = this.createChatBotMessage(
      "Our business hours are Monday to Friday, 9:00 AM to 5:00 PM. Feel free to reach out during these hours!"
    );

    this.updateChatbotState(message);
  };

  handleLocationInfo = () => {
    const message = this.createChatBotMessage(
      "We are located at:\n#106 5305 Magasin Ave, Beaumont, AB T4X 1V8, Canada."
    );

    this.updateChatbotState(message);
  };

  handleClaimProcess = () => {
    const message = this.createChatBotMessage(
      "To file a claim, please contact our customer care team or visit our website for detailed instructions. Let me know if you'd like the contact details!"
    );

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