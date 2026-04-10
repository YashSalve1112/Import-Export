
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const API_BASE = "http://localhost:5000";

const fallbackProducts = [
  {
    _id: "fallback-1",
    title: "Agriculture Products",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    desc: "High-quality agriculture products with reliable export and logistics support.",
    tags: ["Manufacturing", "Logistics", "Import Export"],
  },
  {
    _id: "fallback-2",
    title: "Base Metal Items",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    desc: "Professional sourcing of base metal items for industrial and commercial sectors.",
    tags: ["Industrial", "Global Supply", "Trade"],
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="products-page">
      <div className="product-header">
        <div className="header-left">
          <p className="small">EXPORT QUALITY CATALOG</p>
          <h1>
            Our Global <br />
            <span>Product Portfolio</span>
          </h1>
        </div>

        <div className="header-right">
          <p>
            Delivering excellence across strategic sectors with precision logistics,
            reliable sourcing, and premium quality from India to world markets.
          </p>
        </div>
      </div>

      {loading ? <p className="products-status">Loading products...</p> : null}

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={p._id || index}>
            <img
              src={p.image || "https://via.placeholder.com/900x600?text=Product+Image"}
              alt={p.title}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/900x600?text=Product+Image";
              }}
            />

            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tags">
                {(p.tags || []).map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div style={{ marginTop: "auto" }}>
                <button className="btn" onClick={() => navigate("/contact")}>
                  Request Inquiry →
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="custom-card">
          <h3>Need Custom Sourcing?</h3>
          <p>
            Looking for a specific product or industry solution? Contact us for custom
            sourcing and trade support.
          </p>

          <button className="outline-btn" onClick={() => navigate("/contact")}>
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
