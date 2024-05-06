import { useState } from "react";
import Resume from "./resume";

export default function Name() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);

    // console.log(firstName);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
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
      {/* <h2>
        {firstName} {lastName}
      </h2> */}
    </div>
  );
}
