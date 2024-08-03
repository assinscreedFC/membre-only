const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();
const client = require("./db.js");
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SESSION_SECRET || "cats", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport setup
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await client.query("SELECT * FROM users WHERE username = $1", [username]);
      const user = rows[0];
      if (!user) return done(null, false, { message: "Incorrect username" });
      const match = await bcrypt.compare(password, user.password);
      if (!match) return done(null, false, { message: "Incorrect password" });
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await client.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];
    done(null, user);
  } catch(err) {
    done(err);
  }
});

// Routes
app.post("/api/sign-up", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await client.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword,
    ]);
    res.status(200).send({ good: "it's okey" });
  } catch (err) {
    next(err);
  }
});

app.post("/api/log-in",
  passport.authenticate("local", {
    successRedirect: "/succes",
    failureRedirect: "/",
  })
);

app.get("/api", (req, res) => {
  if (req.user) {
    res.status(200).send("User is authenticated");
  } else {
    res.status(401).send("Not authenticated");
  }
});

app.get("/api/mp", (req, res) => {
  res.send("cc");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
