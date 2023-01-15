import axios from "axios";
// import { session } from "passport";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

// let data = sessionStorage.getItem("userId");

export const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const usernameUpdate = (event) => {
    setUsername(event.target.value);
    console.log("username is ", event.target.value);
  };
  const passUpdate = (event) => {
    setPass(event.target.value);
    console.log("password is ", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username,
      pass,
    };
    console.log(data, "line 27");
    axios
      .post("http://localhost:3000/api/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((user) => {
        console.log(user);
        if (user.data.success === false) {
          alert("Login was not successful");
        } else if (user.data.success === true) {
          sessionStorage.setItem("userId", user.user.id);
          let data = sessionStorage.getItem("userId");
          alert("Login Successful");
        }
      });
    // .catch((err) => console.log(err));
    /*
    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.success === false) {
          window.alert("Login was not successful");
        } else if (user.success === true) {
          sessionStorage.setItem("userId", user.user.id);
          // eslint-disable-next-line
          let data = sessionStorage.getItem("userId");
          window.alert("Login Successful");
        }
      });
*/
    // const postURL = `http://localhost:3000/api/user/:userId`; //Our previously set up route in the backend
    // await axios(postURL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // We should keep the fields consistent for managing this data later
    //     usermame: email,
    //     pass: pass,
    //   }),
    // })
    //   .then((res) => {
    //     console.log("username", email);
    //     console.log("password", pass);
    //     window.alert("Login Successful");
    //     console.log(res);
    //     // Once posted, the user will be notified
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <Link to="/" className="back-Button">
        Back
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={username}
          required
          onChange={usernameUpdate}
          type="text"
          placeholder="username"
          id="username"
          name="username"
          className="login-input"
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
          className="login-input"
        />
        <button
          className="button-login"
          type="submit"
          value="login"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
      <Link to="/register" className=".button-needAcc">
        <button className="button">Need an account? Click here!</button>
      </Link>
    </>
  );
};
//
