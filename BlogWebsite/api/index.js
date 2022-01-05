const express = require("express");
const app = express();

app.use("/", (req, res) => {
  console.log("ovo je main url")
})

app.listen("5000", () => {
  console.log("backend radi.")
});
