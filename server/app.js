"use strict";

const config = require("./config");
const stripe = require("stripe")(config.stripe.secretKey);
const express = require("express");
const session = require("cookie-session");
const passport = require("passport");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const moment = require("moment");
const cors = require("cors");

const app = express();
app.set("trust proxy", true);

// MongoDB.
const mongoose = require("mongoose");
mongoose.connect(config.mongo.uri);

// View engine setup.
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Enable sessions using encrypted cookies.
app.use(
  session({
    secret: config.secret,
    signed: true,
  })
);

// Useful middleware setup.
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


// Middleware that exposes the pilot object (if any) to views.
app.use((req, res, next) => {
  if (req.user) {
    res.locals.pilot = req.user;
  }
  next();
});
app.locals.moment = moment;

// CRUD routes for the user
app.use('/customer', require('./routes/customer'));

app.post("/api/nodox/login", (req, res) => {
  const user = req.body;
  const { profileObj } = user;
  return res.status(200).json(profileObj);
});

// Index page for Rocket Rides.
app.get("/", (req, res) => {
  res.render("index");
});


// Catch 404 errors and forward to error handler.
app.use((req, res, next) => {
  res.status(404).render("404");
});

// Error handlers.

// Development error handler.
// Will print stacktrace.
if (app.get("env") === "development") {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// Production error handler.
// No stacktraces leaked to user.
app.use((err, req, res) => {
  console.log(err);
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

// Start the server on the correct port.
const server = app.listen(process.env.PORT || config.port, () => {
  console.log(`Rocket Rides listening on port ${server.address().port}`);
});
