import React, { useState, useEffect } from 'react';
import ChatComponent from './components/chat';
import FaqsComponent from './components/faqs';
import ConectionScreen from '../../components/coneccion/coneccion';
import './style/style.css';

const IndexHome = () => {
  const [isOnline] = useState(navigator.onLine);
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    { id: 1, name: 'User 1', messages: ['Message 1', 'Message 2'] },
    { id: 2, name: 'User 2', messages: ['Message 3', 'Message 4'] },
  ];

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    // Implementar la lógica para enviar mensajes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSelectedChat(null);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const containerClass = isOnline ? 'Index-Home-Content' : 'Index-Home-Connection';

  return (
    <div className={containerClass}>
      {!isOnline && <ConectionScreen />}
      {isOnline && (
        <>
          <ChatComponent chats={chats} onSelectChat={handleSelectChat} />
          <FaqsComponent selectedChat={selectedChat} onSendMessage={handleSendMessage} />
        </>
      )}
    </div>
  );
};

export default IndexHome;
