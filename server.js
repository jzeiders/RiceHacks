var express = require("express");
var request = require("request");
var sentiment = require("./sentiment.js");
var bodyParser = require("body-parser");
var Promise = require("promise");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/getData", function(req, res) {
	sentiment.analyze(req.body.string).then(function(data) {
    res.send(data);
	}).catch(function(err) {
    console.log(err);
		res.status("Err").send(err);
	});
});
app.post("/messageData", function(req,res){
  sentiment.analyze(req.body.string).then(function(data){
    console.log(data);
    res.send(JSON.stringify(data));
  }).catch(function(err){
    console.log(err);
  });

  /*
  fb.getMessage()



  */
});

app.listen(3000, function() {
	console.log("started server");
});
