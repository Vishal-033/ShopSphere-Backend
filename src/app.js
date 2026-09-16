const express = require("express");
const healthRouter = require("./routes/healthrouter");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.use("/api", healthRouter);

app.get("/", (req, res) => {
  res.send("ShopSphere API is running");
});

module.exports = app;












