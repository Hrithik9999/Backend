// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb+srv://rajputhrithik9:Hrithik@cluster0.igo0m62.mongodb.net/aaravtrail3")
//   .then(() => {
//     console.log("db connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set({ strictQuery: false });

mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("aaravtrail3 db.Connected Sucessfully"))
  .catch((err) => console.log(err));