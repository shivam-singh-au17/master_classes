import React from "react";
import "./Counter.css"

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  const handelIncrement = (value) => {
    setCounter(counter + value);
  };

  const handelMultiplier = (value) => {
    setCounter(counter * value);
  };
  return (
    <>
      <h1>React Hook - Counter</h1>
      <div className="counterValue">
        <h2>{counter}</h2>
      </div>
      <div className="AllBtn" >
        <button onClick={() => handelIncrement(1)}>Increment</button>
        <button onClick={() => handelIncrement(-1)}>Decrement </button>
        <button onClick={() => handelMultiplier(2)}>Doubly</button>
      </div>
    </>
  );
}
