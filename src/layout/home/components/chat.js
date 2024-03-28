/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdMoreVert } from 'react-icons/md';
import '../style/chat.css';

const data = {
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg',
    username: 'owellandry',
    timestamp: '12:34 PM',
    status: 'online',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec maximus turpis.'
}

const ChatComponent = () => {
    return (
        <div className='chat-container'>
            <div className='chat-header'>
                <span className='chat-welcome'>Bienvenido <a href='#'>{data.username}</a></span>
            </div>
            <div className='message-container'>
                <div className='user-info'>
                    <img className='user-avatar' src={data.avatar} alt='usuario' />
                    <span className='user-status' title={data.status}></span>
                </div>
                <div className='message-content'>
                    <div className='message-info'>
                        <span className='username'>{data.username}</span>
                        <span className='timestamp'>{data.timestamp}</span>
                    </div>
                    <div className='message' title={data.message}>
                        {data.message}
                    </div>
                </div>
                <div className='message-options'>
                    <MdMoreVert size={20} />
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
