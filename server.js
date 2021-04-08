const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const farmers = require("./farmers");
const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
const app = express();

app.get("/api/v3/farmers", (req, res) => {
  res.json(farmers);
});
app.get("/api/v3/farmers/:name", (req, res) => {
  res.json(farmers.filter((farmer) => farmer.name === req.params.name));
});

app.delete("/api/v3/farmers/:name", (req, res) => {
  res.json(farmers.filter((farmer) => farmer.name !== req.params.name));
  if (farmer) {
    res.json({
      msg: `farmer delete ${name}`,
      farmers: farmers.filter((farmer) => farmer.name !== name),
    });
  }
});

app.put("/api/v3/farmers/:name", (req, res) => {
  const farmerFound = farmers.some((farmer) => farmer.name === req.params.name);
  farmerFound &&
    farmers.forEach((farmer) => {
      farmer.name === req.params.name && (farmer.name = req.body.name);
    });
  res.json(farmers);
});

app.post("/api/v3/farmer", (req, res) => {
  const farmer = {
    name: req.body.name,
    community: req.body.community,
    gender: req.body.gender,
    contact: req.body.contact,
  };
  farmer.push(farmer);
  res.json(farmers);
});
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
