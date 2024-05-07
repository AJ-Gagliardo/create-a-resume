import { useState } from "react";
import Resume from "./resume";

export default function Name({ handleFullNameChange }) {
  const [firstName, setFirstName] = useState("A");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
    handleFullNameChange(`${firstName} ${lastName}`);

    // console.log(firstName);9
  }

  function handleLastName(e) {
    setLastName(e.target.value);
    handleFullNameChange(`${firstName} ${lastName}`);
  }

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" onChange={handleFirstName}></input>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" onChange={handleLastName}></input>
      </div>
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  );
}
