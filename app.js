var http = require("http");
var express = require("express");
var app = express();
var port = process.env.PORT || 3001;

var region = process.env.REGION || "seoul";


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("region : " + region);


app.use(require('./routes'));

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
