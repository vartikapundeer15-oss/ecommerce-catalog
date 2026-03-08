const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect database
connectDB();

// routes
app.use("/products", productRoutes);

// server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});