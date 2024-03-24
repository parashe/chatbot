import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
    message = message.toLowerCase();

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      actions.handleOptions({ withAvatar: true });
    } else if (message.includes("american")) {
      actions.handleAmericanCulture();
    } else if (message.includes("european")) {
      actions.handleEuropeanCulture();
    } else if (message.includes("asian")) {
      actions.handleAsianCulture();
    } else if (message.includes("food")) {
      if (message.includes("american")) {
        actions.handleAmericanFood();
      } else if (message.includes("south american")) {
        actions.handleSouthAmericanFoodOptions();
      } else if (message.includes("english")) {
        actions.handleEnglishFoodOptions();
      } else if (message.includes("spanish")) {
        actions.handleSpanishFoodOptions();
      } else if (message.includes("portuguese")) {
        actions.handlePortugueseFoodOptions();
      } else if (message.includes("chinese")) {
        actions.handleChineseFoodOptions();
      } else if (message.includes("indian")) {
        actions.handleIndianFoodOptions();
      } else if (message.includes("japanese")) {
        actions.handleJapaneseFoodOptions();
      }
    } else if (message.includes("festival")) {
      if (message.includes("korean")) {
        actions.KoreanFestivalOptions();
      }
      else if(message.includes("chinese")){
        actions.ChineseFestivalOptions();
      }
      else if(message.includes("japanese")){
        actions.JapaneseFestivalOptions();
      }
      else if(message.includes("portuguese")){
          actions.PortugueseFestivalOptions();
      }

      else if (message.includes("english")) {
        actions.handleEnglishFestivalOptions();
      }

      else if (message.includes("spanish")) {
        actions.handleSpanishFestivalOptions();
      }

      else if (message.includes("american")) {
        actions.handleAmericanFestivalOptions();
      }

      else if (message.includes("asian")) {
        actions.handleAsianFestivalOptions();
      }
      else if(message.includes("indian")){
        actions.handleIndianFestivalOptions();
      }
      else if(message.includes("american")){
        actions.handleAmericanFestivalOptions();
    }
    actions.handleAppointmentOptions();
  
   
}
else if(message.includes("appointment")){
    actions.handleAppointmentOptions();
}
else if(message.includes("no schedule")){
actions.handleNo();

}
if (message.includes('schedule appointment')) {
    actions.handleDateTimeSelection({withAvatar: true});
  }
else {
    actions.handleNoInformation();
}
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
