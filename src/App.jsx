import { useState } from "react";
import "./App.css";
import Name from "./name";
import Resume from "./resume";
import PersonalDetails from "./personaldDetails";

export default function App() {
  const [fullName, setFullName] = useState("Antonio Gagliardo");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

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
        <h2>Personal Details</h2>
        <div id="personalDetails">
          <Name
            fullName={fullName}
            setFullName={setFullName}
            handleFullNameChange={handleFullNameChange}
            defaultData={defaultData}
          />
          <PersonalDetails
            setEmail={setEmail}
            email={email}
            setPhoneNumber={setPhoneNumber}
            setAddress={setAddress}
            setWebsite={setWebsite}
          />
        </div>
      </div>
      <div id="rightSide">
        <h2>Resume Info</h2>
        <div className="box"></div>
        <Resume
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          website={website}
        />
      </div>
    </>
  );
}
