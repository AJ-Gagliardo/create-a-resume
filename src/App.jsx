import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Name from "./name";
import Resume from "./resume";

export default function App() {
  return (
    <>
      <div id="leftSide">
        <h1>Inputs</h1>
        <Name />
      </div>
      <div id="rightSide">
        <h2>Resume Info</h2>
        <Resume />
        <div className="box"></div>
      </div>
    </>
  );
}
