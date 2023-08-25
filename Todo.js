const Todo = ({ id, text, removeTodo }) => {
  const handleClick = () => {
    removeTodo(id);
  };

  return (
    <div>
      <li>
        {text}
        <button onClick={handleClick}>X</button>
      </li>
    </div>
  );
};
export default Todo;
