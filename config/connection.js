//* sequalize framework - allows you to use mySQL in JS
//* building backend APIs so you can run server in Postman
//* use sequalize to build sequal queries 
//* requiring sequalize and setting it equal to capital 'Sequalize'
//* this will connect to database, and this is what we will export

//* create a connection object
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { //* database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;
