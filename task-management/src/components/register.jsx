import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const usernameUpdate = (event) => {
    setUsername(event.target.value);
  };
  const passUpdate = (event) => {
    setPass(event.target.value);
  };
  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    const userObj = {
      username,
      pass,
      name,
    };

    await axios
      .post("http://localhost:3000/api/user/create", userObj, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("You've been added to the system!");
      })
      .catch((err) => console.log(err));
    // const postURL = "http://localhost:3001/register"; // changed by gillll
    // const postURL = "http://localhost:3000/api/user/create"; //Our previously set up route in the backend
    // await axios(postURL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // We should keep the fields consistent for managing this data later
    //     username: username,
    //     pass: pass,
    //     name: name,
    //   }),
    // })
    //   .then((res) => {
    //     console.log(res);
    //     // Once posted, the user will be notified
    //     alert("You have been added to the system!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <Link to="/" className="back-BUtton">
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
          className="register-input"
        />
        <label htmlFor="email">Email</label>
        <input
          value={username}
          required
          onChange={usernameUpdate}
          type="text"
          placeholder="username"
          id="username"
          name="username"
          className="register-input"
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
          className="register-input"
        />
        {/* <Link className="button-new"> */}
        <button className="login-regButton">Log In</button>
        {/* </Link> */}
      </form>
      <Link to="/login" className="button-already">
        <button className="button">Already have an account? Click here!</button>
      </Link>
    </>
  );
};
