import { useState } from "react";
import "./App.css";
import Name from "./name";
import Resume from "./resume";
import PersonalDetails from "./personaldDetails";
import Education from "./education";
import Experience from "./experience";

export default function App() {
  const [fullName, setFullName] = useState("Antonio Gagliardo");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  // const [schoolNumber, setSchoolNumber] = useState(1); // want to use this to add school numbers later

  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  // collapse

  const [showPersonalInformation, setShowPersonalInformation] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  const [experience, setExperience] = useState([]);

  const defaultData = {
    defaultFirstName: "Antonio",
    defaultLastName: "Gagliardo",
  };

  function handleFullNameChange(e) {
    setFullName(e);
    // console.log(firstName);
  }

  //collapse  sections
  function handleCollapseDetails() {
    setShowPersonalInformation(!showPersonalInformation);
  }
  function collapseEducation() {}

  return (
    <>
      <div id="leftSide">
        <div className="inputHeader">
          <h2>Personal Details</h2>
          <button onClick={handleCollapseDetails}>
            {showPersonalInformation ? "<" : "v"}{" "}
          </button>
        </div>
        <div
          id="personalDetails"
          className={showPersonalInformation ? "" : "hide"}
          style={{ display: showPersonalInformation ? "grid" : "none" }}
        >
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
        <h2>Experience</h2>

        <Experience setExperience={setExperience} />
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
          schoolName={schoolName}
          major={major}
          graduationDate={graduationDate}
        />
      </div>
    </>
  );
}
