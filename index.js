const express = require("express");
const app = express();
const port = 3000;

app.get("/danh-muc", (req, res) => {
  res.send("Hello Phuc !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
