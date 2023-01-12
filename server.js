//* 'npm init -y'
//* 'npm i inquirer@8.2.4
//* 'npm i mysql2'
//* npm install console.table (https://www.npmjs.com/package/console.table)
//* 'npm i dotenv'

//* require express package
//* bind the application middleware to an instance of the app object by using 'app.use()' and 'app.METHOD()' functions, where METHOD is the HTTP method of the request that te middleware function handles (such as GET, PUT, POST, or DELETE)
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

//* Import model to sync table with database
const app = express();
const PORT = process.env.PORT || 3001;
console.log(PORT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

//* turn on connection to db and server
//* Force false so data doesn't get dropped on every sync
// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});