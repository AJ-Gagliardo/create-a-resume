import { useState } from "react";

export default function PersonalDetails({
  setEmail,
  setPhoneNumber,
  setAddress,
  setWebsite,

  email,
  phoneNumber,
  address,
  website,
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
      <input name="email" onChange={handleSetEmail} value={email}></input>
      <label htmlFor="phone">Phone Number</label>
      <input
        name="phone"
        onChange={handleSetPhoneNumber}
        value={phoneNumber}
      ></input>
      <label htmlFor="address">Address</label>
      <input name="address" onChange={handleSetAddress} value={address}></input>
      <label htmlFor="website">Personal Website</label>
      <input name="website" onChange={handleSetWebsite} value={website}></input>
    </>
  );
}
