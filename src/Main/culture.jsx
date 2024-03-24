import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Asian culture",
      handler: props.actionProvider.handleAsianCulture,
      id: 1
    },
    {
      name: "American culture",
      handler: props.actionProvider.handleAmericanCulture,
      id: 2
    },
    {
      name: "European culture",
      handler: props.actionProvider.handleEuropeanCulture,
      id: 3
    },
   
  ];
  return <Options options={options} title="Select Culture" {...props} />;
};

export default GeneralOptions;
