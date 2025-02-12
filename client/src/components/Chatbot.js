// src/components/Chatbot.js
import React, { useState } from "react";
import axios from "axios";
import { MessageCircle, X, Send } from "lucide-react";
import "./styles/Chatbot.css"; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
  
    try {
      // Add a delay (e.g., 1.5 seconds) before sending request
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...newMessages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text
            }))
          ]
        },
        {
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );
  
      const botMessage = response.data.choices[0]?.message?.content || "I couldn't understand that.";
      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
  
    } catch (error) {
      console.error("Error fetching response:", error.response?.data || error.message);
  
      // Handle 429 specifically
      if (error.response?.status === 429) {
        setMessages([...newMessages, { text: "Too many requests. Please slow down.", sender: "bot" }]);
      } else {
        setMessages([...newMessages, { text: "Sorry, something went wrong.", sender: "bot" }]);
      }
    }
  };
  

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
