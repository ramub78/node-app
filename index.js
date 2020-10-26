/** Load required npm modules here */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

/** Initialize express */
const app = express();

/** Initialize middlewares */
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

/** Set port number */
const port = process.env.PORT || 8080;

/** Basic route */
app.get("/", (req, res) => {
  res.send("Hello, Welcome to Node.js Development");
});

/** Connection to Database */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err =>
    console.log(`Unable to connect to database: ${process.env.MONGO_URI}`, err)
  );

/** Routes definitions files */
const usersRouter = require("./routes/users");

/** Use routes */
app.use("/users", usersRouter);

/** Start server */
app.listen(port, () => {
  console.log(`Server running successfully in the Port: ${port}`);
});
