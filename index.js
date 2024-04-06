const express = require("express");
const app = express();

let cnt = 0;
app.get("/", (req, res) => {
  console.log(cnt++);
  res.json({ count: cnt, process: process.pid });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));