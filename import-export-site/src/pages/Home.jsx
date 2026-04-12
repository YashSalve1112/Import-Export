
import { Link } from "react-router-dom";
import containerImg from "../assets/container.jpg";

const productCards = [
  {
    title: "Agriculture Products",
    text: "Quality-driven agricultural goods handled with dependable sourcing, trade coordination, and professional market support.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Base Metal Items",
    text: "Reliable trading support for industrial and commercial metal requirements with business-focused execution.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sandalwood / Chandan Wood",
    text: "Premium-category business solutions with quality emphasis and structured trade coordination.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cosmetic Products",
    text: "Professional cosmetic product trading support for domestic and international business requirements.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
];

const services = [
  {
    icon: "south_west",
    title: "Import Services",
    text: "Structured import support including sourcing, coordination, and efficient handling for smooth trade execution.",
  },
  {
    icon: "north_east",
    title: "Export Services",
    text: "Professional export support for businesses looking to build strong domestic and international trade connections.",
  },
  {
    icon: "local_shipping",
    title: "Logistics Support",
    text: "Reliable shipment planning and operational support designed for timely and efficient movement of goods.",
  },
];

const strengths = [
  "Trusted and professional business approach",
  "Diversified multi-product trading capability",
  "Domestic and international market support",
  "Reliable coordination and quality-focused execution",
];

const stats = [
  { number: "Multi", label: "Product Categories" },
  { number: "Global", label: "Trade Vision" },
  { number: "Trusted", label: "Business Approach" },
];

const Home = () => {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background:
            "linear-gradient(rgba(7, 21, 45, 0.72), rgba(7, 21, 45, 0.9)), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(199,154,59,0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 20%)",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-tag" style={{ color: "#e0b85c" }}>
                Global Trade Excellence
              </span>

              <h1
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 7vw, 5.8rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                  marginBottom: "22px",
                  maxWidth: "760px",
                }}
              >
                Redefining Modern
                <br />
                <span style={{ color: "#e0b85c" }}>Import-Export</span>
                <br />
                Business
              </h1>

              <p
                style={{
                  maxWidth: "700px",
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "clamp(1rem, 2.2vw, 1.12rem)",
                  lineHeight: 1.9,
                  marginBottom: "30px",
                }}
              >
                BHATIYANIJI Majisa Overseas Private Limited is a professional
                import-export and trading company focused on reliability,
                quality-driven execution, and strong business coordination
                across domestic and international markets.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                <Link to="/services" className="primary-btn">
                  Explore Services
                </Link>

                <Link
                  to="/contact"
                  className="outline-btn"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.22)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Send Inquiry
                </Link>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
                  gap: "14px",
                  maxWidth: "620px",
                }}
              >
                {stats.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "18px 18px",
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Manrope",
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: "6px",
                      }}
                    >
                      {item.number}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.74)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
                  backdropFilter: "blur(14px)",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    borderRadius: "22px",
                    overflow: "hidden",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={containerImg}
                    alt="Global trade"
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <p
                      style={{
                        color: "#e0b85c",
                        fontSize: "13px",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      Core Focus
                    </p>
                    <p style={{ color: "white", lineHeight: 1.7, fontSize: "14px" }}>
                      Import, Export and diversified trading support.
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <p
                      style={{
                        color: "#e0b85c",
                        fontSize: "13px",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      Business Base
                    </p>
                    <p style={{ color: "white", lineHeight: 1.7, fontSize: "14px" }}>
                      Surat, Gujarat with a strong global business outlook.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
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
            <span className="section-tag">About Our Company</span>
            <h2 className="section-title" style={{ marginBottom: "18px" }}>
              Building dependable trade relationships through professionalism
              and quality.
            </h2>

            <p className="section-text" style={{ marginBottom: "18px" }}>
              We operate with a business-first mindset, helping clients and
              partners with structured trade support across multiple categories
              including agriculture products, base metal items, sandalwood,
              cosmetic goods, and general trading items.
            </p>

            <p className="section-text" style={{ marginBottom: "24px" }}>
              Our focus remains on reliability, practical business coordination,
              and long-term trust in every domestic and international trade
              relationship.
            </p>

            <Link to="/about" className="primary-btn">
              Learn More
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "18px",
            }}
          >
            <div
              className="card"
              style={{
                padding: "24px",
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
                verified_user
              </span>
              <h4
                style={{
                  fontFamily: "Manrope",
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                  color: "var(--primary)",
                }}
              >
                Trusted Execution
              </h4>
              <p className="section-text" style={{ fontSize: "14px" }}>
                Professional handling with a strong focus on reliability and
                business integrity.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: "24px",
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
                public
              </span>
              <h4
                style={{
                  fontFamily: "Manrope",
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                  color: "var(--primary)",
                }}
              >
                Global Outlook
              </h4>
              <p className="section-text" style={{ fontSize: "14px" }}>
                Strong domestic and international trade support with modern
                business vision.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: "24px",
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
                inventory_2
              </span>
              <h4
                style={{
                  fontFamily: "Manrope",
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                  color: "var(--primary)",
                }}
              >
                Diverse Products
              </h4>
              <p className="section-text" style={{ fontSize: "14px" }}>
                Multi-category product support aligned with practical market
                requirements.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: "24px",
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
                handshake
              </span>
              <h4
                style={{
                  fontFamily: "Manrope",
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                  color: "var(--primary)",
                }}
              >
                Partner Focus
              </h4>
              <p className="section-text" style={{ fontSize: "14px" }}>
                Built around long-term relationships and dependable business
                coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 52px" }}>
            <span className="section-tag">Product Portfolio</span>
            <h2 className="section-title" style={{ marginBottom: "14px" }}>
              Strategic categories built for modern trade opportunities
            </h2>
            <p className="section-text" style={{ margin: "0 auto" }}>
              Our diversified portfolio supports different industries with
              reliability, structured coordination, and practical business
              execution.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "22px",
            }}
          >
            {productCards.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  overflow: "hidden",
                  borderRadius: "22px",
                  background: "rgba(255,255,255,0.98)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="section-text" style={{ fontSize: "15px" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              alignItems: "end",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <div style={{ maxWidth: "700px" }}>
              <span className="section-tag">Business Services</span>
              <h2 className="section-title">
                Complete support for import, export and professional trading
              </h2>
            </div>

            <Link
              to="/services"
              style={{
                color: "var(--secondary)",
                fontWeight: 800,
                fontFamily: "Manrope",
              }}
            >
              View All Services
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "22px",
            }}
          >
            {services.map((item, index) => (
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
                    width: "64px",
                    height: "64px",
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
                    style={{ color: "var(--primary)", fontSize: "30px" }}
                  >
                    {item.icon}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    color: "var(--primary)",
                    marginBottom: "10px",
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
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "34px",
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-tag" style={{ color: "#e0b85c" }}>
              Why Choose Us
            </span>
            <h2 className="section-title" style={{ color: "white", marginBottom: "16px" }}>
              Built on trust, quality and dependable business coordination
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.85,
                maxWidth: "620px",
              }}
            >
              We focus on creating stronger trade relationships through
              professionalism, product diversity, and practical market support
              tailored for modern business requirements.
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
            {strengths.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  padding: "14px 0",
                  borderBottom:
                    index !== strengths.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#e0b85c", fontSize: "24px" }}
                >
                  check_circle
                </span>

                <p style={{ color: "white", lineHeight: 1.7 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <div
          className="container card"
          style={{
            padding: "42px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(7,21,45,0.04), rgba(199,154,59,0.08))",
            borderRadius: "28px",
          }}
        >
          <span className="section-tag">Let’s Connect</span>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            Looking for a reliable import-export business partner?
          </h2>
          <p
            className="section-text"
            style={{ maxWidth: "760px", margin: "0 auto 24px" }}
          >
            Connect with us for trade discussions, sourcing requirements,
            partnership opportunities, and professional business support.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <Link to="/contact" className="primary-btn">
              Contact Us
            </Link>

            <Link
              to="/products"
              className="primary-btn"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f7f8fb)",
                color: "var(--primary)",
                boxShadow: "0 10px 24px rgba(7,21,45,0.08)",
              }}
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
