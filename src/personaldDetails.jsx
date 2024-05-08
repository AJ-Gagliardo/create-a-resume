import { useState } from "react";

export default function PersonalDetails({ setEmail }) {
  // handleSetEmail(){

  // }

  // handleSetPhoneNumber(){}

  // handleSetAddress()

  return (
    <>
      <label htmlFor="email">Email</label>
      <input name="email"></input>
      <label htmlFor="phone">Phone Number</label>
      <input name="phone"></input>
      <label htmlFor="address">Address</label>
      <input name="address"></input>
      <label htmlFor="website">Personal Website</label>
      <input name="website"></input>
    </>
  );
}
