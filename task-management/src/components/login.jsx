import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@here.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="current-password"
          placeholder="***********"
          id="password"
          name="password"
        />
        <Link to="/" className="button-new">
          <button className="button">Log In</button>
        </Link>
      </form>
      <Link to="/register" className="button-new">
        <button className="button">Need an account? Click here!</button>
      </Link>
    </>
  );
};
