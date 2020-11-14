import React from "react";

const scaleNames: { [key: string]: string } = {
  c: "Celsius",
  f: "Fahrenheit",
};

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { temperature: "" };
//   }

//   handleChange(e) {
//     this.setState({ temperature: e.target.value });
//   }

//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

interface Props {
  scale: string;
  temperature: string;
  onTemperatureChange: (value: string) => void;
}

const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={(event) => handleChange(event)} />
    </fieldset>
  );
};

export default TemperatureInput;
