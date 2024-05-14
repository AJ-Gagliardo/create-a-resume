import { useState } from "react";

import "./resume.css";
import MapExperience from "./mapExperience";

export default function Resume({
  fullName,
  email,
  phoneNumber,
  address,
  website,
  schoolName,
  major,
  graduationDate,
  experience,
}) {
  return (
    <>
      <div id="resumeHead">
        <div>
          <h2>{fullName}</h2>
        </div>
        <div className="oneRow">
          <h4>{email}</h4>
          <h4>{phoneNumber}</h4>
          <h4>{address}</h4>
          <h4>
            <a href={website}>{website}</a>
          </h4>
        </div>
        <hr></hr>
      </div>
      <div>
        <h2>Education</h2>
        <hr></hr>

        <h3>{schoolName}</h3>
        <div className="oneFlex">
          <p>{major}</p>
          <p>{graduationDate}</p>
        </div>
      </div>
      <h2>Experience</h2>
      <hr></hr>
      <div>
        <MapExperience experience={experience} />
      </div>
    </>
  );
}
