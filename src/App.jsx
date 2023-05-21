import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    collegeName: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;

    setFormData({ ...formData, [names]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div>
        <h1>Form</h1>
        <form action="" className="collegeForm" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:{" "}
            <input
              required={true}
              type="text"
              name="name"
              onChange={handleChange}
            />
          </label>

          <br />

          <label htmlFor="name">
            Age:{" "}
            <input
              type="number"
              required={true}
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>

          <br />

          <label htmlFor="collegeName">
            College Name:{" "}
            <input
              type="text"
              required={true}
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            />
          </label>

          <br />
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>

        {isSubmitted && (
          <div className="result">
            <h3>Name : {formData.name}</h3>
            <h3>Age : {formData.age}</h3>
            <h3>College Name : {formData.collegeName}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
