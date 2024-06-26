const dotenv = require("dotenv");

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "./production.env"
      : "./development.env",
});

const app = require("./app");

const mongoose = require("mongoose");
const { MONGO_URL } = process.env;
console.log(MONGO_URL);

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(5001, () => {
      console.log("Server running. Use our API on port: 5001");
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
