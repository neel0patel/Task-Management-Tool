// import useState and axios
import { useState } from "react";
import axios from "axios";

// this updateTodo component is nearly the identical layout to "createTodo"  with variables being only the differences
// UpdateTodo will consist of 3 props (_id, handleClose. handleUpdate)
export function UpdateTodo({ _id, handleClose, handleUpdate }) {
  const [data, setData] = useState({ title: "", description: "" });

  // function handleChange will recieve the input data
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  //handleSubmit will send our post request to the server
  function handleSubmit(e) {
    // preventing the page from reloading when submit is clicked
    e.preventDefault();

    console.log({ _id }, { data });

    axios
      .put(`http://localhost:3000/api/todo/${_id}`, data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Failed to update task, please try again.");
        console.log(err.message);
      });
  }
  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
        handleClose();
        handleUpdate();
      }}
    >
      <label htmlFor="title" className="label">
        Title
      </label>
      <input
        type="text"
        name="title"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="title" className="label">
        Description
      </label>
      <input
        type="text"
        name="description"
        className="input"
        onChange={handleChange}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
