const mongo = require("mongoose");

conString = process.env.DATABASE;

mongo
  .connect(conString)
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Failed to connect database");
  });
