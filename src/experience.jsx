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

/// ok this section gonna be moer challenging for em

/// ideas:

/// do a useState in which i have to put all the value of the form...
// example const [formData, setFormData ] = useState({companyName: '', position: '',.... etc})
//a function to handle the change and update the form
//a submit button in which i add all the form data into Set experience example setExperience(...experience, formData)
//reset the form to avoid having values that are not seeing
