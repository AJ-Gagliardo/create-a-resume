import { useState } from "react";
import "./App.css";
import Name from "./name";
import Resume from "./resume";

export default function App() {
  const [fullName, setFullName] = useState("Antonio Gagliardo");

  const defaultData = {
    defaultFirstName: "Antonio",
    defaultLastName: "Gagliardo",
  };

  function handleFullNameChange(e) {
    setFullName(e);
    // console.log(firstName);
  }

  return (
    <>
      <div id="leftSide">
        <h1>Inputs</h1>
        <Name
          fullName={fullName}
          setFullName={setFullName}
          handleFullNameChange={handleFullNameChange}
          defaultData={defaultData}
        />
      </div>
      <div id="rightSide">
        <h2>Resume Info</h2>
        <div className="box"></div>
        <Resume fullName={fullName} />
      </div>
    </>
  );
}
