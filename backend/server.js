require("dotenv").config(); // ✅ VERY IMPORTANT

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


/* ================= ENV ================= */
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const ADMIN_PASSWORD =process.env.ADMIN_PASSWORD;

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json({ limit: "10mb" }));

/* ================= DB CONNECT ================= */
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    console.error("MongoDB connection error:", err.message)
  );

/* ================= SCHEMAS ================= */
const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, default: "", trim: true },
    phone: { type: String, default: "", trim: true },
    subject: { type: String, default: "", trim: true },
    message: { type: String, default: "", trim: true },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, default: "", trim: true },
    desc: { type: String, default: "", trim: true },
    tags: [{ type: String, trim: true }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/* ================= MODELS ================= */
const Inquiry = mongoose.model("Inquiry", inquirySchema);
const Product = mongoose.model("Product", productSchema);

/* ================= DEFAULT PRODUCTS ================= */
const defaultProducts = [
  {
    title: "Agriculture Products",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
    desc: "High-quality agriculture products.",
    tags: ["Manufacturing", "Logistics"],
  },
];

/* ================= SEED ================= */
async function seedProductsIfEmpty() {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany(defaultProducts);
    console.log("Default products seeded");
  }
}

mongoose.connection.once("open", seedProductsIfEmpty);

/* ================= AUTH ================= */
function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}

/* ================= ROUTES ================= */

app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

/* ADMIN LOGIN */
app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({
      token: ADMIN_TOKEN,
      admin: { email: ADMIN_EMAIL },
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

/* CONTACT FORM */
app.post("/contact", async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.json({ message: "Inquiry saved ✅", inquiry });
  } catch (err) {
    res.status(500).json({ message: "Error saving inquiry" });
  }
});

/* GET INQUIRIES */
app.get("/inquiries", requireAdmin, async (req, res) => {
  const data = await Inquiry.find().sort({ createdAt: -1 });
  res.json(data);
});

/* DELETE INQUIRY */
app.delete("/inquiries/:id", requireAdmin, async (req, res) => {
  await Inquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

/* PRODUCTS */
app.get("/products", async (req, res) => {
  const data = await Product.find({ isActive: true });
  res.json(data);
});

/* ADD PRODUCT */
app.post("/products", requireAdmin, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

/* DELETE PRODUCT */
app.delete("/products/:id", requireAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

/* GET STATS */
app.get("/stats", requireAdmin, async (req, res) => {
  const totalProducts = await Product.countDocuments();
  const activeProducts = await Product.countDocuments({ isActive: true });
  const totalInquiries = await Inquiry.countDocuments();
  const recentInquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(5);

  res.json({
    totalProducts,
    activeProducts,
    totalInquiries,
    recentInquiries,
  });
});

/* ================= START ================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Admin Email: ${ADMIN_EMAIL}`);
  console.log(`Admin Password: ${ADMIN_PASSWORD}`);
});