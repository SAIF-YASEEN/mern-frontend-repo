const checkEmailExistence = async (email, apiKey) => {
    const apiUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=39cd6d6d4dbe4019b3ebde960b9104fc&email=${email}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Check if the email is valid
      if (data.is_valid_format.value === false) {
        return { valid: false, message: "Invalid email format" };
      }
  
      // Check if the email is deliverable
      if (data.deliverability === "DELIVERABLE") {
        // Now ensure it's not a disposable email address or a free provider like Gmail
        if (data.is_disposable_email.value) {
          return { valid: false, message: "Disposable emails are not allowed" };
        }
  
        if (data.is_free_email.value) {
          return { valid: false, message: "Free email providers are not allowed" };
        }
  
        // If all checks are passed
        return { valid: true };
      } else {
        return { valid: false, message: "Undeliverable email" };
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      return { valid: false, message: "Error validating email" };  // Treat as invalid email if there's an error
    }
  };
  

export default checkEmailExistence;
