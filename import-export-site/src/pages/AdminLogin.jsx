import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAdminAuth, setAdminAuth } from "../utils/auth";

const API_BASE = "http://localhost:5000";

const AdminLogin = () => {
  const navigate = useNavigate();
  const existingAuth = getAdminAuth();
  const [form, setForm] = useState({
    email: "admin@bhatiyanijimajisa.com",
    password: "Admin@12345",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (existingAuth?.token) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setAdminAuth({
        token: data.token,
        admin: data.admin,
      });

      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-shell container">
        <div className="admin-login-panel admin-login-brand">
          <span className="section-tag">Secure Dashboard</span>
          <h1>Premium Admin Control Center</h1>
          <p>
            Manage live products, monitor inquiry growth, and control website content from one secure dashboard.
          </p>

          <div className="admin-login-highlights">
            <div className="admin-highlight-card">
              <h3>Live Product Control</h3>
              <p>Add or remove products that instantly appear on the website.</p>
            </div>
            <div className="admin-highlight-card">
              <h3>Inquiry Monitoring</h3>
              <p>Track business leads, contact requests, and latest client messages.</p>
            </div>
            <div className="admin-highlight-card">
              <h3>Luxury Theme</h3>
              <p>Black and gold premium dashboard designed for desktop, tablet, and mobile.</p>
            </div>
          </div>
        </div>

        <div className="admin-login-panel admin-login-form-wrap">
          <p className="small">ADMIN ACCESS</p>
          <h2>Login to Dashboard</h2>
          <p className="admin-muted">
            Default credentials are prefilled. You can change them later in <code>backend/server.js</code>.
          </p>

          <form className="admin-login-form" onSubmit={handleSubmit}>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                required
              />
            </label>

            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Open Admin Dashboard"}
            </button>

            {error ? <p className="form-status error">{error}</p> : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
