import React, { useState } from "react";
import { Task } from "./Task";

export default function ShowData() {
  const [showdata, setShowData] = useState(true);
  const [error, setError] = useState(false);

  if (showdata) {
    return (
      <div>
        <h1>Loding...</h1>
        <button
          onClick={() => {
            setShowData(false);
            setError(true);
          }}
        >
          Loding Not Done & Error True
        </button>
        <button
          onClick={() => {
            setShowData(false);
            setError(false);
          }}
        > Loding Done & Error False </button>
      </div>
    );
  }

  if (error === true) {
    return <h1>Somthing Went Wrong</h1>;
  }
  return (
    <div>
      <Task />
    </div>
  );
}
