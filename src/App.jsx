import { useState } from "react";
import "./App.css";
import Name from "./name";
import Resume from "./resume";
import PersonalDetails from "./personaldDetails";
import Education from "./education";
import Experience from "./experience";

export default function App() {
  const [fullName, setFullName] = useState("Antonio Gagliardo");
  const [email, setEmail] = useState("ajgagliardo27@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+1(236)863 2759");
  const [address, setAddress] = useState("Vancouver, Canada");
  const [website, setWebsite] = useState("www.aj-gagliardo.github.io");

  // const [schoolNumber, setSchoolNumber] = useState(1); // want to use this to add school numbers later

  const [schoolName, setSchoolName] = useState("University Canada West");
  const [major, setMajor] = useState("Master in Business Administration");
  const [graduationDate, setGraduationDate] = useState("2024");

  // collapse

  const [showPersonalInformation, setShowPersonalInformation] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  const [experience, setExperience] = useState([]);

  const defaultData = {
    defaultFirstName: "Antonio",
    defaultLastName: "Gagliardo",
    defaultEmail: "ajgagliardo27@gmail.com",
    defaultPhone: "+1(236)863 2759",
    defaultAddress: "Vancouver, Canada",
    defaultWebsite: "www.aj-gagliardo.github.io",

    defaultEducation: "University Canada West",
    defaultMajor: "Master in Business Administration",
    defaultGraduation: 2023,
  };

  const defaultExperience = [
    {
      companyName: "Factors Group",
      position: "Operations Assistant",
      start: "March/2024",
      end: "current",
      location: "Coquitlam, Canada",
      description:
        "Worked in a cross-functional team to streamline operations proccesses through data-driven insights",
    },

    {
      companyName: "Contraloria General del Estado",
      position: "Training and Development / Administration Specialist",
      start: "August/2016",
      end: "August/2021",
      location: "Guayaquil, Ecuador",
      description:
        "State owned entity who controls all other government entities, facilitated training and development, managed attendance control systems, retrieved data from SQL and made reports",
    },
  ];

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
            phoneNumber={phoneNumber}
            setAddress={setAddress}
            address={address}
            setWebsite={setWebsite}
            website={website}
          />
        </div>
        <h2>Education</h2>
        <div id="educationSection">
          <Education
            setSchoolName={setSchoolName}
            setMajor={setMajor}
            setGraduationDate={setGraduationDate}
            schoolName={schoolName}
            major={major}
            graduationDate={graduationDate}
          />
        </div>
        <h2>Experience</h2>

        <Experience setExperience={setExperience} experience={experience} />
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
          experience={experience}
        />
      </div>
    </>
  );
}
