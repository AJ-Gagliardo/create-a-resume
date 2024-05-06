import { useState } from "react";
import Name from "./name";

export default function Resume() {
  const [fullName, setFullName] = useState("");

  // Define a function to handle changes in the full name
  function handleFullNameChange(newFullName) {
    setFullName(newFullName);
  }

  return (
    <div>
      <Name onFullNameChange={handleFullNameChange} />
      {/* <h2>Full Name: {handleFullNameChange}</h2> */}
    </div>
  );
}
