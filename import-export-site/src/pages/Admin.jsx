import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAdminAuth, getAdminAuth, getAdminToken } from "../utils/auth";

const API_BASE = "http://localhost:5000";

const emptyForm = {
  title: "",
  image: "",
  desc: "",
  tags: "",
};

const Admin = () => {
  const navigate = useNavigate();
  const admin = getAdminAuth()?.admin;
  const token = getAdminToken();


  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    totalInquiries: 0,
    recentInquiries: [],
  });
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);

  const authHeaders = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    [token]
  );

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const [statsRes, productsRes, inquiriesRes] = await Promise.all([
        fetch(`${API_BASE}/stats`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_BASE}/products?all=true`),
        fetch(`${API_BASE}/inquiries`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      if (statsRes.status === 401 || inquiriesRes.status === 401) {
        clearAdminAuth();
        navigate("/admin-login", { replace: true });
        return;
      }

      const [statsData, productsData, inquiriesData] = await Promise.all([
        statsRes.json(),
        productsRes.json(),
        inquiriesRes.json(),
      ]);

      setStats(statsData);
      setProducts(Array.isArray(productsData) ? productsData : []);
      setInquiries(Array.isArray(inquiriesData) ? inquiriesData : []);
    } catch (error) {
      console.error(error);
      setNotice("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    setSaving(true);
    setNotice("");

    try {
      const res = await fetch(`${API_BASE}/products`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({
          ...form,
          tags: form.tags,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add product");

      setForm(emptyForm);
      setNotice("Product added successfully.");
      loadDashboard();
    } catch (error) {
      setNotice(error.message || "Failed to add product.");
    } finally {
      setSaving(false);
    }
  };

  const deleteProduct = async (id) => {
    await fetch(`${API_BASE}/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    loadDashboard();
  };

  const deleteInquiry = async (id) => {
    await fetch(`${API_BASE}/inquiries/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    loadDashboard();
  };

  const handleLogout = () => {
    clearAdminAuth();
    navigate("/admin-login", { replace: true });
  };

  return (
    <div className="admin-page premium-admin-page">
      <div className="container">
        <div className="admin-topbar">
          <div>
            <p className="small">PREMIUM ADMIN DASHBOARD</p>
            <h1>Control Center</h1>
            <p className="admin-subtitle">
              Welcome back{admin?.name ? `, ${admin.name}` : ""}. Manage live products and monitor website inquiries.
            </p>
          </div>

          <div className="admin-top-actions">
            <div className="admin-badge">{admin?.email || "Admin"}</div>
            <button className="admin-logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="admin-stats premium-admin-stats">
          <div className="admin-stat-card stat-dark">
            <span>Total Products</span>
            <h3>{stats.totalProducts}</h3>
            <p>Visible and managed from dashboard</p>
          </div>
          <div className="admin-stat-card stat-gold">
            <span>Active Products</span>
            <h3>{stats.activeProducts}</h3>
            <p>Currently shown on website</p>
          </div>
          <div className="admin-stat-card stat-light">
            <span>Total Inquiries</span>
            <h3>{stats.totalInquiries}</h3>
            <p>All contact requests received</p>
          </div>
        </div>

        <div className="admin-grid premium-admin-grid">
          <div className="admin-card glass-card">
            <h2>Add New Product</h2>
            <p className="admin-muted">
              Add a title, image URL, description, and optional comma-separated tags.
            </p>

            <form className="admin-form" onSubmit={addProduct}>
              <input
                type="text"
                placeholder="Product title"
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
              />
              <textarea
                rows="4"
                placeholder="Product description"
                value={form.desc}
                onChange={(e) => setForm((prev) => ({ ...prev, desc: e.target.value }))}
                required
              />
              <input
                type="text"
                placeholder="Tags (example: Export, Trade, Logistics)"
                value={form.tags}
                onChange={(e) => setForm((prev) => ({ ...prev, tags: e.target.value }))}
              />
              <button type="submit" className="primary-btn" disabled={saving}>
                {saving ? "Saving..." : "Add Product"}
              </button>
            </form>

            {notice ? <p className="admin-notice">{notice}</p> : null}
          </div>

          <div className="admin-card glass-card">
            <div className="admin-products-head" >
              <div style={{ width: "100%" }}>
                <div style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "space-between",

                  }
                }>
                  <h2>Recent Inquiries</h2>
                  <button onClick={() => navigate('/admin/all-inquiries')} style={{
                    width: "fit-content",
                    padding: "6px 12px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }} >View All</button>
                </div>
                <p className="admin-muted">Latest leads received from the contact page.</p>
              </div>
              {loading ? <span className="admin-badge muted">Loading...</span> : null}
            </div>

            <div className="admin-list">
              {inquiries.length === 0 ? (
                <p className="admin-empty">No inquiries yet.</p>
              ) : (
                inquiries.map((item) => (
                  <div className="admin-list-card premium-list-card" key={item._id}>
                    <div className="admin-list-top">
                      <h3>{item.name}</h3>
                      <button className="admin-delete" onClick={() => deleteInquiry(item._id)}>
                        Delete
                      </button>
                    </div>
                    <p><strong>Phone:</strong> {item.phone}</p>
                    <p><strong>Email:</strong> {item.email || "-"}</p>
                    <p><strong>Subject:</strong> {item.subject}</p>
                    <p><strong>Message:</strong> {item.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="admin-card admin-products glass-card">
          <div className="admin-products-head">
            <div>
              <h2>Website Products</h2>
              <p className="admin-muted">These products appear directly on the products page.</p>
            </div>
          </div>

          <div className="admin-products-grid">
            {products.length === 0 ? (
              <p className="admin-empty">No products found.</p>
            ) : (
              products.map((product) => (
                <div className="admin-product-card premium-product-card" key={product._id}>
                  <img
                    src={product.image || "https://picsum.photos/800/500?random"}
                    alt={product.title}
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                  <div className="admin-product-body">
                    <div className="admin-product-topline">
                      <h3>{product.title}</h3>
                      <span className="admin-status-pill">Live</span>
                    </div>
                    <p>{product.desc}</p>
                    <div className="tags">
                      {(product.tags || []).map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <button className="admin-delete wide" onClick={() => deleteProduct(product._id)}>
                      Delete Product
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
