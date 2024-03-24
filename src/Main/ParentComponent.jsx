// ParentComponent.js
import React, { useState } from 'react';
import DateTimePickerComponent from './DateTimePickerComponent';
import { createChatBotMessage } from 'react-chatbot-kit';
// Import the function if not already imported

const ParentComponent = () => {
  const [messages, setMessages] = useState([]);

  const handleDateTimeSelected = (selectedDateTime) => {
    console.log("Selected date and time:", selectedDateTime);
    const botMessage = createChatBotMessage(
      `Your appointment is scheduled for ${selectedDateTime.toLocaleString()}.`
    );
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  const handleDateTimeSelection = () => {
    const message = createChatBotMessage("Please select a date and time:", {
      widget: "DateTimePicker",
    });
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div>
      <DateTimePickerComponent actionProvider={{ handleDateTimeSelected }} />
      {/* Render messages or pass them to other components */}
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default ParentComponent;
