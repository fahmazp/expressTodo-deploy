const express = require('express')
const cors = require("cors");
const axios = require("axios");
require("dotenv").config()

const app = express()
const todoRoutes = require('./routes/todoRoutes')

// CORS setup to allow frontend domain
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

// calling routes
app.use('/todo',todoRoutes)

// Fetch products from FakeStoreAPI
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

const port = process.env.PORT  
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

