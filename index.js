/**
 * NodeJS Example: How to send video message on WhatsApp API
 * 
 * This module provides functionality to send video messages via WhatsApp API using Maytapi.
 */

const axios = require('axios');

/**
 * WhatsApp API client for sending video messages using Maytapi
 */
class WhatsAppAPI {
  /**
   * Initialize the WhatsApp API client
   * @param {Object} config - Configuration object
   * @param {string} config.productId - Your Maytapi product ID
   * @param {string} config.phoneId - Your Maytapi phone ID
   * @param {string} config.apiToken - Your Maytapi API token
   */
  constructor(config) {
    this.productId = config.productId;
    this.phoneId = config.phoneId;
    this.apiToken = config.apiToken;
    this.baseUrl = `https://api.maytapi.com/api/${this.productId}/${this.phoneId}`;
    this.headers = {
      'Content-Type': 'application/json',
      'x-maytapi-key': this.apiToken
    };
  }

  /**
   * Send video message using a URL
   * @param {Object} params - Message parameters
   * @param {string} params.to - Recipient's phone number with country code (e.g., "1234567890")
   * @param {string} params.videoUrl - URL of the video to send
   * @param {string} [params.caption] - Optional caption for the video
   * @returns {Promise<Object>} - API response
   */
  async sendVideoMessage(params) {
    try {
      const endpoint = `${this.baseUrl}/sendMessage`;
      
      const payload = {
        to_number: params.to,
        type: "video",
        message: params.caption || "",
        video: params.videoUrl
      };
      
      const response = await axios.post(endpoint, payload, { headers: this.headers });
      return response.data;
    } catch (error) {
      console.error(`Error sending video message: ${error.message}`);
      throw error;
    }
  }

  /**
   * Send video message using base64 encoded data
   * @param {Object} params - Message parameters
   * @param {string} params.to - Recipient's phone number with country code (e.g., "1234567890")
   * @param {string} params.base64Data - Base64 encoded video data (should start with "data:image/...")
   * @param {string} [params.caption] - Optional caption for the video
   * @returns {Promise<Object>} - API response
   */
  async sendVideoFromBase64(params) {
    try {
      const endpoint = `${this.baseUrl}/sendMessage`;
      
      const payload = {
        to_number: params.to,
        type: "video",
        message: params.caption || "",
        video: params.base64Data
      };
      
      const response = await axios.post(endpoint, payload, { headers: this.headers });
      return response.data;
    } catch (error) {
      console.error(`Error sending video message from base64: ${error.message}`);
      throw error;
    }
  }
}

// Export the class
module.exports = WhatsAppAPI;

// Example usage (uncomment to run)
/*
const api = new WhatsAppAPI({
  productId: "YOUR_PRODUCT_ID",
  phoneId: "YOUR_PHONE_ID",
  apiToken: "YOUR_API_TOKEN"
});

api.sendVideoMessage({
  to: "1234567890",
  videoUrl: "https://example.com/video.jpg",
  caption: "Check out this video!"
})
.then(response => {
  console.log("Message sent:", response);
})
.catch(error => {
  console.error("Error:", error);
});
*/
