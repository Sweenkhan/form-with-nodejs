import express from "express";
import cors from "cors";
import connection from "./db/connection.js";
import user from "./models/user.js";
import bcrypt from "bcrypt";

import { Admin } from "mongodb";

const app = express();
const saltRounds = 10;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  // res.status(200).sendFile(__dirname + "main.js")
});


app.get("/quiz", (req, res) => {
    
    const showQuestion =  Questions.find({});
     console.log(req.body)
     console.log(showQuestion)
     res.status(200).e("done");
} )



app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userTryingToLogin = await user.findOne({ username });

  if (user) {
    
    const match = await bcrypt.compare(password, userTryingToLogin.password);

    if (match) {
        console.log(match)
      if (username === userTryingToLogin.username) {
        console.log("ho rha hai user check to");
        res.status(200).send("success");
      } else {
        res.status(402).send("invalid credential");
      }
    }
  } else {
    res.status(401).send("invalid credential");
  }
});




app.post("/register", async (req, res) => {
  const { name, email, phone, username, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 10);

  const newUser = new user({
    name,
    email,
    phone,
    username,
    password: hashedpassword,
  });



  await newUser.save();
  res.status(200).end("Well Done");
});

connection.then(() => {
  app.listen(8080, () => console.log("Server started at port 8080"));
});
