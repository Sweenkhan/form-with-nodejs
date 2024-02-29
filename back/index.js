import express from "express";
import cors from "cors";
import connection from "./db/connection.js";
import user from "./models/user.js";
import Question from "./models/quiz.js";
import bcrypt from "bcrypt";
 
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  // res.status(200).sendFile(__dirname + "main.js")
});


app.get("/quiz", async(req, res) => {
    
    const showQuestion = await Question.find();  
    console.log(showQuestion.toString())
    
    if(showQuestion){
      res.status(200).json(showQuestion);

    }else{
      res.status(401).json("error")
    }
    //  console.log(req.body)
} )
 
 


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userTryingToLogin = await user.findOne({ username });

    if (userTryingToLogin) {
      const match = await bcrypt.compare(password, userTryingToLogin.password);

      if (match) {
        console.log("Password match");
        res.status(200).send("success");
      } else {
        console.log("Password doesn't match!");
        res.status(402).send("Invalid credentials");
      }
    } else {
      console.log("User not found!");
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Internal server error");
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
  res.status(200).send("success");
});

connection.then(() => {
  app.listen(8080, () => console.log("Server started at port 8080"));
});
