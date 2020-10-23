const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

const PORT = process.env.PORT || 4000;

app.post("/", (req, res) => {
  res.send({ response: { time: req.body.time, timezone: "utc" } });
});

app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
