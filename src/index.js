const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup the express assets path
app.use("/", express.static(path.join(__dirname, "../client")));

// API calls ------------------------------------------------------------------------------------
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "./client/pages/user.html"));
});
const { User } = require("./user");
app.get("/users", async (req, res) => {
  const data = await fetch("https://dummyjson.com/users"); // array of user
  const { users } = await data.json();
  const newData = users.map((user) => {
    const newUser = new User(user.id, user.firstName, user.lastName);
    return newUser.displayInfo();
  });
  return res.json({ success: true, newData });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
