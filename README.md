## 🎥 WhatsApp Video Messaging API  
Send video messages via WhatsApp using Maytapi's powerful API.

## 🚀 Features  
- Send video messages via public URLs  
- Send videos using Base64 encoding  
- Optional caption support  
- Axios-based clean request logic  
- Robust error handling  

## 📦 Installation  
Install Axios to enable HTTP requests:

```bash
npm install axios
```
## 🔧 Usage Example
```javascript
const WhatsAppAPI = require('./index');

// Initialize the API
const api = new WhatsAppAPI({
  productId: "YOUR_PRODUCT_ID",
  phoneId: "YOUR_PHONE_ID",
  apiToken: "YOUR_API_TOKEN"
});

// Send a video message via URL
api.sendVideoMessage({
  to: "1234567890",
  videoUrl: "https://example.com/video.mp4",
  caption: "Check out this video!"
})
.then(response => {
  console.log("Message sent successfully:", response);
})
.catch(error => {
  console.error("Message sending failed:", error);
});

// Send a video message from Base64 data
api.sendVideoFromBase64({
  to: "1234567890",
  base64Data: "data:video/mp4;base64,...",
  caption: "Base64 video message"
})
.then(response => {
  console.log("Base64 message sent:", response);
})
.catch(error => {
  console.error("Base64 message sending failed:", error);
});
```
## 🔒 Authentication  
Ensure you have the following credentials:  
- Product ID  
- Phone ID  
- API Token

## 📝 Methods  
- `sendVideoMessage()`: Send video via URL  
- `sendVideoFromBase64()`: Send video using Base64 encoding

## 🔍 Error Handling  
The library provides comprehensive error logging and throws detailed error messages.

## 📜 License  
MIT License

## 🤝 Support  
For issues or questions, please open a GitHub issue.
