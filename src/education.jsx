// For this one I have to do similar to previous ones
// remember I have to lift states that want to be shown in 'resume'
// I have to remember to search for a better collor pllette, the one i am currently using is not of my taste
// I have to remember to do an accordion between sections to improve ux

//****school name, title of study and date of study minimum
// in this case I may want to add option to add one more

// this one more component will be similar to the one ill use similar section

// if i do the \one more\ component i have to add a eliminate option

//after this, experience
// if i have time after experience skills

export default function Education({
  setSchoolName,
  setMajor,
  setGraduationDate,

  schoolName,
  major,
  graduationDate,
}) {
  function handleSetSchoolName(e) {
    const value = e.target.value;
    console.log(value);
    setSchoolName(value);
  }

  function handleMajorName(e) {
    const value = e.target.value;
    setMajor(value);
  }

  function handleSetGraduationDate(e) {
    const value = e.target.value;
    setGraduationDate(value);
  }

  return (
    <>
      <label htmlFor="school1" placeholder="ie. XYZ University">
        School Name
      </label>
      <input
        name="school1"
        onChange={handleSetSchoolName}
        value={schoolName}
      ></input>
      <label htmlFor="major1">Major</label>
      <input name="major1" onChange={handleMajorName} value={major}></input>
      <label htmlFor="dateGraduation1">Date of Graduation</label>
      <input
        name="dateGraduation1"
        onChange={handleSetGraduationDate}
        value={graduationDate}
      ></input>
    </>
  );
}
