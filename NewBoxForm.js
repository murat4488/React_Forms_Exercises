import React, { useState } from "react";
import Box from "./Box";

const NewBoxForm = ({ createBox }) => {
  const initalState = {
    color: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({ ...formData });
    setFormData(initalState);
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
      <label htmlFor="color">Color</label>
      <input
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input
        type="text"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height</label>
      <input
        type="text"
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button className="new-box-form" type="submit">
        Add New Box
      </button>
    </form>
  );
};
export default NewBoxForm;
