import React, { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import Chatbot from 'react-chatbot-kit';

const ChatbotContainer = ({ onClose }) => {
  const [showChatbot, setShowChatbot] = useState(true);



  const closeChatbot = () => {
    setShowChatbot(false);
    onClose(); // Call onClose callback when closing chatbot
  };

  return (
    <div style={{ position: 'relative' }}>
      {showChatbot && (
        <div>
          <button
            onClick={closeChatbot}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: '9999', // Ensure the button appears above the chatbot
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6 cursor-pointer" color="#e5e7eb">
              <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
            </svg>
          </button>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotContainer;
