import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import GeneralOptions from "./culture";
import { AmericanLanguage, AsianLanguage, EuropeanLanguage } from "./language";
import {
  AmericanFoodOptions,
  SouthAmericanFoodOptions,
  KoreanFoodOptions,
  IndianFoodOptions,
  JapaneseFoodOptions,
  ChineseFoodOptions,
  PortugueseFoodOptions,
  SpanishFoodOptions,
  EnglishFoodOptions,
} from "./food";
import {
    AmericanFestivals,
  ChineseFestivalOptions,
  EnglishFestivalOptions,
  IndianFestivalOptions,
  JapaneseFestivalOptions,
  KoreanFestivalOptions,
  PortugueseFestivalOptions,
  SouthAmericanFestivals,
  SpanishFestivalOptions,
} from "./festival";
import DateTimePickerComponent from "./DateTimePickerComponent";
import AppointmentOptions from "./AppointmentOptions";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello. Nice to meet you.`),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        withAvatar: false,
        delay: 400,
        widget: "GeneralOptions",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "GeneralOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "AmericanLanguage",
      widgetFunc: (props) => <AmericanLanguage {...props} />,
      mapStateToProps: ["culture"],
    },
    {
      widgetName: "EuropeanLanguage",
      widgetFunc: (props) => <EuropeanLanguage {...props} />,
      mapStateToProps: ["culture"],
    },
    {
      widgetName: "AsianLanguage",
      widgetFunc: (props) => <AsianLanguage {...props} />,
      mapStateToProps: ["culture"],
    },
    // Food options widgets
    {
      widgetName: "AmericanFoodOptions",
      widgetFunc: (props) => <AmericanFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
        widgetName:"EnglishFoodOptions",
        widgetFunc: (props) => <EnglishFoodOptions {...props} />,
        mapStateToProps: ["messages"],
    },
    {
      widgetName: "SouthAmericanFoodOptions",
      widgetFunc: (props) => <SouthAmericanFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "KoreanFoodOptions",
      widgetFunc: (props) => <KoreanFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "IndianFoodOptions",
      widgetFunc: (props) => <IndianFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "JapaneseFoodOptions",
      widgetFunc: (props) => <JapaneseFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "ChineseFoodOptions",
      widgetFunc: (props) => <ChineseFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "PortugueseFoodOptions",
      widgetFunc: (props) => <PortugueseFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "SpanishFoodOptions",
      widgetFunc: (props) => <SpanishFoodOptions {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "KoreanFestivalOptions",
      widgetFunc: (props) => <KoreanFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "EnglishFestivalOptions",
      widgetFunc: (props) => <EnglishFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "SpanishFestivalOptions",
      widgetFunc: (props) => <SpanishFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "EnglishFestivalOptions",
      widgetFunc: (props) => <EnglishFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
        widgetName:"AmericanFestivals",
        widgetFunc: (props) => <AmericanFestivals {...props} />,
        mapStateToProps: ["festival"],
    },
    {
      widgetName: "PortugueseFestivalOptions",
      widgetFunc: (props) => <PortugueseFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "ChineseFestivalOptions",
      widgetFunc: (props) => <ChineseFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "JapaneseFestivalOptions",
      widgetFunc: (props) => <JapaneseFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "IndianFestivalOptions",
      widgetFunc: (props) => <IndianFestivalOptions {...props} />,
      mapStateToProps: ["festival"],
    },
    {
      widgetName: "SouthAmericanFestivals",
      widgetFunc: (props) => <SouthAmericanFestivals {...props} />,
      mapStateToProps: ["festival"],
    },

    {
        widgetName: "DateTimePicker",
        widgetFunc: (props) => <DateTimePickerComponent {...props} />,
        mapStateToProps: ["messages"],
      },

      {
        widgetName: "AppointmentOptions",
        widgetFunc: (props) => <AppointmentOptions {...props} />,
        mapStateToProps: ["messages"],
      }
   
  ],
};

export default config;
