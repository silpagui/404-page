import React from "react";
import "./ContentBody.styles.scss";
import { Button } from "../Button/Button.component";

export function ContentBody({ title, contentBody }) {
  return (
    <div>
      <h2 className="body-title">{title}</h2>
      <p className="content-text">{contentBody} </p>
      <Button url="/" text="Back to homepage" />
    </div>
  );
}
