import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import { Login } from "./components/login";
import { Register } from "./components/register";
import "../src/App.scss";

function App() {
  return (
    <div className="app-contents">
      <Router>
        <Routes>
          <Route exact path="/" element={<ShowTodoList />} />
          <Route path="/createTodo" element={<CreateTodo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
