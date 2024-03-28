import React, { useState } from "react";

const ShoeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    sizes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    onSubmit(event, formData);
    setFormData({
      id: "",
      name: "",
      description: "",
      price: "",
      sizes: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      id: "",
      name: "",
      description: "",
      price: "",
      sizes: "",
    });
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="sizes">Sizes:</label>
        <input
          type="text"
          id="sizes"
          name="sizes"
          value={formData.sizes}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default ShoeForm;
