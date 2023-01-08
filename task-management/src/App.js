import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "../src/App.scss";

function App() {
  return (
    <div className="app-contents">
      <Router>
        <Routes>
          <Route exact path="/" element={<ShowTodoList />} />
          <Route path="/createTodo" element={<CreateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
