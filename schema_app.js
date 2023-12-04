/*This file is to insert more random data into the waitlist*/

var mysql = require('mysql');
var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      database : 'join_us'
    });

// console.log(faker.internet.email());

// console.log(faker.date.past());

// root user: root
// database name: mysql

// inserting data 


const { faker } = require('@faker-js/faker');
     

// var person = {
// 		email: faker.internet.email(),
// 		created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function (err, results) {
// 	if (err) throw err;
// 	console.log(results);	
// });

// connection.end();

//inserting lots of data

var data = [];
for(var i = 0; i<500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
]);
	
}


//console.log(data);

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q,[data], function(err,result){
console.log(err);
console.log(result);
});

connection.end();