export default function Experience({ setExperience }) {
  return (
    <>
      <form id="experienceSection">
        <label htmlFor="companyName">Company Name</label>
        <input name="Company Name"></input>
        <label htmlFor="position">Position Title</label>
        <input name="position"></input>
        <label htmlFor="start">Start Date</label>
        <input name="start"></input>
        <label htmlFor="end">End Date</label>
        <input name="end"></input>
        <label htmlFor="location">Location</label>
        <input name="location"></input>
        <label htmlFor="description">Description</label>
        <input name="description"></input>
      </form>
    </>
  );
}
