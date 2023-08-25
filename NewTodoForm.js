import React, { useState } from "react";

const NewTodoForm = ({ createTodo }) => {
  const INITIAL_STATE = { text: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ ...formData });
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add"></label>
      <input
        type="text"
        name="text"
        placeholder="add"
        value={formData.text}
        onChange={handleChange}
      />
      <button className="todo-form" w type="submit">
        Add
      </button>
    </form>
  );
};
export default NewTodoForm;
