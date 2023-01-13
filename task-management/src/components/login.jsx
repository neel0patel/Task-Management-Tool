import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailUpdate = (event) => {
    setEmail(event.target.value);
  };
  const passUpdate = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = async () => {
    const postURL = `http://localhost:3000/api/user/:userId`; //Our previously set up route in the backend
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
      }),
    })
      .then((res) => {
        window.alert("Login Successful");
        console.log(res);
        // Once posted, the user will be notified
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
        <button
          className="button"
          type="submit"
          value="login"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
      <Link to="/register" className="button-new">
        <button className="button">Need an account? Click here!</button>
      </Link>
    </>
  );
};
