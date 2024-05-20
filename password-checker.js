//using the necessary imports while following EJS
import express from"express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

//initialise the necessary variables
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var pass = ""

app.use(bodyParser.urlencoded({extended:true}));

function passCheck(req, res, next){
    pass = req.body["password"];
    next();
}
app.use(passCheck);

//setting up the landing page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req,res,next) =>{
    if(pass === "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.sendFile(__dirname + "/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
