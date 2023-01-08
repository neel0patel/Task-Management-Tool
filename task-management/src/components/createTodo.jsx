// import useState and Link and axios to send a post request to our server
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export function CreateTodo() {
  const [data, setData] = useState({ title: "", description: "" });

  // function handleChange will recieve the input data
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  //handleSubmit will send our post request to the server
  function handleSubmit(e) {
    // preventing the page from reloading when submit is clicked
    e.preventDefault();

    const todo = {
      title: data.title,
      description: data.description,
    };

    console.log({ todo });
    axios
      .post("http://localhost:3000/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create task");
        console.log(err.message);
      });
  }
  return (
    <section className="container">
      <Link to="/" className="back-button">
        Back
      </Link>
      <section className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Create Task
          </button>
        </form>
      </section>
    </section>
  );
}
