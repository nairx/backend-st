import express from "express";
import cors from "cors"
const app = express();

app.use(cors())


app.listen(8080, () => {
  console.log("Server started on port 8080");
});

app.get("/", (req, res) => {
  const products = [
    { name: "Product 1", price: 35 },
    { name: "Product 2", price: 65 },
    { name: "Product 3", price: 85 },
  ];
  res.json(products);
});
