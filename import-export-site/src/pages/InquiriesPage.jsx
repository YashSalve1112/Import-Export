import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { clearAdminAuth, getAdminToken } from "../utils/auth";
import * as XLSX from "xlsx";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const InquiriesPage = () => {
  const navigate = useNavigate();
  const token = getAdminToken();

  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const authHeaders = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    [token]
  );

  const handleUnauthorized = () => {
    clearAdminAuth();
    navigate("/admin-login", { replace: true });
  };

  const loadInquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE}/inquiries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        handleUnauthorized();
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch inquiries");
      }

      const data = await response.json();
      setInquiries(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error loading inquiries:", err);
      setError("Failed to load inquiries. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteInquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      setError("");

      const response = await fetch(`${API_BASE}/inquiries/${id}`, {
        method: "DELETE",
        headers: authHeaders,
      });

      if (response.status === 401) {
        handleUnauthorized();
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to delete inquiry");
      }

      setInquiries((prev) => prev.filter((inquiry) => inquiry._id !== id));
      setFilteredInquiries((prev) =>
        prev.filter((inquiry) => inquiry._id !== id)
      );
    } catch (err) {
      console.error("Error deleting inquiry:", err);
      setError("Failed to delete inquiry. Please try again.");
    }
  };

  useEffect(() => {
    if (!token) {
      handleUnauthorized();
      return;
    }

    loadInquiries();
  }, [token]);

  useEffect(() => {
    let filtered = [...inquiries];

    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();

      filtered = filtered.filter((inquiry) => {
        return (
          inquiry.name?.toLowerCase().includes(lowerSearch) ||
          inquiry.email?.toLowerCase().includes(lowerSearch) ||
          inquiry.subject?.toLowerCase().includes(lowerSearch) ||
          inquiry.message?.toLowerCase().includes(lowerSearch) ||
          inquiry.phone?.includes(searchTerm)
        );
      });
    }

    if (dateFilter !== "all") {
      const now = new Date();
      const filterDate = new Date();

      switch (dateFilter) {
        case "today":
          filterDate.setHours(0, 0, 0, 0);
          filtered = filtered.filter(
            (inquiry) => new Date(inquiry.createdAt) >= filterDate
          );
          break;

        case "week":
          filterDate.setDate(now.getDate() - 7);
          filtered = filtered.filter(
            (inquiry) => new Date(inquiry.createdAt) >= filterDate
          );
          break;

        case "month":
          filterDate.setMonth(now.getMonth() - 1);
          filtered = filtered.filter(
            (inquiry) => new Date(inquiry.createdAt) >= filterDate
          );
          break;

        default:
          break;
      }
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (sortBy === "newest") return dateB - dateA;
      if (sortBy === "oldest") return dateA - dateB;
      return 0;
    });

    setFilteredInquiries(filtered);
  }, [inquiries, searchTerm, dateFilter, sortBy]);

  const formatDate = (dateString) => {
    if (!dateString) return "-";

    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const downloadExcel = () => {
    const excelData = filteredInquiries.map((inquiry) => ({
      Date: formatDate(inquiry.createdAt),
      Name: inquiry.name || "",
      Email: inquiry.email || "",
      Phone: inquiry.phone || "",
      Subject: inquiry.subject || "",
      Message: inquiry.message || "",
      Source: inquiry.source || "website",
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    worksheet["!cols"] = [
      { wch: 20 },
      { wch: 25 },
      { wch: 30 },
      { wch: 15 },
      { wch: 30 },
      { wch: 50 },
      { wch: 10 },
    ];

    XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");

    const currentDate = new Date().toISOString().split("T")[0];
    XLSX.writeFile(workbook, `inquiries_${currentDate}.xlsx`);
  };

  return (
    <div
      className="admin-container"
      style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div className="admin-header">
        <div className="admin-nav">
          <button
            className="admin-nav-btn"
            onClick={() => navigate("/admin")}
            style={{
              padding: "6px 12px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              marginBottom: "10px",
              margin: "5px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            ← Back to Dashboard
          </button>
        </div>

        <h1>All Inquiries</h1>
        <p>View and manage all contact form submissions</p>
      </div>

      <div className="admin-content">
        {error && <div className="admin-notice error">{error}</div>}

        <div className="admin-card glass-card">
          <div className="admin-products-head">
            <div>
              <h2>Contact Inquiries</h2>
              <p className="admin-muted">
                All inquiries received from the contact form.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                className="admin-download-btn"
                onClick={downloadExcel}
                disabled={loading || filteredInquiries.length === 0}
                title="Download current filtered results as Excel file"
              >
                Download Excel
              </button>

              <button
                className="admin-nav-btn"
                onClick={loadInquiries}
                disabled={loading}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                {loading ? "Loading..." : "Refresh"}
              </button>
            </div>
          </div>

          <div className="admin-filters">
            <div className="admin-search">
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="admin-search-input"
              />
            </div>

            <div className="admin-filter-controls">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="admin-filter-select"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="admin-filter-select"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>

              {(searchTerm || dateFilter !== "all" || sortBy !== "newest") && (
                <button
                  className="admin-clear-filters"
                  onClick={() => {
                    setSearchTerm("");
                    setDateFilter("all");
                    setSortBy("newest");
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          <div className="admin-results-summary">
            <p className="admin-muted">
              Showing {filteredInquiries.length} of {inquiries.length} inquiries
              {searchTerm && ` matching "${searchTerm}"`}
              {dateFilter !== "all" && ` from ${dateFilter}`}
            </p>
          </div>

          {loading ? (
            <div className="admin-loading">
              <p>Loading inquiries...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="admin-empty">
              <p>
                {searchTerm || dateFilter !== "all"
                  ? "No inquiries match your search criteria."
                  : "No inquiries found."}
              </p>
            </div>
          ) : (
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry._id}>
                      <td>{formatDate(inquiry.createdAt)}</td>
                      <td>{inquiry.name || "-"}</td>
                      <td>{inquiry.email || "-"}</td>
                      <td>{inquiry.phone || "-"}</td>
                      <td>{inquiry.subject || "-"}</td>
                      <td>
                        <div className="message-preview">
                          {inquiry.message?.length > 100
                            ? `${inquiry.message.substring(0, 100)}...`
                            : inquiry.message || "-"}
                        </div>
                      </td>
                      <td>
                        <button
                          className="admin-delete"
                          onClick={() => deleteInquiry(inquiry._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiriesPage;