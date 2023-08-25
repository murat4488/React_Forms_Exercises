import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
