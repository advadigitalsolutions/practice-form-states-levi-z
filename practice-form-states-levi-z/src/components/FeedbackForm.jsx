import React from "react";
import { useState } from 'react';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    }); 
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(`Updating$({name}:`, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Feedback Form</h1>
        <form>
          <label>
            <b>Name:</b><br />
                    <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <b>Email:</b> <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <b>Feedback:</b> <br />
            <textarea
              type="textarea"
              name="feedback"
              value={formData.feedback}
            maxLength="200"
              onChange={handleChange}
            />
          </label><br />
          <button ><b>Submit</b></button>
        </form>
        <h2>Feedback Preview</h2><hr></hr>
        <p><i>Is it true, is it kind, is it necessary? <br />-Socrates</i></p>
        <p><h4>Name:</h4> {formData.name}</p>
        <p><h4>Email:</h4> {formData.email}</p>
        <p><h4>Feedback:</h4> {formData.feedback}</p>
      </div>
    );
}


 

export default FeedbackForm;
