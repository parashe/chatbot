import React from 'react';
import './App.css';
import ChatbotContainer from "./Main/index"

function App() {
  const [showBot, toggleBot] = React.useState(false);
  const toggleChatbot = () => {
    toggleBot(!showBot);
  };

  return (
    <div className="App">
  <div className="w-full h-screen flex flex-col items-center bg-[#064e3b] dark:bg-black">
    <div className="background-container flex flex-col justify-center items-center h-full w-full">
      {/* Content of your app goes here */}
      <h2 className="text-2xl  max-w-2xl  text-white font-black uppercase dark:text-white leading-relaxed" style={{ lineHeight: "1.2" }}>
        Hello welcome to chatbot demo. Please click on messenger button to chat with our bot.
      </h2>
    </div>
    <div className="app-container">
      <div className="messenger-icon" onClick={toggleChatbot}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 cursor-pointer" color="#0084FF">
          <path fill="currentColor" d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/>
        </svg>
      </div>
      {showBot && (
        <div className="chatbot-container">
          <ChatbotContainer onClose={toggleChatbot} />
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default App;
