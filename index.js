const express = require("express");
require("dotenv").config();
const router = require("./routes");

require("./Config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.listen(process.env.PORT || 8080, () => {
  console.log("Server started at port 8080");
});;
