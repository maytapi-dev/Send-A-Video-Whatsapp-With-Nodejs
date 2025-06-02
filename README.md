# 🎥 WhatsApp Video Messaging API for JavaScript | Send Video Messages via WhatsApp API

> **Professional WhatsApp API Integration** - Send video messages programmatically using JavaScript/Node.js with Maytapi's powerful WhatsApp API. Perfect for video marketing, tutorials, product demos, and visual communications.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![WhatsApp API](https://img.shields.io/badge/WhatsApp-API-25D366.svg)](https://maytapi.com/)
[![Maytapi](https://img.shields.io/badge/Powered%20by-Maytapi-orange.svg)](https://maytapi.com/)

## 🌟 Overview

This JavaScript/Node.js library provides seamless integration with **WhatsApp API** for sending video messages programmatically. Designed specifically for businesses and developers who need to share video content, product demonstrations, tutorials, and visual communications through WhatsApp with professional quality and reliability.

**Perfect for:** Product demos, video tutorials, marketing campaigns, video announcements, training materials, promotional content, and automated video communications.

## 🔗 Essential Links & Resources

| Resource | Description | Link |
|----------|-------------|------|
| 🌐 **Official Website** | Maytapi WhatsApp API Platform | [Visit Site](https://maytapi.com/) |
| 🔐 **Developer Console** | API management and configuration | [Login Portal](https://console.maytapi.com/login) |
| 💰 **Pricing & Plans** | Flexible pricing for all business sizes | [View Pricing](https://maytapi.com/whatsapp-api-pricing) |
| 📖 **API Documentation** | Complete developer documentation | [Read Docs](https://maytapi.com/whatsapp-api-documentation) |

## ⭐ Key Features & Capabilities

### 🎥 **Video Messaging Methods**
- ✅ **URL-based Video Sending** - Direct video URLs (MP4, AVI, MOV, MKV, 3GP)
- ✅ **Base64 Video Encoding** - Send videos from local files or memory buffers
- ✅ **Video Captions** - Add descriptive text to your video messages
- ✅ **Bulk Video Broadcasting** - Send to multiple recipients simultaneously
- ✅ **Video Format Validation** - Automatic format checking and duration validation

### 🛠️ **Developer-Friendly Features**
- ✅ **Modern JavaScript/ES6+** - Built with latest JavaScript standards
- ✅ **Axios-based Clean Request Logic** - Optimized HTTP client for video uploads
- ✅ **Promise-based API** - Full Promise and async/await support
- ✅ **Robust Error Handling** - Detailed error messages and stack traces
- ✅ **TypeScript Support** - Full TypeScript definitions included
- ✅ **Video Duration Detection** - Automatic video length validation

### 🔒 **Security & Performance**
- ✅ **Secure Token Authentication** - Token-based security
- ✅ **HTTPS Encryption** - All communications secured with TLS
- ✅ **Video File Security** - Format validation and content scanning
- ✅ **Rate Limiting** - Built-in request throttling
- ✅ **Retry Mechanisms** - Automatic retry with exponential backoff
- ✅ **Bandwidth Optimization** - Compressed video transfer

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
