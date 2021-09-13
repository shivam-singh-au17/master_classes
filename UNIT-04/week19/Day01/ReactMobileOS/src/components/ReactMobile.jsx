import React from "react";

export default function ReactMobile(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        <li> {props.list1}</li>
        <li> {props.list2}</li>
        <li> {props.list3}</li>
        <li> {props.list4}</li>
      </ul>
    </div>
  );
}
