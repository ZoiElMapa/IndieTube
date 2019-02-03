const express = require("express")
const multer  = require("multer")

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: storage
});

const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post('/', upload.single('file-to-upload'), function(req, res) {
  res.redirect('/');
});

app.listen(3000);
