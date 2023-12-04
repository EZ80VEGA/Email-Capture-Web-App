
/*requirements to run everything*/
var express = require('express'); /* makes the 'express' module a requirement to use*/
var mysql = require('mysql') /* makes the 'mysql' module a requirement to use*/
var bodyParser = require("body-parser"); /* a tool from 'express'*/
var app = express(); /* variable 'app' is referencing 'express module' */

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})); /*let's us extract information from 'post' requests*/
app.use(express.static(__dirname + "/public"));


/*connecting to mysql*/
var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      database : 'join_us'
    });

/* this shows the number of people on the waitlist - you can see this number on the site*/
app.get("/", function(req, res){ /* the below only runs when someone requests front-slash '/' */
	var q = "SELECT COUNT(*) AS count FROM users"; /* variable for the mysql query above*/
 	connection.query(q, function(err, results){
		if(err) throw err;
		var count = results[0].count; 
		res.render("home", {data: count}); /* "home" is referring to home.ejs file(html) - data will be found in that same file representing 'count'*/
	});
});

/* this helps with inputing the emails into the database*/
app.post("/register", function(req, res){
	var person = {
		email: req.body.email
	};
		/* this is the part that inputs the dat into the database */
		connection.query('INSERT INTO users SET ?', person, function(err, result){
			if(err) throw err;
			res.redirect( "/"); /* to rederict to the 'home' page once email has been submitted*/
 });
});

/* you see this message when you use the "/joke" at the end for the site - for fun* */
app.get("/joke", function(req, res){
	var joke = "What do you call a dog that does magic tricks? A labacadabrador.";
	res.send(joke);
});

/* you see this message when you use the "/random_num" at the end for the site - for fun* */
app.get("/random_num", function(req, res){
	var num = Math.random() * 10 + 1;
	res.send("Your lucky number is: " + num);
})

/* to run server */
app.listen(3000, function(){
	console.log("Server running on 3000")
});


/*In order for the link to work on the server you need to run this file. Directory is /workspace/MyCode/JoinUs - Or else it will not work*/