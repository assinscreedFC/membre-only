// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();
const {client}=require("./db.js");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.json());
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
//


app.post("/sign-up", async (req, res, next) => {
  try {
    await client.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      req.body.password,
    ]);
    res.status(200).send({good: "it's okey"})
  } catch(err) {
    return next(err);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await client.query("SELECT * FROM users WHERE username = $1", [username]);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
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

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "./succes",
    failureRedirect: "/"
  })
);

app.get("/", (req, res) => {
  if(req.user){
    res.status(200)
  }
});









// Route to get user data
app.get("/api/mp", (req, res) => {
  res.send(us);
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
