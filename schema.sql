/*Use mysql-ctl cli to access mysql terminal*/

/*This is where we can run MYSQL code without being in the mysql terminal */

CREATE DATABASE join_us;

CREATE TABLE users(
email VARCHARE(255) PRIMARY KEY,
created_at TIMESTAMP DEFAULT NOW()
);

SELECT email, created_at
FROM users
ORDER BY created_at ASC
LIMIT 5;



