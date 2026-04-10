const values = [
  {
    icon: "workspace_premium",
    title: "Business Integrity",
    text: "We believe in transparent communication, responsible trade practices, and long-term business credibility.",
  },
  {
    icon: "public",
    title: "Global Outlook",
    text: "Our approach is built around domestic and international trade opportunities with professional coordination.",
  },
  {
    icon: "inventory_2",
    title: "Diverse Product Strength",
    text: "We deal in multiple product categories with focus on quality, reliability, and business suitability.",
  },
  {
    icon: "handshake",
    title: "Trusted Partnerships",
    text: "We aim to create dependable long-term trade relationships with clients, suppliers, and partners.",
  },
];

const highlights = [
  "Professional import-export and trading operations",
  "Diversified multi-product business capability",
  "Domestic and international market support",
  "Reliable and quality-focused execution",
];

const About = () => {
  return (
    <>
      <section
        style={{
          minHeight: "58vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(rgba(7, 21, 45, 0.78), rgba(7, 21, 45, 0.9)), url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(199,154,59,0.16), transparent 22%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 20%)",
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 2, color: "white", textAlign: "center" }}
        >
          <span className="section-tag" style={{ color: "#e0b85c" }}>
            About The Company
          </span>

          <h1
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
              lineHeight: 1.06,
              marginBottom: "18px",
              letterSpacing: "-0.03em",
            }}
          >
            Trusted Trade Partner
            <br />
            For Modern Global Business
          </h1>

          <p
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
              fontSize: "1.05rem",
            }}
          >
            BHATIYANIJI Majisa Overseas Private Limited is a Gujarat-based
            import-export and trading company committed to reliability,
            professionalism, and long-term business value.
          </p>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title" style={{ marginBottom: "18px" }}>
              A professional company built for import, export and diversified
              trading.
            </h2>

            <p className="section-text" style={{ marginBottom: "18px" }}>
              Based in Surat, Gujarat, our company operates with a clear focus
              on domestic and international trade across multiple product
              segments. We aim to support clients and partners through
              dependable business coordination, structured execution, and a
              quality-first mindset.
            </p>

            <p className="section-text" style={{ marginBottom: "24px" }}>
              Our business scope includes agriculture products, base metal
              items, sandalwood or chandan wood, cosmetic products, and other
              general trading goods.
            </p>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginTop: "14px",
              }}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--secondary)", fontSize: "22px" }}
                  >
                    check_circle
                  </span>
                  <p className="section-text" style={{ margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="Corporate meeting"
              style={{
                width: "100%",
                borderRadius: "28px",
                minHeight: "460px",
                objectFit: "cover",
                boxShadow: "var(--shadow-xl)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          <div
            className="card"
            style={{
              padding: "32px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <span className="section-tag">Our Mission</span>
            <h3
              style={{
                fontFamily: "Manrope",
                fontSize: "1.7rem",
                color: "var(--primary)",
                marginBottom: "14px",
              }}
            >
              Deliver dependable trade support with professionalism.
            </h3>
            <p className="section-text">
              Our mission is to provide efficient import-export and trading
              solutions that help businesses move forward with confidence,
              consistency, and reliable coordination.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "32px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <span className="section-tag">Our Vision</span>
            <h3
              style={{
                fontFamily: "Manrope",
                fontSize: "1.7rem",
                color: "var(--primary)",
                marginBottom: "14px",
              }}
            >
              Build lasting global business relationships.
            </h3>
            <p className="section-text">
              We aim to become a recognized and reliable name in trade by
              maintaining strong business values, product flexibility, and
              long-term partner trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 46px" }}>
            <span className="section-tag">Core Values</span>
            <h2 className="section-title" style={{ marginBottom: "14px" }}>
              The principles that define our business approach
            </h2>
            <p className="section-text" style={{ margin: "0 auto" }}>
              We focus on trust, professional handling, and responsible business
              conduct in every trade relationship.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "22px",
            }}
          >
            {values.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "28px",
                  background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
                }}
              >
                <div
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "16px",
                    background: "var(--surface-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "30px", color: "var(--secondary)" }}
                  >
                    {item.icon}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    marginBottom: "10px",
                    color: "var(--primary)",
                  }}
                >
                  {item.title}
                </h3>

                <p className="section-text">{item.text}</p>
              </div>
            ))}
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "26px",
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-tag" style={{ color: "#e0b85c" }}>
              Company Strength
            </span>
            <h2 className="section-title" style={{ color: "white", marginBottom: "16px" }}>
              Focused on quality, credibility and business continuity
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.85,
                maxWidth: "720px",
              }}
            >
              Our strength lies in diversified product support, a professional
              trade mindset, and a commitment to building dependable business
              partnerships in domestic as well as international markets.
            </p>
          </div>

          <div
            className="card"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "none",
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(120px,1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  padding: "18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <h4 style={{ color: "#fff", fontFamily: "Manrope", marginBottom: "6px" }}>
                  Trusted
                </h4>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: 1.7 }}>
                  Professional and reliable business support.
                </p>
              </div>

              <div
                style={{
                  padding: "18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <h4 style={{ color: "#fff", fontFamily: "Manrope", marginBottom: "6px" }}>
                  Diverse
                </h4>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: 1.7 }}>
                  Multi-category product handling capability.
                </p>
              </div>

              <div
                style={{
                  padding: "18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <h4 style={{ color: "#fff", fontFamily: "Manrope", marginBottom: "6px" }}>
                  Global
                </h4>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: 1.7 }}>
                  Domestic and international trade mindset.
                </p>
              </div>

              <div
                style={{
                  padding: "18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <h4 style={{ color: "#fff", fontFamily: "Manrope", marginBottom: "6px" }}>
                  Quality
                </h4>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: 1.7 }}>
                  Strong focus on dependable execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;