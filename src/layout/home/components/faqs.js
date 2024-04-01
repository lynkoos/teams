// Faqs.js
import React from 'react';
import UserInfo from './script/userinfo';

const FaqsComponent = ({ selectedChat, onSendMessage }) => {
  if (!selectedChat) {
    return <div className="faq-container"><UserInfo/></div>;
  }

  return (
    <div className="faq-container">
      <h2>Chat: {selectedChat.name}</h2>
      <div className="messages">
        {selectedChat.messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Type your message" />
      <button onClick={onSendMessage}>Send</button>
    </div>
  );
};

export default FaqsComponent;
