import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="leftSide">
        <h1>Inputs</h1>
      </div>
      <div id="rightSide">
        <h2>Resume Info</h2>
      </div>
    </>
  );
}

export default App;
