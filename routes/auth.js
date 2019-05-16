
var router = require('express').Router();

app.get('/auth', (req, res) => {
    res.json({
      message: 'Welcome to the Auth Api'
    });
  });
  