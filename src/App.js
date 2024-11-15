import React from "react";
import "./App.css";
import ChatbotContainer from "./Main/index";

function App() {
  const [showBot, toggleBot] = React.useState(false);

  const toggleChatbot = () => {
    toggleBot(!showBot);
  };

  return (
    <div className="App">
      <div className="background-container w-full h-screen flex flex-col items-center justify-center relative">
        {/* Gradient animated background */}
        <div className="gradient-overlay absolute inset-0"></div>

        {/* Welcome Text */}
        <div className="text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl max-w-2xl uppercase font-extrabold text-white leading-relaxed">
            Hello, welcome to the chatbot demo!
          </h2>
          <p className="text-lg sm:text-xl mt-4 text-white opacity-90">
            Click on the messenger button to chat with our bot.
          </p>
        </div>

        {/* Messenger Icon */}
        <div className="messenger-icon-container relative z-10 mt-8">
          <div
            className="messenger-icon bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg cursor-pointer animate-bounce"
            onClick={toggleChatbot}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-10 w-10"
            >
              <path
                fill="currentColor"
                d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
              />
            </svg>
          </div>
        </div>

        {/* Chatbot Container */}
        {showBot && (
          <div className="chatbot-container fixed bottom-10 right-10 bg-white p-6 rounded-lg shadow-xl w-80 max-w-full z-20">
            <ChatbotContainer onClose={toggleChatbot} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
