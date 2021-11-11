const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("public/build"));

app.listen(3000);