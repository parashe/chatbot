// In Options.js

import React from "react";
import Options from "./Options";

export const AmericanFestivals = (props) => {
  const options = [
    {
      name: "Independence Day (4th of July)",
      handler: props.actionProvider.handleAmericalFestival,
      id: 1,
    },
    {
      name: "Thanksgiving",
      andler: props.actionProvider.handleAmericalFestival,
      id: 2,
    },
    // Add more American festivals as needed
  ];
  return <Options options={options} title="American Festivals" {...props} />;
};

export const SouthAmericanFestivals = (props) => {
  const options = [
    {
      name: "Carnival",
      handler: props.actionProvider.handleSouthAmericanFestival,
      id: 1,
    },
    {
      name: "Inti Raymi",
      handler: props.actionProvider.handleSouthAmericanFestival,
      id: 2,
    },
  ];
  return (
    <Options options={options} title="South American Festivals" {...props} />
  );
};

export const KoreanFestivalOptions = (props) => {
  const options = [
    {
      name: "Korean New Year",
      handler: props.actionProvider.handleKoreanFestival,
      id: 1,
    },
    {
      name: "Korean Valentine's Day",
      handler: props.actionProvider.handleKoreanFestival,
      id: 2,
    },
    {
      name: "Korean Hanukkah",
      handler: props.actionProvider.handleKoreanFestival,
      id: 3,
    },
    {
      name: "Korean Hanukkah",
      handler: props.actionProvider.handleKoreanFestival,
      id: 4,
    },
  ];
  return <Options options={options} title="Korean Festivals" {...props} />;
};

export const SpanishFestivalOptions = (props) => {
  const options = [
    {
      name: "Carnaval",
      handler: props.actionProvider.handleSpanishFestival,
      id: 1,
    },
    {
      name: "Navidad",
      handler: props.actionProvider.handleSpanishFestival,
      id: 2,
    },
  ];
  return <Options options={options} title="Spanish Festivals" {...props} />;
};

export const JapaneseFestivalOptions = (props) => {
  const options = [
    {
      name: "Birthday",
      handler: props.actionProvider.handleJapaneseFestival,
      id: 1,
    },
    {
      name: "Halloween",
      handler: props.actionProvider.handleJapaneseFestival,
      id: 2,
    },
  ];
  return <Options options={options} title="Japanese Festivals" {...props} />;
};

export const ChineseFestivalOptions = (props) => {
  const options = [
    {
      name: "Dragon Boat Festival",
      handler: props.actionProvider.handleChineseFestival,
      id: 1,
    },
    {
      name: "Mid-Autumn Festival",
      andler: props.actionProvider.handleChineseFestival,
      id: 2,
    },
  ];
  return <Options options={options} title="Chinese Festivals" {...props} />;
};

export const PortugueseFestivalOptions = (props) => {
  const options = [
    {
      name: "Portuguese New Year",
      handler: props.actionProvider.handleProtugueseFestival,
      id: 1,
    },
    {
      name: "Portuguese Valentine's Day",
      handler: props.actionProvider.handleProtugueseFestival,
      id: 2,
    },
  ];
  return <Options options={options} title="Portuguese Festivals" {...props} />;
};

export const IndianFestivalOptions = (props) => {
  const options = [
    {
      name: "Ganesh Chaturthi",
      handler: props.actionProvider.handleIndianFestival,
      id: 1,
    },
    {
      name: "Holi",
      handler: props.actionProvider.handleIndianFestival,
      id: 2,
    },
  ];
  return <Options options={options} title="Indian Festivals" {...props} />;
};

export const EnglishFestivalOptions = (props) => {
  const options = [
    {
      name: "New Year's Day",
      handler: props.actionProvider.handleEnglishFestival,
      id: 1,
    },
    {
      name: "Christmas",
      handler: props.actionProvider.handleEnglishFestival,
      id: 2,
    },
  ];
  return <Options options={options} title="English Festivals" {...props} />;
};
