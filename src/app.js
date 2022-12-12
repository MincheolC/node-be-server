const express = require("express");
const routes = require("./routes");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to API Server!!");
});
app.use("/", routes);

app.use((req, res, _next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, _next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
});

module.exports = app;
