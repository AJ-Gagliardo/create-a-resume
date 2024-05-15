import { useState } from "react";

export default function Experience({ setExperience }) {
  const emptyForm = {
    companyName: "",
    position: "",
    start: "",
    end: "",
    location: "",
    description: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  function handleFormData(e) {
    // const data = e.target.value
    //   setFormData(...formData, )
    // const name = e.target.name;
    // const value = e.targe.value;
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  }

  function handleSubmitExperience(e) {
    e.preventDefault();
    setExperience((experience) => [...experience, formData]);
    setFormData(emptyForm);
    // setFormData({
    //   companyName: "",
    //   position: "",
    //   start: "",
    //   end: "",
    //   location: "",
    //   description: "",
    // });
  }

  return (
    <>
      <form id="experienceSection" onSubmit={handleSubmitExperience}>
        <label htmlFor="companyName">CompanyName</label>
        <input
          name="companyName"
          onChange={handleFormData}
          value={formData.companyName}
          // onSubmit={(value = "")}
        ></input>
        <label htmlFor="position">Position Title</label>
        <input
          name="position"
          onChange={handleFormData}
          value={formData.position}
        ></input>
        <label htmlFor="start">Start Date</label>
        <input
          name="start"
          onChange={handleFormData}
          value={formData.start}
        ></input>
        <label htmlFor="end">End Date</label>
        <input
          name="end"
          onChange={handleFormData}
          value={formData.end}
        ></input>
        <label htmlFor="location">Location</label>
        <input
          name="location"
          onChange={handleFormData}
          value={formData.location}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          id="textbox"
          type="textbox"
          name="description"
          onChange={handleFormData}
          value={formData.description}
        ></input>
        <button type="submit" id="expBtn">
          Submit Experience
        </button>
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

// search about bootstrap *****
