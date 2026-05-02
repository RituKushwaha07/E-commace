import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom"; // ✅ fix

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products/add", form);
      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        
        <h3 className="text-center mb-4">Add New Product</h3>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="form-control"
              rows="3"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
}