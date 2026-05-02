import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom"; // ✅ fix

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Load error:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/delete/${id}`);
      alert("Product deleted successfully!");
      loadProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container mt-5">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Product List</h3>
        <Link to="/admin/products/add" className="btn btn-primary">
          + Add Product
        </Link>
      </div>

      {/* Table Card */}
      <div className="card shadow">
        <div className="card-body p-0">
          <table className="table table-hover mb-0 text-center">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Stock</th>
                <th style={{ width: "180px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td className="text-start ps-3">{product.title}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Link
                        to={`/admin/products/edit/${product._id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-muted">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}