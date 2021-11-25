const express = require("express");
require("dotenv").config();
const cors = require("cors");
const massive = require("massive");
const path = require("path");
const getProductInfoRouter = require("./router/getProductInfo");

// require("dotenv").config({
//   path: path.join(__dirname, "./.env"),
// });

const { CONNECTION_STRING, PORT } = process.env;

const app = express();
app.use(express.json());
// app.use(cors());

// app.use("/", getProductInfoRouter);

app.get("/api/product", async (req, res) => {
  console.log("I'm in the controller function");
  const db = req.app.get("db");
  console.log(db);
  try {
    const getAllProducts = await db.products.find();
    console.log(getAllProducts);
    res.status(200).send(getAllProducts);
  } catch (error) {
    console.log(error);
  }
});

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT} `);
});
