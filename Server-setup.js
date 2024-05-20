import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

app.use(morgan("dev")); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
