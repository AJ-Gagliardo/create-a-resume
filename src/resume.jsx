import { useState } from "react";
import Name from "./name";

export default function Resume() {
  const [fullName, setFullName] = useState("");

  // Define a function to handle changes in the full name
  // function handleFullNameChange(newFullName) {
  //   setFullName(newFullName);
  // }

  function handleFullNameChange({ firstName }) {
    setFullName(firstName);
    console.log({ firstName });
  }

  return (
    <div>
      <h2>{fullName}</h2>
    </div>
  );
}
