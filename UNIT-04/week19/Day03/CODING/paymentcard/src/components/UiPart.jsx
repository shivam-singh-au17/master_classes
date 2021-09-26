import React from "react";
import "./UiPart.css";

export default function UiPart(props) {
  return (
    <div className="container">
      <div className="main" style={{ backgroundColor: props.color }}>
        <p>{props.date}</p>
        <div>{props.case}</div>
        <h1>{props.gift}</h1>
        <h1>{props.pay}</h1>
        <p>{props.desktop}</p>
      </div>
    </div>
  );
}
