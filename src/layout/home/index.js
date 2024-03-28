import React from 'react';
import ChatComponent from './components/chat';
import FaqsComponent from './components/faqs';
import './style/style.css';


const IndexHome = () => {
    return (
        <div className='Index-Home-Content'>
            <ChatComponent />
            <FaqsComponent />
        </div>
    );
};

export default IndexHome;