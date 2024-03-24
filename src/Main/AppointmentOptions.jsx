
import Options from "./Options";

const AppointmentOptions = (props) => {
  const options = [
    {
      name: "Yes",
      handler: props.actionProvider.handleDateTimeSelection,
      id: 1
    },
    {
      name: "No",
      handler: props.actionProvider.handleNo,
      id: 2
    },
   
  ];
  return <Options options={options} title="Do you need an appointment" {...props} />;
};

export default AppointmentOptions;
