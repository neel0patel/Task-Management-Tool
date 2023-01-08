// this component will read all the documents created & will fetch them from the database

// import useState, useEffect, and axios
import { useEffect, useState } from "react";
import axios from "axios";

//TodoCard function will display the contents of the todo
function TodoCard({ data }) {
  const { _id, title, description } = data;
  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="button-container">
        <button className="button">edit</button>
        <button className="button">delete</button>
      </div>
    </li>
  );
}

//ShowTodoList function to have state todo & it'll grab the collections from the database and store it in state todo
export function ShowTodoList() {
  const [todo, setTodo] = useState([]);
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
  }, []);

  return (
    <section className="container">
      <section className="contents ">
        <h1>ToDo</h1>
        <ul className="list-container">
          {todo.map((data) => (
            <TodoCard data={data} />
          ))}
        </ul>
      </section>
    </section>
  );
}
