import React from "react";

interface Props {
  celsius: number;
}
function BoilingVerdict({ celsius }: Props) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict;
