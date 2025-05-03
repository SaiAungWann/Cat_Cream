const express = require("express");
const app = express();
const mongoURL =
  "mongodb+srv://aungwannbim2022:catCream1234@catcreamcluster.ylemdc9.mongodb.net/?retryWrites=true&w=majority&appName=CatCreamCluster";
const mongoose = require("mongoose");

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const recipesRoutes = require("./routes/recipes");

require("dotenv").config();
const port = process.env.PORT || 5000;

const morgan = require("morgan");
const cors = require("cors");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
// app.get("/", (req, res) => res.json({ hollo: "Hello World!" }));

app.use("/api/recipes", recipesRoutes);
