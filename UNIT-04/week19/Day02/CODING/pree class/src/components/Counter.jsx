import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  const handelIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <h1>Shivam Counter Incriment App</h1>
      <h2>{counter}</h2>
      <button onClick={() => handelIncrement(1)}>ADD</button>
      <button onClick={() => handelIncrement(-1)}>REDUCE</button>
    </>
  );
}
