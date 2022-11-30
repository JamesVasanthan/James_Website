const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");
const https = require("https");

const app = express ();

app.use(express.static(__dirname+"/Source")) ;
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});



app.post("/", function(req, res){
	const firstName= req.body.fname;
	const lastName= req.body.lname;
	const email= req.body.mail;
	
	 console.log (firstName, lastName, email);


});

app.get("/MyResume", function(req, res){
	res.sendFile(__dirname+"/Source/Resume (James_Vasanthan).pdf");
});

app.get("/Hobbies", function(req, res){
	res.sendFile(__dirname+"/Source/Hobbies.pdf");
});

app.listen(process.env.PORT || 3000, function(){

	console.log("My server");

});

// Api Key
// d1f951d44640c36312a15dd1d50c6b0e-us8

// listen
// a77bc6c449  a77bc6c449