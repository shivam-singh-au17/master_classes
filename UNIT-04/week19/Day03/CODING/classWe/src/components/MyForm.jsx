import React, { useState } from "react";

const firstState = {
  userName: "",
  userAge: "",
  userEmail: "",
};

export default function MyForm() {
  const [formData, setFormData] = useState(firstState);
  const handleChange = (e) => {
    const{name, value} = e.target
      setFormData({
          ...formData,
          [name]: value
    })
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Name"
          name="userName"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Enter Your Age"
          name="userAge"
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Enter Your Email"
          name="userEmail"
              />
              <input type="submit" value="submit" />
      </form>
    </div>
  );
}
