import React, { useState } from "react";

const contactInfo = [
  {
    icon: "location_on",
    title: "Office Location",
    text: "Surat, Gujarat, India",
  },
  {
    icon: "public",
    title: "Business Scope",
    text: "Import, Export and Multi-product Trading",
  },
  {
    icon: "handshake",
    title: "Partnership Focus",
    text: "Trusted domestic and international business relationships",
  },
  {
    icon: "support_agent",
    title: "Inquiry Support",
    text: "Professional response for trade and product discussions",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await fetch(`${API_BASE}/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: data?.message || "Inquiry submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to fetch",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container hero-content">
          <span className="section-tag">Contact Us</span>

          <h1>
            Let’s Start a <br />
            Business Conversation
          </h1>

          <p>
            Connect with us for trade inquiries, sourcing discussions,
            partnership opportunities, and import-export business support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="section-tag">Get In Touch</span>

            <h2 className="section-title" style={{ marginBottom: "18px" }}>
              We are here to discuss your business requirements
            </h2>

            <p className="section-text" style={{ marginBottom: "26px" }}>
              Reach out to us for product discussions, supply coordination,
              partnership opportunities, and structured trade support across
              domestic and international markets.
            </p>

            <div
              className="info-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "18px",
              }}
            >
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="card info-card"
                  style={{
                    padding: "22px",
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      className="icon-box"
                      style={{
                        width: "54px",
                        height: "54px",
                        borderRadius: "14px",
                        background: "var(--surface-2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "var(--primary)", fontSize: "28px" }}
                      >
                        {item.icon}
                      </span>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          color: "var(--primary)",
                          marginBottom: "6px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="section-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="card form-card"
            style={{
              padding: "30px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <span className="section-tag">Send Inquiry</span>

            <h3
              style={{
                fontFamily: "Manrope",
                fontSize: "1.8rem",
                color: "var(--primary)",
                marginBottom: "10px",
              }}
            >
              Request business details
            </h3>

            <p className="section-text" style={{ marginBottom: "24px" }}>
              Fill out the form below and we will connect with you regarding
              your inquiry.
            </p>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="primary-btn"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Inquiry →"}
              </button>

              {status.message && (
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color:
                      status.type === "success"
                        ? "green"
                        : status.type === "error"
                        ? "red"
                        : "var(--text-soft)",
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div
            className="card center-card"
            style={{
              minHeight: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "30px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <div>
              <span className="section-tag">Office Presence</span>
              <h2 className="section-title" style={{ marginBottom: "12px" }}>
                Surat, Gujarat, India
              </h2>
              <p className="section-text" style={{ margin: "0 auto" }}>
                You can later connect this section with Google Maps or embed
                your office location directly for a complete business contact
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, var(--primary) 0%, var(--primary-2) 100%)",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", color: "white" }}
        >
          <span className="section-tag" style={{ color: "#e0b85c" }}>
            Business Connection
          </span>

          <h2
            className="section-title"
            style={{ color: "white", marginBottom: "16px" }}
          >
            Let’s build reliable trade opportunities together
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
            }}
          >
            We welcome business inquiries related to sourcing, trading,
            partnerships, and import-export support across multiple product
            categories.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;