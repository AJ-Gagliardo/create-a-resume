import { useState } from "react";
import Name from "./name";

export default function Resume({ fullName }) {
  return (
    <div>
      <h2>{fullName}</h2>
    </div>
  );
}
