class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Keywords for contact information
    const contactKeywords = [
      "hi",
      "hello",
      "number",
      "email",
      "help me",
      "contact",
      "customer care",
      "help",
      "support",
      "assistance",
      "service",
      "inquiry",
      "question",
      "home",
      "business",
      "life",
      "travel",
      "home insurance",
      "business insurance",
      "life insurance",
      "travel insurance",
    ];

    // Keywords for insurance types
    const insuranceKeywords = ["insurance", "types of insurance", "policies"];

    // Keywords for business hours
    const businessHoursKeywords = ["hours", "business hours", "working hours"];

    // Keywords for location
    const locationKeywords = ["location", "address", "where are you"];

    // Keywords for claim process
    const claimKeywords = ["claim", "file a claim", "how to claim"];

    // Check if the message matches any of the defined keywords
    if (contactKeywords.some((keyword) => lowerCaseMessage.includes(keyword))) {
      this.actionProvider.provideContactInfo();
    } else if (
      insuranceKeywords.some((keyword) => lowerCaseMessage.includes(keyword))
    ) {
      this.actionProvider.handleInsuranceTypes();
    } else if (
      businessHoursKeywords.some((keyword) =>
        lowerCaseMessage.includes(keyword)
      )
    ) {
      this.actionProvider.handleBusinessHours();
    } else if (
      locationKeywords.some((keyword) => lowerCaseMessage.includes(keyword))
    ) {
      this.actionProvider.handleLocationInfo();
    } else if (claimKeywords.some((keyword) => lowerCaseMessage.includes(keyword))) {
      this.actionProvider.handleClaimProcess();
    } else {
      this.actionProvider.handleUnknownMessage();
    }
  }
}

export default MessageParser;