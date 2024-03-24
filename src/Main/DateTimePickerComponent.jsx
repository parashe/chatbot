import React, { useState } from "react";

const DateTimePickerComponent = ({ actions }) => {
  console.log("actions", actions);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDateTimeSubmit = () => {
    const selectedDateTime = new Date(selectedDate);
    const hoursMinutes = selectedTime.split(":");
    selectedDateTime.setHours(hoursMinutes[0]);
    selectedDateTime.setMinutes(hoursMinutes[1]);
    actions.handleDateTimeSelected(selectedDateTime); // Accessing handleDateTimeSelected from actions prop
  };

  return (
    <div className="date-time-picker">
      {" "}
      {/* Add className for styling */}
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <input type="time" value={selectedTime} onChange={handleTimeChange} />
      <button onClick={handleDateTimeSubmit}>Submit</button>
    </div>
  );
};

export default DateTimePickerComponent;
