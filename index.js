const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const articleRouter = require("./route");

dotenv.config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const port =  process.env.PORT || 3000

app.listen(port,() =>{
    console.log('Node.js listening... ' + port);
})
app.use("/articles", articleRouter);

app.get("/", (req, res) => res.send("This is my index page"));
