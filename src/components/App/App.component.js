import React from "react";
import { TitlePage } from "../TitlePage/TitlePage.component";
import { ContentBody } from "../ContentBody/ContentBody.component";
import "./App.styles.scss";
import { Copyright } from "../Copyright/Copyright.component";
import ScareCrow from "../../assets/images/scarecrow.png";

export function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <TitlePage title="404 NOT FOUND" />
      </header>
      <main className="main-body">
        <div className="main-image">
          <img
            src={ScareCrow}
            alt="scarecrow"
            width="286"
            height="238"
            className="scarecrow-image"
          />
        </div>
        <div className="main-content">
          <ContentBody
            title="I have bad news for you"
            contentBody="The page you are looking for might be removed or is temporarily
        unavailable"
          />
        </div>
      </main>
      <footer className="main-footer">
        <Copyright />
      </footer>
    </div>
  );
}
