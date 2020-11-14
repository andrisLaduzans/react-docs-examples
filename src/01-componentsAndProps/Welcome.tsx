import React, { FC } from "react";

// const classicFunction = function () {};
// const arrowFunction = () => {};
// //anonymous =
// // ()=>{}

//par objektiem in general
const myObject = {
  a: "Andris",
  b: "Laduzans",
  c: "35",
};

const newName = myObject.a;
const newLastName = myObject.b;
const myAge = myObject.c;
//newName == 'Andris'
//object destructing
const { a, b, c } = myObject;

interface Animal {
  type: string;
  desciption: string;
  image: {
    src: string;
  };
}

interface Props {
  age: string;
  lastName: string;
  name: string;
  onClick: () => void;
  animal: Animal;
}

// const Welcome = ({ name, lastName, age }: Props) => {
//   return (
//     <h1>
//       Hello, {name} {lastName} {age}
//     </h1>
//   );
// };

// export default Welcome;

//tips FC, kuram ir generics, un generic tips ir atvasināts no objekta
// FC<P = {}>

const Welcome = ({ name, lastName, age, onClick, animal }: Props) => {
  console.log({ name, lastName, age, onClick });

  //   const typeOfAnimal = animal.type;
  //   const { type, image, desciption } = animal;
  //   const { src } = image;

  return (
    <h1>
      Hello, {name} {lastName} {age}
      <button onClick={() => onClick()}>click me!</button>
      <h1>{animal.type}</h1>
    </h1>
  );
};

export default Welcome;

// const obj: { a: string; b: string } = { a: "a", b: "b" };

// interface SomeObj {
//   a: string;
//   b: string;
// }

// const uzdevums = ({ a, b }: SomeObj) => {
//   //...
//   return input;
// };
