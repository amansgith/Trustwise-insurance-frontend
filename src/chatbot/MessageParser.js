class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      // Keywords for contact information
      const contactKeywords = ["contact", "customer care", "help", "support", "assistance", "service", "inquiry", "question"];
  
      // Check if the message includes any of the contact keywords
      const isContactMessage = contactKeywords.some(keyword => lowerCaseMessage.includes(keyword));
  
      if (isContactMessage) {
        this.actionProvider.provideContactInfo();
      } else {
        this.actionProvider.handleUnknownMessage();
      }
    }
  }
  
  export default MessageParser;