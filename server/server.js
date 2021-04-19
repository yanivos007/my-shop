const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const { isTypeFlagSet } = require("tslint");

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    secret: "23hnv0vno4t0nvnwg4",
    key: "uniqueSessionID",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, maxAge: 60000 },
  })
);
app.use("/api", require("./apiRouter"));

const URI = `mongodb+srv://userDB:userDB@yaniv.hssax.mongodb.net/myShop?retryWrites=true&w=majority`;
const port = 8080;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => console.log(error));
