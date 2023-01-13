import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const emailUpdate = (event) => {
    setEmail(event.target.value);
  };
  const passUpdate = (event) => {
    setPass(event.target.value);
  };
  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    const postURL = "http://localhost:3000/api/user/create"; //Our previously set up route in the backend
    await axios(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // We should keep the fields consistent for managing this data later
        email: email,
        pass: pass,
        name: name,
      }),
    })
      .then((response) => {
        console.log(response);
        // Once posted, the user will be notified
        alert("You have been added to the system!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Link to="/" className="back-button">
        Back
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          required
          onChange={nameUpdate}
          type="name"
          placeholder="Insert Name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          required
          onChange={emailUpdate}
          type="email"
          placeholder="youremail@here.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          required
          onChange={passUpdate}
          type="current-password"
          placeholder="***********"
          id="password"
          name="password"
        />
        {/* <Link className="button-new"> */}
        <button className="button">Log In</button>
        {/* </Link> */}
      </form>
      <Link to="/login" className="button-new">
        <button className="button">Already have an account? Click here!</button>
      </Link>
    </>
  );
};
