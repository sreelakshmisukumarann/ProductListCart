require("dotenv").config();
const express = require("express");
const cors = require("cors");

// connect route
const router = require("./routes/route");

// connet file
require("./connection/connect");

// create server
const ProductServer = express();
ProductServer.use(express.json());
ProductServer.use(cors());
ProductServer.use(router);

const PORT = 4000 || process.env.PORT;

ProductServer.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
