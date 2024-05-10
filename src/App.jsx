import { useState } from "react";
import "./App.css";
import Name from "./name";
import Resume from "./resume";
import PersonalDetails from "./personaldDetails";
import Education from "./education";

export default function App() {
  const [fullName, setFullName] = useState("Antonio Gagliardo");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  const [schoolNumber, setSchoolNumber] = useState(1); // want to use this to add school numbers later

  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  // collapse

  const [showPersonalInformation, setShowPersonalInformation] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

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
        <button>{showPersonalInformation ? "<" : "v"} </button>
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
        <h2>Education</h2>
        <div id="educationSection">
          <Education
            setSchoolName={setSchoolName}
            setMajor={setMajor}
            setGraduationDate={setGraduationDate}
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
