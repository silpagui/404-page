import React from "react";
import "./ContentBody.styles.scss";
import { Button } from "../Button/Button.component";

export function ContentBody(props) {
  return (
    <div>
      <h2 className="body-title">{props.title}</h2>
      <p className="content-text">{props.contentBody} </p>
      <Button url="/" text="Back to homepage" />
    </div>
  );
}
