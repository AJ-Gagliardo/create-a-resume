import { useState } from "react";

export default function PersonalDetails({
  setEmail,
  setPhoneNumber,
  setAddress,
  setWebsite,
}) {
  function handleSetEmail(e) {
    const value = e.target.value;
    setEmail(value);
    // console.log(value);
  }

  function handleSetPhoneNumber(e) {
    const value = e.target.value;
    setPhoneNumber(value);
  }

  function handleSetAddress(e) {
    const value = e.target.value;
    setAddress(value);
  }

  function handleSetWebsite(e) {
    const value = e.target.value;
    setWebsite(value);
  }

  return (
    <>
      <label htmlFor="email">Email</label>
      <input name="email" onChange={handleSetEmail}></input>
      <label htmlFor="phone">Phone Number</label>
      <input name="phone" onChange={handleSetPhoneNumber}></input>
      <label htmlFor="address">Address</label>
      <input name="address" onChange={handleSetAddress}></input>
      <label htmlFor="website">Personal Website</label>
      <input name="website" onChange={handleSetWebsite}></input>
    </>
  );
}
