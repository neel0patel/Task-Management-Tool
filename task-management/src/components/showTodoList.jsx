// this component will read all the documents created & will fetch them from the database

// import useState, useEffect, Link and axios
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateTodo } from "./updateTodo";

//TodoCard function will display the contents of the todo
function TodoCard({ data, handleDelete, handleEdit }) {
  // added functions to handle deleting and editing tasks
  const { _id, title, description } = data;
  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="button-container">
        <button className="button" name={_id} onClick={handleEdit}>
          Edit
        </button>
        <button className="button" name={_id} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

//ShowTodoList function to have state todo & it'll grab the collections from the database and store it in state todo
export function ShowTodoList() {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(""); // this will update the id of the task being stored
  const [update, setUpdate] = useState(false); // this will fetch all the task collections from the database
  // using axios to GET request to backend and then storing the data in todo using setTodo
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  // handleEdit function will update the state id with the _id of the specified task
  function handleEdit(e) {
    setId(e.target.name);
    setOpen(true);
  }

  // handleUpdate function will invert the state of update if the task was updated by the user; inverting lets the useEffect hook to update the array
  function handleUpdate() {
    console.log("update", update, !update);
    setUpdate(!update);
  }

  // handleDelete will send a DELETE request to the server(it will use the "_id" of a task to determine what's getting deleted)
  function handleDelete(e) {
    axios.delete(`http://localhost:3000/api/todo/${e.target.name}`);

    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  // handleClose function will close the UpdateTodo component; setting id to an empty string and open to false
  function handleClose() {
    setId("");
    setOpen(false);
  }

  return (
    <section className="container">
      <Link to="/createTodo" className="button-new">
        <button className="button">New</button>
      </Link>
      <Link to="/login" className="button-new">
        <button className="button">Log In</button>
      </Link>
      <section className="contents ">
        <h1>Tasks</h1>
        <ul className="list-container">
          {todo.map((data) => (
            <TodoCard
              data={data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      {open ? (
        <section className="update-container">
          <div className="update-contents">
            <p onClick={handleClose} className="close"></p>

            <UpdateTodo
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
}
