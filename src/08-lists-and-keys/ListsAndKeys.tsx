import React, { FC } from "react";

const numbers = [
  {
    name: "Andris",
    desciption: "puukaina un bleeej",
    image: {
      src: "te ir links uz image",
    },
  },
  {
    name: "Janis",
    desciption: "puukaina un bleeej",
    image: {
      src: "te ir links uz image",
    },
  },
  {
    name: "Artūrs",
    desciption: "puukaina un bleeej",
    image: {
      src: "te ir links uz image",
    },
  },
  {
    name: "Vitalijs",
    desciption: "puukaina un bleeej",
    image: {
      src: "te ir links uz image",
    },
  },
  {
    name: "Pēteris",
    desciption: "puukaina un bleeej",
    image: {
      src: "te ir links uz image",
    },
  },
];

const randomFunction = () => {};
//()=>{} - anonīmā arrow funkcija
//function(){}
const mappedElements = () => {
  console.log();
  return <h1>lala</h1>;
};

const ListsAndKeys: FC = () => {
  return (
    <div>
      <h1>Hello ListsAndKeys</h1>
      {numbers.map((item, index) => {
        console.log("index:", index, "item", item);
        return <h1 key={item.name}>{item.name}</h1>;
      })}
    </div>
  );
};

export default ListsAndKeys;
