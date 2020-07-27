var express = require('express');
var app = express();
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var database;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  database=db;
  var dbo = db.db("ToolBoxQuiz");
  dbo.createCollection("QuizQuestion", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
});

app.post('/putjsondata', function (req, res) {
   fs.writeFile( __dirname + "/src/assets/" + "survey.json", JSON.stringify(req.body), function (err) {
    if(err) throw err;
   });
   var dbo = database.db("ToolBoxQuiz");
   var data=JSON.stringify(req.body).trim();
   let coll = dbo.collection('QuizQuestion');
   var totalrows=1;
   var countval=1;
   coll.count().then((count) => {
      console.log("hello"+count);
      countval=count+1;
   });
   totalrows="Quizquestion"+countval;
   var myobj = { id: totalrows, json:data };
   dbo.collection("QuizQuestion").insertOne(myobj, function(err, res) {
     if (err) throw err;
     console.log("1 document inserted");
   });
})



app.get('/index', function (req, res) {
   fs.readFile( __dirname + "/" + "index.html", 'utf8', function (err, data) {
	   console.log(err);
      console.log( data );
      res.end( data );
   });
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})