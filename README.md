User can add,edit,delete and search Employee.

Frontend-HTML, CSS , bootstrap and Javascript is used.
Backed- NodeJs and MySql 

Using Jwt Web token for Authentication and in backend a loggedin function to prevent accesing the url if the user is not logged in.

to get started just type npm install in the sorce directory // all dependencies are in package.json


#REQUIREMENTS 
NODEJS wih NPM 
MYSQL
DATABASE_HOST = localhost
DATABASE_USER = root
DATABASE_PASSWORD = password
DATABASE = my_sql

datatbase details in env file

#for login and registration
CREATE TABLE users (
 id INT PRIMARY KEY AUTO_INCREMENT,
 email VARCHAR(50) ,
 password VARCHAR(255)
);

#
FOR employe management
CREATE TABLE employe (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(50),
  phoneNumber VARCHAR(15),
  address VARCHAR(255),
  country VARCHAR(50),
  city VARCHAR(50),
  skills VARCHAR(255)
);
