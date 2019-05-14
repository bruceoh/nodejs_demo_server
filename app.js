var http = require("http");
var express = require("express");
var app = express();
var port = 3001;
var v1 = require("./routes/v1");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/v1", v1);

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
