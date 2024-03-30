//src/layout/home/components/chat.js

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { MdMoreVert, MdDelete, MdFileDownload } from 'react-icons/md';
import '../style/chat.css';

const ChatComponent = () => {
    const [chatData, setChatData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [showOptionsIndex, setShowOptionsIndex] = useState(null);
    const optionsRef = useRef(null);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setChatData(data))
            .catch(error => console.error('Error fetching chat data:', error));

        fetch('')
            .then(response => response.json())
            .then(data => setUserData(data[0]))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowOptionsIndex(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [optionsRef]);

    const toggleOptions = (index, event) => {
        event.stopPropagation();
        setShowOptionsIndex(index);
    };

    const closeOptions = () => {
        setShowOptionsIndex(null);
    };

    return (
        <div onClick={closeOptions}>
            {chatData && userData && (
                <div className='chat-container'>
                    <div className='chat-header'>
                        <span className='chat-welcome'>Bienvenido <a href='#'>{userData.name}</a></span>
                    </div>
                    <div className='message-scroll'>
                        {chatData.map((chat, index) => (
                            <div className='message-container' key={chat.ChatId}>
                                <div className='user-info'>
                                    <img className='user-avatar' src={chat.Avatar} alt='usuario' />
                                    <span className={`user-status ${chat.Status ? 'online' : 'offline'}`} title={chat.Status ? 'Online' : 'Offline'}></span>
                                </div>
                                <div className='message-content'>
                                    <div className='message-info'>
                                        <span className='username'>{chat.Name}</span>
                                    </div>
                                    <div className='message' title={chat.Message}>
                                        {chat.Message}
                                    </div>
                                </div>
                                <div className='options-container'>
                                    <div className='message-options' onClick={(event) => toggleOptions(index, event)}> {/* Toggle del menú de opciones */}
                                        <MdMoreVert size={20} />
                                    </div>
                                    {showOptionsIndex === index && (
                                        <div ref={optionsRef} className='options-dropdown' onClick={(event) => event.stopPropagation()}>
                                            <div className={`option ${showOptionsIndex === index ? 'option-delete' : ''}`} onClick={() => console.log('Eliminar chat')}>
                                                <MdDelete size={20} />
                                                <span>Eliminar chat</span>
                                            </div>
                                            <div className='option' onClick={() => console.log('Descargar chat')}>
                                                <MdFileDownload size={20} />
                                                <span>Descargar chat</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
