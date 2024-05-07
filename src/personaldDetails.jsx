import { useState } from "react";

export default function PersonalDetails() {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input name="email"></input>
      <label htmlFor="phone">Phone Number</label>
      <input name="phone"></input>
      <label htmlFor="address">Address</label>
      <input name="address"></input>
    </>
  );
}
