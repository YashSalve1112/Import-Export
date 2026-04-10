const services = [
  {
    icon: "south_west",
    title: "Import Services",
    text: "Structured import support including sourcing, coordination, documentation assistance, and efficient product handling for smooth business operations.",
  },
  {
    icon: "north_east",
    title: "Export Services",
    text: "Professional export support designed to help businesses expand into wider markets with reliable planning and execution.",
  },
  {
    icon: "local_shipping",
    title: "Logistics & Shipping",
    text: "End-to-end logistics coordination for better movement of goods, shipment planning, and timely delivery support.",
  },
  {
    icon: "inventory_2",
    title: "Product Trading",
    text: "Multi-category trading support across agriculture products, metals, sandalwood, cosmetics, and general trading goods.",
  },
  {
    icon: "handshake",
    title: "Business Coordination",
    text: "Professional coordination with suppliers, buyers, and partners to keep trade processes smooth and dependable.",
  },
  {
    icon: "support_agent",
    title: "Client Support",
    text: "Responsive support for inquiries, product discussions, trade planning, and long-term business relationships.",
  },
];

const process = [
  "Requirement understanding and discussion",
  "Product sourcing and trade planning",
  "Coordination and documentation support",
  "Logistics and shipment handling",
  "Delivery follow-up and business continuity",
];

const Services = () => {
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
            "linear-gradient(rgba(7, 21, 45, 0.8), rgba(7, 21, 45, 0.92)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
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
          style={{ position: "relative", zIndex: 2, textAlign: "center", color: "white" }}
        >
          <span className="section-tag" style={{ color: "#e0b85c" }}>
            Our Services
          </span>

          <h1
            style={{
              fontFamily: "Manrope",
              fontWeight: 800,
              fontSize: "clamp(2.6rem,6vw,4.8rem)",
              marginBottom: "16px",
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
            }}
          >
            Complete Trade &
            <br />
            Business Support
          </h1>

          <p
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
            }}
          >
            We provide structured import-export and trading services designed to
            support modern businesses with reliability, professional execution,
            and smooth coordination.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 52px" }}>
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title" style={{ marginBottom: "14px" }}>
              Business services built for efficiency and reliability
            </h2>
            <p className="section-text" style={{ margin: "0 auto" }}>
              Our core services are designed to simplify trade activities and
              support business growth with dependable coordination.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "24px",
            }}
          >
            {services.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "30px",
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
                    style={{ fontSize: "30px", color: "var(--primary)" }}
                  >
                    {item.icon}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 800,
                    fontSize: "1.3rem",
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

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-tag">Work Process</span>
            <h2 className="section-title" style={{ marginBottom: "18px" }}>
              A simple and efficient workflow for business execution
            </h2>

            <p className="section-text" style={{ marginBottom: "24px" }}>
              We follow a practical and structured process that supports trade
              efficiency from initial discussion to final delivery and follow-up.
            </p>

            <div
              className="card"
              style={{
                padding: "24px",
                background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
              }}
            >
              {process.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom:
                      index !== process.length - 1
                        ? "1px solid rgba(7,21,45,0.08)"
                        : "none",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "var(--secondary)", fontSize: "22px" }}
                  >
                    check_circle
                  </span>
                  <p className="section-text" style={{ margin: 0 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80"
              alt="Logistics and trade"
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

      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "22px",
          }}
        >
          <div
            className="card"
            style={{
              padding: "28px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: "var(--secondary)",
                fontSize: "34px",
                marginBottom: "12px",
              }}
            >
              inventory
            </span>
            <h3
              style={{
                fontFamily: "Manrope",
                fontWeight: 800,
                fontSize: "1.25rem",
                marginBottom: "10px",
                color: "var(--primary)",
              }}
            >
              Product Versatility
            </h3>
            <p className="section-text">
              Multiple product categories supported under one structured
              business approach.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "28px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: "var(--secondary)",
                fontSize: "34px",
                marginBottom: "12px",
              }}
            >
              schedule
            </span>
            <h3
              style={{
                fontFamily: "Manrope",
                fontWeight: 800,
                fontSize: "1.25rem",
                marginBottom: "10px",
                color: "var(--primary)",
              }}
            >
              Timely Coordination
            </h3>
            <p className="section-text">
              Focused planning and shipment support for smoother business
              operations.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "28px",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: "var(--secondary)",
                fontSize: "34px",
                marginBottom: "12px",
              }}
            >
              groups
            </span>
            <h3
              style={{
                fontFamily: "Manrope",
                fontWeight: 800,
                fontSize: "1.25rem",
                marginBottom: "10px",
                color: "var(--primary)",
              }}
            >
              Partner Support
            </h3>
            <p className="section-text">
              Professional interaction with clients, buyers, and suppliers for
              long-term business value.
            </p>
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
        <div className="container" style={{ textAlign: "center", color: "white" }}>
          <span className="section-tag" style={{ color: "#e0b85c" }}>
            Business Focus
          </span>

          <h2 className="section-title" style={{ color: "white", marginBottom: "16px" }}>
            Reliable execution with a professional business approach
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
            }}
          >
            Our goal is to simplify trade processes and provide dependable
            services that help businesses grow confidently in domestic and
            international markets.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;