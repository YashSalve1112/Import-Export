import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer premium-footer">
      <div className="container">
        <div className="footer-top-strip">
          <div className="footer-top-card">
            <span className="material-symbols-outlined">public</span>
            <div>
              <h4>Global Trade Focus</h4>
              <p>Import, export and multi-product business solutions.</p>
            </div>
          </div>

          <div className="footer-top-card">
            <span className="material-symbols-outlined">workspace_premium</span>
            <div>
              <h4>Trusted Operations</h4>
              <p>Professional coordination with quality-driven execution.</p>
            </div>
          </div>

          <div className="footer-top-card">
            <span className="material-symbols-outlined">handshake</span>
            <div>
              <h4>Business Partnerships</h4>
              <p>Focused on long-term and reliable trade relationships.</p>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <h3>BHATIYANIJI Majisa Overseas Pvt. Ltd.</h3>
            <p>
              A professional import-export and trading company based in Surat,
              Gujarat, serving domestic and international markets with trust,
              reliability, and structured business support.
            </p>

            <div className="footer-badges">
              <span>Import</span>
              <span>Export</span>
              <span>Trading</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Core Services</h4>
            <p>Import Services</p>
            <p>Export Services</p>
            <p>Logistics Support</p>
            <p>Product Trading</p>
            <p>Business Coordination</p>
          </div>

          <div className="footer-contact">
            <h4>Business Info</h4>
            <p>Surat, Gujarat, India</p>
            <p>Multi-product Trading Company</p>
            <p>Business inquiries welcome</p>
            <p>Professional domestic & international support</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 BHATIYANIJI Majisa Overseas Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;