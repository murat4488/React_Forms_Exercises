import { useState } from "react";
import "./App.css";
import BoxList from "./BoxList";
import NewBoxForm from "./NewBoxForm";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

function App() {
  const [boxes, setBoxes] = useState([]);

  const createBox = ({ color, width, height }) => {
    const newBox = { id: Date.now(), color, width, height };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (boxId) => {
    const updatedBoxes = boxes.filter((box) => boxId !== box.id);
    setBoxes(updatedBoxes);
  };

  const [todos, setTodos] = useState([]);

  const createTodo = ({ text }) => {
    const newTodo = { id: Date.now(), text };
    setTodos((todos) => [...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todoId !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="box-form">
        <h1>Create Box</h1>
        <NewBoxForm createBox={createBox} />
        <BoxList boxes={boxes} removeBox={removeBox} />
        <h1>Create Todos</h1>
        <NewTodoForm createTodo={createTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
