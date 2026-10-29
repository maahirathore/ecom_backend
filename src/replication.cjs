require("dotenv").config();

const express = require("express");
const {
  MongoClient,
  ReadPreference,
} = require("mongodb");

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URL;

const writeClient = new MongoClient(uri, {
  readPreference: ReadPreference.PRIMARY,
});

const readClient = new MongoClient(uri, {
  readPreference: ReadPreference.SECONDARY,
});

let products;
let replicaProducts;

async function startServer() {
  await writeClient.connect();
  await readClient.connect();

  products = writeClient
    .db("myapp")
    .collection("products");

  replicaProducts = readClient
    .db("myapp")
    .collection("products");

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

// WRITE: Primary
app.post("/products", async (req, res) => {
  try {
    const result = await products.insertOne({
      name: req.body.name,
      price: req.body.price,
      createdAt: new Date(),
    });

    res.status(201).json({
      message: "Product created",
      id: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({
      error: "Unable to create product",
    });
  }
});

// READ: Secondary
app.get("/products", async (req, res) => {
  try {
    const data = await replicaProducts
      .find({})
      .limit(100)
      .toArray();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Unable to fetch products",
    });
  }
});

startServer().catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1);
});