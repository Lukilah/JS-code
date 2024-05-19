//importing the files using the modular method (EJS)
import express from "express";

//declare the constants
const app = express();
const port = 3000;

//set up code to be shown on the home page
app.get('/', (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Hello, I'm Alvin Lukilah</h1>");
  })

//set up code to be shown on the about page
app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>CS graduate and aspiring full-stack web engineer</p>");
})

//set up code to be shown on the contact page
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>+0000000000</p>");
})

//code for ensuring the port is up & running
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })
