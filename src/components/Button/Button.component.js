import React from "react";
import "./Button.styles.scss";

export function Button({ text, url }) {
  return (
    <a href={url} className="go-back-button">
      {text}
    </a>
  );
}
