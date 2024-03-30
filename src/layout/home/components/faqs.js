// src/layout/home/components/faqs.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FaqsComponent = () => {
  const { chatId } = useParams();
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    if (chatId) {
      fetch(`https://660598892ca9478ea180b945.mockapi.io/api/v1/chats/${chatId}`)
        .then(response => response.json())
        .then(data => setChatData(data))
        .catch(error => console.error('Error fetching chat data:', error));
    }
  }, [chatId]);

  return (
    <div className='Faqs-Content'>
      {chatData ? (
        <div>
          <h1 className='Faqs-h1'>Detalles del chat</h1>
          <p>Nombre: {chatData.Name}</p>
          <p>Mensaje: {chatData.Message}</p>
        </div>
      ) : (
        <p>Cargando información del chat...</p>
      )}
    </div>
  );
};

export default FaqsComponent;
