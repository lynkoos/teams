// chat.js
import React from 'react';
import '../style/chat.css'

const ChatComponent = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-container">
      <h2>All Chats</h2>
      <ul>
        {chats.map((chat, index) => (
          <li key={index} onClick={() => onSelectChat(chat)}>
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatComponent;
