const express = require("express");

const app = express();

app.use(express.json)

const PORT = 3500;

app.get("/", (req, res) => {
  res.send("Hello Travellers");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
