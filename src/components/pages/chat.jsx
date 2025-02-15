// ChatPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import './chat.css';

const socket = io("http://localhost:5000"); // Adjust the URL as needed

const ChatPage = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [chatUser, setChatUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      if (message.sender === chatUser?._id) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [chatUser]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/search",
        {
          params: { email: searchEmail },
        }
      );
      setSearchResult(response.data);
    } catch (error) {
      setSearchResult(null);
    }
  };

  const handleUserClick = (user) => {
    setChatUser(user);
    setMessages([]); // Clear previous messages
    // Fetch chat history if needed
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && chatUser) {
      const message = {
        sender: "currentUserId", // Replace with actual current user ID
        receiver: chatUser._id,
        content: newMessage,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <input
          type="text"
          placeholder="Enter user email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {searchResult ? (
          <div onClick={() => handleUserClick(searchResult)}>
            {searchResult.email}
          </div>
        ) : (
          <div>No user found</div>
        )}
      </div>
      <div className="chat-box">
        {chatUser ? (
          <>
            <div className="chat-header">{chatUser.email}</div>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "currentUserId" ? "sent" : "received"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div>Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
