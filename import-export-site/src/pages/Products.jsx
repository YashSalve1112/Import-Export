
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import agricultureImg from "../assets/grain.jpg";
import metalImg from "../assets/metal.jpg";
import woodImg from "../assets/wood.jpg";
import constructionRealestateImg from "../assets/Construction & Realestate.jpg";
import sugarImg from "../assets/sugar.png";


const API_BASE = import.meta.env.VITE_API_BASE_URL;
const productImages = [
  agricultureImg,
  metalImg,
  woodImg,
];

const fallbackProducts = [
  {
    _id: "fallback-1",
    title: "Agriculture Products",
    image: agricultureImg,
    desc: "High-quality agriculture products with reliable export and logistics support.",
    tags: ["Manufacturing", "Logistics", "Import Export"],
  },
  {
    _id: "fallback-2",
    title: "Base Metal Items",
    image: metalImg,
    desc: "Professional sourcing of base metal items for industrial and commercial sectors.",
    tags: ["Industrial", "Global Supply", "Trade"],
  },
  {
    _id: "fallback-3",
    title: "Wood Materials",
    image: woodImg,
    desc: "Premium timber and wood products for construction, interiors, and exports.",
    tags: ["Wood", "Construction", "Export"],
  },
  {
    _id: "fallback-4",
    title: "Construction & Real Estate Services",
    image: constructionRealestateImg,
    desc: "Comprehensive construction and real estate services for domestic and international clients.",
    tags: ["Construction", "Real Estate", "Development"],
  },

];

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);

  const getProductImage = (product, index) => {
    if (product.image) return product.image;
    return productImages[index] || "https://via.placeholder.com/900x600?text=Product+Image";
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const dataWithImages = data.map((product, index) => ({
            ...product,
            image: getProductImage(product, index),
          }));

          setProducts(
            dataWithImages.length >= fallbackProducts.length
              ? dataWithImages
              : [...dataWithImages, ...fallbackProducts.slice(dataWithImages.length)]
          );
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
      <section className="expanded-services-section">
        <div className="expanded-services-wrap">
          <div className="expanded-services-intro">
            <p className="expanded-services-label">Our Expanded Services</p>
            <h2 className="expanded-services-heading">
              Premium solutions for construction and agricultural trading
            </h2>
          </div>

          <div className="expanded-services-grid">
            <article className="service-card">
              <div className="service-card-icon">
                <img src={constructionRealestateImg} alt="Construction & Infrastructure Development" />
              </div>
              <h3 className="service-card-title">
                Construction & Infrastructure Development
              </h3>
              <p className="service-card-text">
                We provide complete construction and development solutions including residential, commercial, industrial, and infrastructure projects. Our services include building houses, flats, bungalows, offices, shopping malls, roads, bridges, and dams. We also deal in acquisition, leasing, and development of land and properties. Additionally, we offer real estate consulting, advisory, and estate management services.
              </p>
            </article>

            <article className="service-card">
              <div className="service-card-icon">
                <img src={sugarImg} alt="Sugar, Oils & Agricultural Products Trading" />
              </div>
              <h3 className="service-card-title">
                Sugar, Oils & Agricultural Products Trading
              </h3>
              <p className="service-card-text">
                We are engaged in trading, distribution, import and export of sugar and related products including white sugar, brown sugar, and raw sugar. We also deal in edible oils such as mustard oil, soybean oil, sunflower oil, and palm oil, along with vanaspati and ghee. Additionally, we trade in agricultural produce including wheat, rice, maize, barley, gram, lentils, moong, urad, and other cereals, available in bulk or branded packaging.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
