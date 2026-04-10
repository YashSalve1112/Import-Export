import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import InquiriesPage from "./pages/InquiriesPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const hideChrome = location.pathname === "/admin" || location.pathname === "/admin-login";

  return (
    <>
      {!hideChrome ? <Navbar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin/all-inquiries"
          element={
            <ProtectedRoute>
              <InquiriesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideChrome ? (
        <a
          href="https://wa.me/918758028578"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬
        </a>
      ) : null}

      {!hideChrome ? <Footer /> : null}
    </>
  );
}

export default App;
