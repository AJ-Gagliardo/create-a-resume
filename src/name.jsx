import { useState } from "react";
import Resume from "./resume";

export default function Name({ handleFullNameChange, defaultData }) {
  const [firstName, setFirstName] = useState(defaultData.defaultFirstName);
  const [lastName, setLastName] = useState(defaultData.defaultLastName);

  function handleFirstName(e) {
    const value = e.target.value;
    setFirstName(value);
    handleFullNameChange(`${value} ${lastName}`);

    // console.log(firstName);9
  }

  function handleLastName(e) {
    const value = e.target.value;
    setLastName(value);
    handleFullNameChange(`${firstName} ${value}`);
  }

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={handleFirstName}
          placeholder="Antonio"
          value={firstName}
        ></input>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={handleLastName}
          placeholder="Gagliardo"
          value={lastName}
        ></input>
      </div>
    </div>
  );
}
