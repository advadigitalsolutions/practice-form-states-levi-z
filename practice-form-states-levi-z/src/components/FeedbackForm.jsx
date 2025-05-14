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
            Name:
                    <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Feedback:
            <textarea
              type="textarea"
              name="feedback"
              value={formData.feedback}
            maxLength="200"
              onChange={handleChange}
            />
          </label><br />
          <button >Submit</button>
        </form>
        <h2>Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
      </div>
    );
}


 

export default FeedbackForm;
