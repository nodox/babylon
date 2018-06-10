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
const axios = require("axios");
const querystring = require("querystring");

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

// Initialize Passport and restore any existing authentication state.
app.use(passport.initialize());
app.use(passport.session());

// Middleware that exposes the pilot object (if any) to views.
app.use((req, res, next) => {
  if (req.user) {
    res.locals.pilot = req.user;
  }
  next();
});
app.locals.moment = moment;

// CRUD routes for the user
app.use("/api", require("./customer").routes);
app.get("/api/github/oauth/authorize", async (req, res) => {
  // http://blog.vjeux.com/2012/javascript/github-oauth-login-browser-side.html

  const { code, state } = req.query;
  // TODO: compare client and server state string to prevent CSRF

  let result = null;

  try {
    result = await axios.post("https://github.com/login/oauth/access_token", {
      client_id: "7f3a16b13129a94ba10e",
      client_secret: "1a7affa3d5a414f1a3f68b3bc25a58c10a12061d",
      code: code,
      state: state,
    });

    const { access_token, scope, token_type } = querystring.parse(result.data);

    res.redirect("http://localhost:3000/user/store");
  } catch (e) {
    console.log(e);
  }
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
