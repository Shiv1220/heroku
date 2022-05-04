var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
const route = require('./routes/index');

// var MongoStore = require('connect-mongo')(session);

mongoose.connect("mongodb+srv://root:3URztzrmqBhzrzLJ@cluster0.g5v1o.mongodb.net/logistic?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(session({
  secret: 'work hard',
  resave: false,
  saveUninitialized: false,
  
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

var index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});



// app.get('/',(req,res)=>{
//   res.render("home");
// });
const PORT = process.env.PORT || 2500;
app.listen(PORT, function () {
  console.log('Server is started on '+PORT);
});