import { useState } from "react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1491472253230-a044054ca35f", title: "iPhone", category: "Mobiles" },
  { id: 2, src: "https://media.wired.com/photos/67f84bc7522d1f6524712557/master/w_1600,c_limit/Samsung.jpg", title: "Samsung", category: "Mobiles" },
  { id: 3, src: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg", title: "Laptop", category: "Laptops" },
  { id: 4, src: "https://m.media-amazon.com/images/I/61qKkGW41SL.jpg", title: "OnePlus", category: "Mobiles" },
  { id: 5, src: "https://media.wired.com/photos/649b2dbfc859c4a1cdecc412/4:3/w_640,c_limit/Tablet.jpg", title: "Tablet", category: "Tablets" },
  { id: 6, src: "https://nayejaisa.com/wp-content/uploads/2025/02/Images-39-4.webp", title: "Dell Laptop", category: "Laptops" },
  { id: 7, src: "https://m.media-amazon.com/images/I/71i1AQYjjoL.jpg", title: "OnePlus", category: "Mobiles" },
    { id: 8, src: "https://i.guim.co.uk/img/media/b253ca0b9578cd38e535d123f457249db34a8120/1025_473_5242_4193/master/5242.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=cf5e975fb93d6b7f7d851978c59952f0", title: "Tablet", category: "Tablets" },

];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="container mt-5">

      {/* Title */}
      <h2 className="text-center fw-bold mb-4">Product Gallery</h2>

      {/* 🔥 Filter Buttons */}
      <div className="text-center mb-4">
        {["All", "Mobiles", "Laptops", "Tablets"].map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm mx-2 px-3 rounded-pill ${
              filter === cat ? "btn-primary" : "btn-outline-dark"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="row g-3">

        {filteredImages.map((img) => (
          <div key={img.id} className="col-6 col-md-4 col-lg-3">

            <div className="position-relative overflow-hidden rounded-4 shadow-sm">

              {/* Image */}
              <img
                src={img.src}
                className="img-fluid w-100"
                style={{ height: "220px", objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white fw-bold"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  opacity: 0,
                  transition: "0.3s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                onClick={() => setSelected(img.src)}
              >
                {img.title}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Modal */}
      {selected && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.8)", zIndex: 999 }}
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            style={{ maxHeight: "80%", borderRadius: "10px" }}
          />
        </div>
      )}

    </div>
  );
}