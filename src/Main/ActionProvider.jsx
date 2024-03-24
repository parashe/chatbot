import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNoInformation = () => {
    const botMessage = createChatBotMessage(
      "I am sorry, I didn't get that. Please try again."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOptions = (options) => {
    const message = createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "GeneralOptions",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleAmericanCulture = () => {
    const message = createChatBotMessage("Select Language", {
      widget: "AmericanLanguage",
      options: "AmericanLanguage",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleEuropeanCulture = () => {
    const message = createChatBotMessage("Select Language", {
      widget: "EuropeanLanguage",
      options: "EuropeanLanguage",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleAsianCulture = () => {
    const message = createChatBotMessage("Select Language", {
      widget: "AsianLanguage",
      options: "AsianLanguage",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // New handlers for food options
  const handleAmericanFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "AmericanFoodOptions",
      options: "AmericanFoodOptions",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleSouthAmericanFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "SouthAmericanFoodOptions",
      options: "SouthAmericanFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleEnglishFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "EnglishFoodOptions",
      options: "EnglishFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleSpanishFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "SpanishFoodOptions",
      options: "SpanishFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handlePortugueseFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "PortugueseFoodOptions",
      options: "PortugueseFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleChineseFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "ChineseFoodOptions",
      options: "ChineseFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleIndianFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "IndianFoodOptions",
      options: "IndianFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleJapaneseFoodOptions = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "JapaneseFoodOptions",
      options: "JapaneseFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleEuropeanFood = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "EuropeanFoodOptions",
      options: "EuropeanFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleKoreanFoodOptions = () => {
    const message = createChatBotMessage("Select Festival Option", {
      widget: "KoreanFoodOptions",
      options: "KoreanFoodOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  //festival

  const handleEnglishFood = () => {
    const message = createChatBotMessage("Select festival Option", {
      widget: "EnglishFestivalOptions",
      options: "EnglishFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleKoreanFood = () => {
    const message = createChatBotMessage("Select Festival Option", {
      widget: "KoreanFestivalOptions",
      options: "KoreanFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleAmericanFood = () => {
    const message = createChatBotMessage("Select festival Option", {
      widget: "AmericanFestivals",
      options: "AmericanFestivals",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleSouthAmericanFood = () => {
    const message = createChatBotMessage("Select festival Option", {
      widget: "SouthAmericanFestivals",
      options: "SouthAmericanFestivals",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleIndianFood = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "IndianFestivalOptions",
      options: "IndianFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleJapaneseFood = () => {
    const message = createChatBotMessage("Select Festival Option", {
      widget: "JapaneseFestivalOptions",
      options: "JapaneseFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleChineseFood = () => {
    const message = createChatBotMessage("Select Festival Option", {
      widget: "ChineseFestivalOptions",
      options: "ChineseFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handlePortugueseFood = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "PortugueseFestivalOptions",
      options: "PortugueseFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleSpanishFood = () => {
    const message = createChatBotMessage("Select Food Option", {
      widget: "SpanishFestivalOptions",
      options: "SpanishFestivalOptions",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  //coutnryr
  const handleAmericalFestival = () => {
    // First message recommending to go to America
    const recommendationMessage = createChatBotMessage(
      `Great! We recommend you to go to America.`
    );

    // Second message asking if the user would like to schedule an appointment
    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleSouthAmericanFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to Brazil , Mexico, Colombia`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleKoreanFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to South Korea`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleSpanishFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to Spain`
    );
    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };
  const handleChineseFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to China`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handlePortugueseFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to Portugal`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleJapaneseFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to Japan`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleIndianFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to India , Pakistan, Bangladesh`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleEnglishFestival = () => {
    const recommendationMessage = createChatBotMessage(
      `Great we recommend you to go to United Kingdom`
    );

    const appointmentMessage = createChatBotMessage(
      `Great! Would you like to schedule an appointment?`,
      {
        withAvatar: true,
        widget: "AppointmentOptions",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, recommendationMessage, appointmentMessage],
    }));
  };

  const handleDateTimeSelected = (selectedDateTime) => {
    console.log("Selected date and time:", selectedDateTime);

    if (selectedDateTime) {
      const botMessage = createChatBotMessage(
        `Your appointment is scheduled for ${selectedDateTime.toLocaleString()}. See you soon!`
      );

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      console.error("Selected date and time is null or undefined.");
    }
  };

  const handleDateTimeSelection = () => {
    // Render DateTimePickerComponent
    const message = createChatBotMessage("Please select a date and time:", {
      widget: "DateTimePicker",
      options: "DateTimePicker",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleNo = () => {
    const botMessage = createChatBotMessage(`No problem. Have a nice day!`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOptions,
            handleAmericanCulture,
            handleEuropeanCulture,
            handleAsianCulture,
            // Adding food options handlers
            handleAmericanFoodOptions,
            handleSouthAmericanFoodOptions,
            handleEnglishFoodOptions,
            handleSpanishFoodOptions,
            handlePortugueseFoodOptions,
            handleChineseFoodOptions,
            handleIndianFoodOptions,
            handleJapaneseFoodOptions,
            handleEuropeanFood,
            handleKoreanFoodOptions,
            // Adding food handlers
            handleKoreanFood,
            handleAmericanFood,
            handleSouthAmericanFood,
            handleChineseFood,
            handleSpanishFood,
            handlePortugueseFood,
            handleJapaneseFood,
            handleIndianFood,

            // Adding festival handlers
            handleAmericalFestival,
            handleSouthAmericanFestival,

            handleKoreanFestival,
            handleSpanishFestival,
            handleChineseFestival,
            handlePortugueseFestival,
            handleJapaneseFestival,
            handleIndianFestival,
            handleEnglishFestival,
            handleEnglishFood,
            handleNoInformation,
            handleDateTimeSelection,
            handleDateTimeSelected,
            handleNo,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
