require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const app = express();
const PORT = !process.env.PORT ? 3000 : process.env.PORT;
const t1 = require("./routes/train1"),
  t2 = require("./routes/train2"),
  t3 = require("./routes/train3");
const arr = [t1, t2, t3];
app.set('json spaces', 4)
app.use(express.static("client/public"));

arr.forEach((r, idx) => {
  return app.use(`/train${idx + 1}`, r);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
