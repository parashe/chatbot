import Options from "./Options";

export const AmericanFoodOptions = (props) => {
  const options = [
    {
      name: "Burgers",
      handler: props.actionProvider.handleAmericanFood,
      id: 1,
    },
    {
      name: "Hot Dogs",
      handler: props.actionProvider.handleAmericanFood,
      id: 2,
    },
    {
      name: "BBQ Ribs",
      handler: props.actionProvider.handleAmericanFood,
      id: 3,
    },
    {
      name: "Apple Pie",
      handler: props.actionProvider.handleAmericanFood,
      id: 4,
    },
    {
      name: "Fried Chicken",
      handler: props.actionProvider.handleAmericanFood,
      id: 5,
    },
  ];
  return <Options options={options} title="American Food" {...props} />;
};

export const SouthAmericanFoodOptions = (props) => {
  const options = [
    {
      name: "Tacos",
      handler: props.actionProvider.handleSouthAmericanFood,
      id: 1,
    },
    {
      name: "Enchiladas",
      handler: props.actionProvider.handleSouthAmericanFood,
      id: 2,
    },
    {
      name: "Tamales",
      handler: props.actionProvider.handleSouthAmericanFood,
      id: 3,
    },
  ];
  return <Options options={options} title="South American Food" {...props} />;
};

export const KoreanFoodOptions = (props) => {
  const options = [
    {
      name: "Kimbap",
      handler: props.actionProvider.handleKoreanFood,
      id: 1,
    },
    {
      name: "Bibimbap",
      handler: props.actionProvider.handleKoreanFood,
      id: 2,
    },
    {
      name: "Japchae",
      handler: props.actionProvider.handleKoreanFood,
      id: 3,
    },
    {
      name: "Bibimbap",
      handler: props.actionProvider.handleKoreanFood,
      id: 4,
    },
  ];
  return <Options options={options} title="Korean Food" {...props} />;
};

export const IndianFoodOptions = (props) => {
  const options = [
    {
      name: "Paneer Butter Masala",
      handler: props.actionProvider.handleIndianFood,
      id: 1,
    },
    {
      name: "Butter Chicken",
      handler: props.actionProvider.handleIndianFood,
      id: 2,
    },
    {
      name: "Veg. Noodles",
      handler: props.actionProvider.handleIndianFood,
      id: 3,
    },
    {
      name: "Veg. Briyani",
      handler: props.actionProvider.handleIndianFood,
      id: 4,
    },
  ];
  return <Options options={options} title="Indian Food" {...props} />;
};

export const JapaneseFoodOptions = (props) => {
  const options = [
    {
      name: "Sushi",
      handler: props.actionProvider.handleJapaneseFood,
      id: 1,
    },
    {
      name: "Tempura",
      handler: props.actionProvider.handleJapaneseFood,
      id: 2,
    },
    {
      name: "Sashimi",
      handler: props.actionProvider.handleJapaneseFood,
      id: 3,
    },
  ];
  return <Options options={options} title="Japanese Food" {...props} />;
};

export const ChineseFoodOptions = (props) => {
  const options = [
    {
      name: "Dim Sum",
      handler: props.actionProvider.handleChineseFood,
      id: 1,
    },
    {
      name: "Noodles",
      handler: props.actionProvider.handleChineseFood,
      id: 2,
    },
    {
      name: "Ramen",
      handler: props.actionProvider.handleChineseFood,
      id: 3,
    },
  ];
  return <Options options={options} title="Chinese Food" {...props} />;
};
export const PortugueseFoodOptions = (props) => {
  const options = [
    {
      name: "Lasagna",
      handler: props.actionProvider.handlePortugueseFood,
      id: 1,
    },
    {
      name: "Canelones",
      handler: props.actionProvider.handlePortugueseFood,
      id: 2,
    },
    {
      name: "Macarrones",
      handler: props.actionProvider.handlePortugueseFood,
      id: 3,
    },
  ];
  return <Options options={options} title="Portuguese Food" {...props} />;
};

export const SpanishFoodOptions = (props) => {
  const options = [
    {
      name: "Ceviche",
      handler: props.actionProvider.handleSpanishFood,
      id: 1,
    },
    {
      name: "Tacos",
      handler: props.actionProvider.handleSpanishFood,
      id: 2,
    },
    {
      name: "Enchiladas",
      handler: props.actionProvider.handleSpanishFood,
      id: 3,
    },
  ];
  return <Options options={options} title="Spanish Food" {...props} />;
};

export const EnglishFoodOptions=(props)=>{
  const options=[
    {
      name:"Hamburger",
      handler:props.actionProvider.handleEnglishFood,
      id:1
    },
    {
      name:"Pizza",
      handler:props.actionProvider.handleEnglishFood,
      id:2
    },
    {
      name:"Sandwich",
      handler:props.actionProvider.handleEnglishFood,
      id:3
    }
  ]
  return <Options options={options} title="English Food" {...props} />
}
