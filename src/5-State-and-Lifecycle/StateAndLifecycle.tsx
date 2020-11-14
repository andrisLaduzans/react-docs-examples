import React, { FC, useEffect, useState } from "react";

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

//piemērs līdzīgam objektam steitā
// const state = {
//   date: new Date(),
// };

// componentDidMount() {
//   }

//   componentWillUnmount() {
//   }
// didMount ar hookiem var aizvietot ar useEffect

const Clock = () => {
  const [user, setUser] = useState({ name: "Andris" });
  const [color, setColor] = useState("skyblue");

  //componentDidMount()
  //bus tas pats kas
  //ja atstājam tukšu masivu tad useeefect izsaucas tikai tad, kad komponente uzrenderējas
  useEffect(() => {
    console.log(
      "šis console log nostras tikai vienreiz uzrenderejot komponenti"
    );
  }, []);

  //   componentWillUnmount() {
  //   }
  //  šis būs tas pats kad, useeffect ir return , jeb useeffect notrigero tad, kad komponente tiek noņemta no ekrāna
  useEffect(() => {
    return () => {
      console.log("šis izpildās tad, kad komonente pazūd no ekrāna");
    };
  }, []);

  //componentDidUpdate()
  //varetu būt aizvietojams ar useEffect, kurā ir padoti dependencies uz kuru nomaiņu jeb update šis useEffect ntrigerojas
  useEffect(() => {
    if (user.name === "Andris") {
      setColor("skyblue");
      return;
    }
    setColor("magenta");
  }, [user]);

  const handleToggle = () => {
    if (user.name === "Janis") {
      setUser({ name: "Andris" });
      return;
    }
    setUser({ name: "Janis" });
  };

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Hello, world!</h1>
      <h2>It is {user.name}.</h2>
      <button onClick={() => handleToggle()}>toggle Name</button>
    </div>
  );
};

export default Clock;
