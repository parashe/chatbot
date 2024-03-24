import Options from "./Options";

export const AmericanLanguage = (props) => {
  const options = [
    {
      name: "American English",
      handler: props.actionProvider.handleAmericanFoodOptions,
      id: 1,
    },
    {
      name: "South American ",
      handler: props.actionProvider.handleSouthAmericanFoodOptions,
      id: 2,
    },
  ];
  return <Options options={options} title="Select Language" {...props} />;
};

export const EuropeanLanguage = (props) => {
  const options = [
    {
      name: "English",
      handler: props.actionProvider.handleEnglishFoodOptions,
      id: 1,
    },
    {
      name: "Spanish ",
      handler: props.actionProvider.handleSpanishFoodOptions,
      id: 2,
    },
    {
      name: "Portuguese",
      handler: props.actionProvider.handlePortugueseFoodOptions,
      id: 3,
    },
  ];
  return <Options options={options} title="Select Language" {...props} />;
};

export const AsianLanguage = (props) => {
  const options = [
    {
      name: "Chinese",
      handler: props.actionProvider.handleChineseFoodOptions,
      id: 1,
    },
    {
      name: "Japanese",
      handler: props.actionProvider.handleJapaneseFoodOptions,
      id: 2,
    },
    {
      name: "Korean",
      handler: props.actionProvider.handleKoreanFoodOptions,
      id: 3,
    },
    {
      name: "Indian",
      handler: props.actionProvider.handleIndianFoodOptions,
      id: 4,
    },
  ];
  return <Options options={options} title="Select Language" {...props} />;
};
