import React from "react";
import "./Button.styles.scss";

export function Button(props) {
  return (
    <a href={props.url} className="go-back-button">
      {props.text}
    </a>
  );
}
