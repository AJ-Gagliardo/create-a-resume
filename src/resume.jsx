import { useState } from "react";
import Name from "./name";
import "./resume.css";

export default function Resume({
  fullName,
  email,
  phoneNumber,
  address,
  website,
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
      </div>
    </>
  );
}
