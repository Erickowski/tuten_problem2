const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.post("/", (req, res) => {
  res.send({ response: { time: req.body.time, timezone: "utc" } });
});

app.listen(3000, () => {
  console.log("El servidor está funcionando en el puerto 3000");
});
